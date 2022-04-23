<template>
    <form class="form enroll-form" @submit.prevent="onSubmit">  
        <div :class="['form-control', {invalid: lastnameError}]">
            <label>Фамилия</label>
            <input type="text" v-model="lastname" @blur="lastnameBlur" />
            <small v-if="lastnameError">{{ lastnameError }}</small>
        </div>   

        <div :class="['form-control', {invalid: firstnameError}]">
            <label>Имя</label>
            <input type="text" v-model="firstname" @blur="firstnameBlur" />
            <small v-if="firstnameError">{{ firstnameError }}</small>
        </div>   

        <div :class="['form-control', {invalid: patronymicError}]">
            <label>Отчество (необязательное поле)</label>
            <input type="text" v-model="patronymic" @blur="patronymicBlur" />
            <small v-if="patronymicError">{{ patronymicError }}</small>
        </div>   

        <div :class="['form-control', {invalid: emailError}]">
            <label>Email</label>
            <input type="text" v-model="email" @blur="emailBlur" />
            <small v-if="emailError">{{ emailError }}</small>
        </div>   

        <div :class="['form-control', {invalid: phoneError}]">
            <label>Номер телефона</label>
            <input type="text" v-model="phone" @blur="phoneBlur" />
            <small v-if="phoneError">{{ phoneError }}</small>
        </div>  

        <div :class="['form-control', {invalid: organizationError}]">
            <label>Организация</label>
            <input type="text" v-model="organization" @blur="organizationBlur" />
            <small v-if="organizationError">{{ organizationError }}</small>
        </div>   

        <div :class="['form-control', {invalid: positionError}]">
            <label> Должность</label>
            <input type="text" v-model="position" @blur="positionBlur" />
            <small v-if="positionError">{{ positionError }}</small>
        </div>   

        <div :class="['form-control', {invalid: areaError}]">
            <label>Район</label>
             <select v-model="area">
                <option disabled>Выберите район</option>
                <option>город Аргун</option>
                <option>город Грозный</option>
                <option>Ачхой-Мартановский район</option>
                <option>Веденский район</option>
                <option>Грозненский район</option>
                <option>Гудермесский район</option>
                <option>Итум-Калинский район</option>
                <option>Курчалоевский район</option>
                <option>Надтеречный район</option>
                <option>Наурский район</option>
                <option>Ножай-Юртовский район</option>
                <option>Сунженский район</option>
                <option>Урус-Мартановский район</option>
                <option>Шалинский район</option>
                <option>Шаройский район</option>
                <option>Шатойский район</option>
                <option>Шелковской район</option>
            </select>
          <!--   <input type="text" v-model="area" @blur="areaBlur" /> -->

            <small v-if="areaError">{{ areaError }}</small>
        </div>   

        <button type="submit" class="enroll-submit btn btn-blue">Зарегистрироваться</button>
    </form>
</template>
<script>
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
        const {value: lastname, errorMessage: lastnameError, handleBlur: lastnameBlur} = useField(
            'lastname',
            yup
                .string()
                .trim()
                .required('Обязательное поле')
        );
        const {value: firstname, errorMessage: firstnameError, handleBlur: firstnameBlur}  = useField(
            'firstname',
            yup
                .string()
                .trim()
                .required('Обязательное поле')
        );
        const {value: patronymic, errorMessage: patronymicError, handleBlur: patronymicBlur}  = useField(
            'patronymic',
            yup
                .string()
                .trim()
        );
        const {value: email, errorMessage: emailError, handleBlur: emailBlur}  = useField(
            'email',
            yup
                .string()
                .trim()
                .required('Обязательное поле')
                .email('Необходимо ввести корректный email')
        );
        const {value: phone, errorMessage: phoneError, handleBlur: phoneBlur} = useField(
            'phone',
            yup
                .string()
                .trim()
                .required('Обязательное поле')
        );
        const {value: organization, errorMessage: organizationError, handleBlur: organizationBlur} = useField(
            'organization',
            yup
                .string()
                .required('Обязательное поле')
        );
        const {value: position, errorMessage: positionError, handleBlur: positionBlur} = useField(
            'position',
            yup
                .string()
                .trim()
                .required('Обязательное поле')
        );
        const {value: area, errorMessage: areaError, handleBlur: areaBlur} = useField(
            'area',
            yup
                .string()
                .trim()
                .required('Обязательное поле')
        );

        const isValid = true;

        const onSubmit = handleSubmit(values => {
            addEnroller();
            store.commit('Modals/closeModal', 'enrollEventModal');
        })

        const addEnroller = () => {
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

            lastname.value = ''; 
            firstname.value = ''; 
            patronymic.value = ''; 
            email.value = ''; 
            phone.value = ''; 
            organization.value = ''; 
            position.value = ''; 
            area.value = '';
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
            isValid,
        }
    }
}
</script>
<style lang="scss" scoped>

</style>