<template>
    <table class="enrollers-table">
        <thead>
            <tr>
                <th colspan="7">{{ eventTitle }}</th>
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
        <tbody v-if="data.length">
            <EnrollersTableRow 
                v-for="enroller in data"
                :key="enroller.id"
                :enroller="enroller"
            />
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
        data: {
            type: Object,
            required: true,
        },
        eventTitle: {
            type: String,
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