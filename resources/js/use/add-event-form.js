import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { ref, watch } from 'vue'

export default function useAddEventForm() {
    const store = useStore();
    const router = useRouter();
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

    const {value: subdivision, errorMessage: subdivisionError, handleBlur: subdivisionBlur} = useField(
        'subdivision',
        yup
            .string()
            .trim()
            .required('Обязательное поле')
    );

    const {value: direction, errorMessage: directionError, handleBlur: directionBlur} = useField(
        'direction',
        yup
            .string()
            .trim()
            .nullable()
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
        addEvent();
        router.push('/');
    })

    const addEvent = () => {
        store.dispatch('Events/addEventToDB', {
            title: title.value,
            format: format.value == 'another' ? anotherFormat.value : format.value,
            description: description.value,
            location: location.value,
            date: date.value,
            organization: organization.value,
            subdivision: subdivision.value,
            direction: direction.value,
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
        subdivision.value = '';
        direction.value = '';
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
        subdivision,
        direction,
        speakers,
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
        speakersError,
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
        speakersBlur,
        targetAudienceBlur,
        participantsNumberBlur,

        onSubmit,
        isSubmitting,
        isAnotherFormat,
        anotherFormat,
    }
}