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
            organization: event.organization,
            subdivision: event.subdivision,
            direction: event.direction,
            target_audience: event.target_audience,
            participants_number: event.participants_number,
        }
      });

    const speaker = ref('');
    const speakers = ref(JSON.parse(event.speakers.trim()))

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

    const {value: organization, errorMessage: organizationError, handleBlur: organizationBlur} = useField(
        'organization',
        yup
            .string()
            .trim()
            .required('Обязательное поле')
    );

    const {value: subdivision, errorMessage: subdivisionError, handleBlur: subdivisionBlur} = useField(
        'subdivision',
        yup
            .string()
            .trim()
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
            .required('Обязательное поле')
    );

    const {value: participants_number, errorMessage: participantsNumberError, handleBlur: participantsNumberBlur} = useField(
        'participants_number',
        yup
            .string()
            .trim()
            .required('Обязательное поле, введите числовое значение')
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
        store.dispatch('Events/editEvent', {
            id: route.params.id,
            title: title.value,
            format: format.value == 'another' ? anotherFormat.value : format.value,
            description: description.value,
            location: location.value,
            date: date.value,
            organization: organization.value,
            subdivision: subdivision.value,
            direction: direction.value,
            speakers: JSON.stringify(speakers.value),
            target_audience: target_audience.value,
            participants_number: participants_number.value,
        });
    }

    return {
        title,
        format,
        description,
        location,
        date,
        organization,
        subdivision,
        direction,
        speakers,
        speaker,
        target_audience,
        participants_number,

        titleError,
        formatError,
        descriptionError,
        locationError,
        dateError,
        organizationError,
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
        organizationBlur,
        subdivisionBlur,
        directionBlur,
        /* speakersBlur, */
        targetAudienceBlur,
        participantsNumberBlur,

        addSpeaker,
        deleteSpeaker,
        onSubmit,
        isSubmitting,
        isAnotherFormat,
        anotherFormat,
    }
}