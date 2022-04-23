import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { ref, watch, computed } from 'vue'

export default function useEditEventForm() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const events = JSON.parse(localStorage.getItem('events'))
    const event = events.find(event => event.id == route.params.id);
    const { handleSubmit, isSubmitting } = useForm({
        initialValues: {
            title: event.title,
            format: event.format,
            description: event.description,
            location: event.location,
            date: event.date,
            organization_id: event.organization_id,
            subdivision: !event.subdivision ? '' : event.subdivision,
            direction: !event.direction ? '' : event.direction,
            target_audience: !event.target_audience ? '' : event.target_audience,
            participants_number: !event.participants_number ? '' : event.participants_number,
        }
      });

    const speaker = ref('');
    const speakers = ref(JSON.parse(event.speakers.trim()))
    const uploadImg = ref(null);
    const formData = new FormData()

    const uploadImgHandler = e => {
        const files = e.target.files;
        uploadImg.value = files[0];
    }

    const addSpeaker = () => {
        speakers.value.push(speaker.value);
        speaker.value = '';
    }

    const deleteSpeaker = index => {
        speakers.value.splice(index, 1);
    }

    const {value: title, errorMessage: titleError, handleBlur: titleBlur} = useField(
        'title',
        yup
            .string()
            .trim()
            .required('Обязательное поле')
    );

    const {value: format, errorMessage: formatError, handleBlur: formatBlur} = useField(
        'format',
        yup
            .string()
            .trim()
            .required('Обязательное поле')
    );

    const {value: description, errorMessage: descriptionError, handleBlur: descriptionBlur} = useField(
        'description',
        yup
            .string()
            .trim()
            .required('Обязательное поле')
    );

    const {value: location, errorMessage: locationError, handleBlur: locationBlur} = useField(
        'location',
        yup
            .string()
            .trim()
            .required('Обязательное поле')
    );

    const {value: date, errorMessage: dateError, handleBlur: dateBlur} = useField(
        'date',
        yup
            .string()
            .trim()
            .required('Обязательное поле')
    );

    const {value: organization_id, errorMessage: organizationIdError, handleBlur: organizationIdBlur} = useField(
        'organization_id',
        yup
            .number()
            .required('Обязательное поле')
    );

    const {value: subdivision, errorMessage: subdivisionError, handleBlur: subdivisionBlur} = useField(
        'subdivision',
        yup
            .string()
            .trim()
            .nullable()
    );

    const {value: direction, errorMessage: directionError, handleBlur: directionBlur} = useField(
        'direction',
        yup
            .string()
            .trim()
            .nullable()
    );

   /*  const {value: speakers, errorMessage: speakersError, handleBlur: speakersBlur} = useField(
        'speakers',
        yup
            .string()
            .trim()
            .required('Обязательное поле')
    ); */

    const {value: target_audience, errorMessage: targetAudienceError, handleBlur: targetAudienceBlur} = useField(
        'target_audience',
        yup
            .string()
            .trim()
            .nullable()
    );

    const {value: participants_number, errorMessage: participantsNumberError, handleBlur: participantsNumberBlur} = useField(
        'participants_number',
        yup
            .string()
            .trim()
            .nullable()
    );

    const isAnotherFormat = ref(false);
    const anotherFormat = ref('');
    watch(format, (newValue, oldValue) => {
        if(newValue == 'another') {
            isAnotherFormat.value = true;
        } else {
            isAnotherFormat.value = false
        }
    })
    const onSubmit = handleSubmit(values => {
        editEvent();
        router.push(`/event/${event.id}`)
    })

    const editEvent = () => {
        formData.append('title', title.value);
        formData.append('format', format.value == 'another' ? anotherFormat.value : format.value);
        formData.append('description', description.value);
        formData.append('location', location.value);
        formData.append('date', date.value);
        formData.append('organization_id', organization_id.value);
        formData.append('subdivision', subdivision.value);
        formData.append('direction', direction.value);
        formData.append('speakers', JSON.stringify(speakers.value));
        formData.append('target_audience', target_audience.value);
        formData.append('participants_number', participants_number.value);
        formData.append('_method', 'PUT');
        if(uploadImg.value) {
            formData.append('img', uploadImg.value);
        }
        store.dispatch('Events/editEvent', {event: formData, id: route.params.id});
    }

    return {
        title,
        format,
        description,
        location,
        date,
        organization_id,
        subdivision,
        direction,
        speakers,
        speaker,
        target_audience,
        participants_number,
        uploadImg,

        titleError,
        formatError,
        descriptionError,
        locationError,
        dateError,
        organizationIdError,
        subdivisionError,
        directionError,
        /* speakersError, */
        targetAudienceError,
        participantsNumberError,

        titleBlur,
        formatBlur,
        descriptionBlur,
        locationBlur,
        dateBlur,
        organizationIdBlur,
        subdivisionBlur,
        directionBlur,
        /* speakersBlur, */
        targetAudienceBlur,
        participantsNumberBlur,

        addSpeaker,
        deleteSpeaker,
        uploadImgHandler,
        onSubmit,
        isSubmitting,
        isAnotherFormat,
        anotherFormat,
    }
}