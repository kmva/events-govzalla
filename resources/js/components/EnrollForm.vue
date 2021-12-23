<template>
    <form action="">
        <label>
            Фамилия
            <input type="text" v-model="lastname" />
        </label>
        <label>
            Имя
            <input type="text" v-model="firstname" />
        </label>
        <label>
            Отчество
            <input type="text" v-model="patronymic" />
        </label>
        <label>
            Email
            <input type="text" v-model="email">
        </label>
        <label>
            Номер телефона
            <input type="text" v-model="phone">
        </label>
        <label>
            Организация
            <input type="text" v-model="organization">
        </label>
        <label>
            Должность
            <input type="text" v-model="position">
        </label>
        <label>
            Район
            <input type="text" v-model="area">
        </label>
        <button type="submit" @click.prevent="validateForm">Зарегистрироваться на мероприятие</button>
    </form>
</template>
<script>
import { ref } from 'vue'
import { useStore, useRoute } from 'vuex'

export default {
    setup() {
        const store = useStore();
        const route = useRoute();

        const firstname = ref('');
        const lastname = ref('');
        const patronymic = ref('');
        const email = ref('');
        const phone = ref('');
        const organization = ref('');
        const position = ref('');
        const area = ref('');

        const isValid = true;

        const validateForm = (values) => {
            if(isValid) {
                addEvent()
            }
        }

        const addEvent = () => {
            store.dispatch('Events/enrollEvent', {
                lastname: lastname.value, 
                firstname: firstname.value, 
                patronymic: patronymic.value, 
                email: email.value, 
                phone: phone.value, 
                organization: organization.value, 
                position: position.value, 
                area: area.value,
                data: new Date(),
                eventId: route.eventId
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

            validateForm,
            addEvent,
        }
    }
}
</script>
<style lang="scss" scoped>

</style>