<template>
    <div class='container container--with-form'>
        <h1>Добавление мероприятия</h1>
        <AddEventForm />
    </div>
</template>
<script>
import AddEventForm from '../../components/Admin/AddEventForm'

export default {
    components: { AddEventForm },
        setup() {
    }
 }
</script>
<style lang='scss' scoped>

</style>