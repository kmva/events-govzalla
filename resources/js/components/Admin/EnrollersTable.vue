<template>
    <table class="enrollers__table">
        <thead>
            <tr>
                <th colspan="7"><router-link :to="{ path: `/event/${event.id}`}">{{ event.title }}</router-link></th>
            </tr>
            <tr>
                <th>ФИО</th>
                <th>email</th>
                <th>Номер телефона</th>
                <th>Организация</th>
                <th>Должность</th>
                <th>Район</th>
                <th>Дата регистрации</th>
            </tr>
        </thead>
        <tbody v-if="enrollers.length">
            <EnrollersTableRow 
                v-for="enroller in enrollers"
                :key="enroller.id"
                :enroller="enroller"
            />
            <tr>
                <td colspan="6">Количество: </td>
                <td>{{ enrollers.length }}</td>
            </tr>
        </tbody>
        <tbody v-else>
            <tr>
                <td colspan="7">
                    На это мероприятие пока никто не зарегистрировался
                </td>
            </tr>
        </tbody>
    </table> 
</template>
<script>
import EnrollersTableRow from './EnrollersTableRow.vue'

export default {
    components: { EnrollersTableRow },
    props: {
        enrollers: {
            type: Object,
            required: true,
        },
        event: {
            type: Object,
            required: true,
        }
    },
    setup() {
        return {}
    }
}
</script>

<style lang="scss">

</style>