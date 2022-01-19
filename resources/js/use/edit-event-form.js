import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { ref, watch, onMounted } from 'vue'

export default function useEditEventForm() {
    const store = useStore();
    const route = useRoute();

    const event = ref('');
    onMounted(() => {   
        event.value = await store.dispatch['Events/fetchEventById'](route.params.id)
        console.log(event)
    })

    const { handleSubmit, isSubmitting } = useForm({
        initialValues: {
            title:  event.value.title,
            format: event.value.format,
            description: event.value.description,
            locatio:  event.value.location,
            date: event.value.date,
            organization: event.value.organization,
            speakers: event.value.speakers,
            target_audience: event.value.target_audience,
            participants_number: event.value.participants_numbe,
        }
      });

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

    const {value: speakers, errorMessage: speakersError, handleBlur: speakersBlur} = useField(
        'speakers',
        yup
            .string()
            .trim()
            .required('Обязательное поле')
    );

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
            .required('Обязательное поле')
    );

    const isAnotherFormat = ref(false);
    const anotherFormat = ref('');
    watch(format, (newValue, oldValue) => {
        console.log('format', format)
        if(newValue == 'another') {
            isAnotherFormat.value = true;
        } else {
            isAnotherFormat.value = false
        }
    })

    const onSubmit = handleSubmit(values => {
        console.log(values)
        editEvent();
    })

    const editEvent = () => {
        store.dispatch('Events/editEvent', {
            title: title.value,
            format: format.value == 'another' ? anotherFormat.value : format.value,
            description: description.value,
            location: location.value,
            date: date.value,
            organization: organization.value,
            speakers: speakers.value,
            target_audience: target_audience.value,
            participants_number: participants_number.value,
        });

        title.value = '';
        format.value = null;
        description.value = '';
        location.value = '';
        date.value = '';
        organization.value = '';
        speakers.value = '';
        target_audience.value = '';
        participants_number.value = '';
    }

    return {
        event,
        title,
        format,
        description,
        location,
        date,
        organization,
        speakers,
        target_audience,
        participants_number,

        titleError,
        formatError,
        descriptionError,
        locationError,
        dateError,
        organizationError,
        speakersError,
        targetAudienceError,
        participantsNumberError,

        titleBlur,
        formatBlur,
        descriptionBlur,
        locationBlur,
        dateBlur,
        organizationBlur,
        speakersBlur,
        targetAudienceBlur,
        participantsNumberBlur,

        onSubmit,
        isSubmitting,
        isAnotherFormat,
        anotherFormat,
    }
}