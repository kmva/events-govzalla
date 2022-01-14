import { useStore } from 'vuex'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { ref, watch } from 'vue'

export default function useAddEventForm() {
    const store = useStore();
    const { handleSubmit, isSubmitting } = useForm();

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
        if(newValue == 'another') {
            isAnotherFormat.value = true;
            format.value = '';
        } else {
            isAnotherFormat.value = false
        }
    })

    const onSubmit = handleSubmit(values => {
        console.log(values)
        addEvent();
    })

    const addEvent = () => {
        store.dispatch('Events/addEventToDB', {
            title: title.value,
            format: format.value ?? anotherFormat.value,
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