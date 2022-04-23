import { useStore } from 'vuex'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'

export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        const store = useStore();

        const { handleSubmit, isSibmitting } = useForm();
        const {value: lastname, error: lastnameError, handleBlur: lastnameBlur} = useField(
            'lastname',
            yup
                .string()
                .trim()
                .required('Обязательное поле')
        );
        const {value: firstname, error: firstnameError, handleBlur: firstnameBlur}  = useField(
            'firstname',
            yup
                .string()
                .trim()
                .required('Обязательное поле')
        );
        const {value: patronymic, error: patronymicError, handleBlur: patronymicBlur}  = useField(
            'patronymic',
            yup
                .string()
                .trim()
        );
        const {value: email, error: emailError, handleBlur: emailBlur}  = useField(
            'email',
            yup
                .string()
                .trim()
                .required('Обязательное поле')
                .email('Необходимо ввести корректный email')
        );
        const {value: phone, error: phoneError, handleBlur: phoneBlur} = useField(
            'phone',
            yup
                .string()
                .trim()
                .required('Обязательное поле')
        );
        const {value: organization, error: organizationError, handleBlur: organizationBlur} = useField(
            'organization',
            yup
                .string()
                .trim()
                .required('Обязательное поле')
        );
        const {value: position, error: positionError, handleBlur: positionBlur} = useField(
            'position',
            yup
                .string()
                .trim()
                .required('Обязательное поле')
        );
        const {value: area, error: areaError, handleBlur: areaBlur} = useField(
            'area',
            yup
                .string()
                .trim()
                .required('Обязательное поле')
        );

        const isValid = true;

        const onSubmit = handleSubmit(values => {
            addEvent();
        })

        const addEvent = () => {
            store.dispatch('Enrollers/enrollEvent', {
                lastname: lastname.value, 
                firstname: firstname.value, 
                patronymic: patronymic.value, 
                email: email.value, 
                phone: phone.value, 
                organization: organization.value, 
                position: position.value, 
                area: area.value,
                created_at: new Date(),
                event_id: props.data.id,
            });
        }

        return { 
            firstname, 
            lastname, 
            patronymic, 
            email, 
            phone, 
            organization, 
            position, 
            area,

            firstnameError, 
            lastnameError, 
            patronymicError, 
            emailError, 
            phoneError, 
            organizationError, 
            positionError, 
            areaError,

            firstnameBlur, 
            lastnameBlur, 
            patronymicBlur, 
            emailBlur, 
            phoneBlur, 
            organizationBlur, 
            positionBlur, 
            areaBlur,

            onSubmit,
            addEvent,
            isValid,
        }
    }
}