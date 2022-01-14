import { useStore } from 'vuex'
import * as yup from 'yup'
import { useField, useForm } from 'vee-validate'
import { useRouter } from 'vue-router'

export default function useAuthForm() {
    const store = useStore();
    const router = useRouter();

    const { handleSubmit, isSubmitting } = useForm();
    const {value: email, error: emailError, handleBlur: emailBlur}  = useField(
        'email',
        yup
            .string()
            .trim()
            .required('Обязательное поле')
            .email('Необходимо ввести корректный email')
    );
    const {value: password, error: passwordError, handleBlur: passwordBlur}  = useField(
        'password',
        yup
            .string()
            .trim()
            .required('Обязательное поле')
    );


    const onSubmit = handleSubmit(async (values) => {
        try{
            await store.dispatch('Admin/login', values)
            await  router.push('/')
        }catch (e) {
            console.log(e)
        }
    })

    return { 
        email, 
        password, 

        emailError, 
        passwordError, 

        emailBlur, 
        passwordBlur,

        onSubmit,
        isSubmitting,
    }
    
}