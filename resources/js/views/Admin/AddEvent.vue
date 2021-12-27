<template>
    <AdminHeader />
    <div class="container container--add-form">
        <h1>Добавление мероприятия</h1>
        <AddEventForm />
    </div>
</template>
<script>
import AddEventForm from '../../components/Admin/AddEventForm'
import AdminHeader from '../../components/Admin/AdminHeader'

export default {
    components: { AddEventForm, AdminHeader },
    setup() {
    }
 }
</script>
<style lang="scss" scoped>

</style>