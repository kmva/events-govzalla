<template>
    <div class='container container--with-form'>
        <h1>Изменение мероприятия</h1>
        <EditEventForm />
    </div>
</template>
<script>
import EditEventForm from '../../components/Admin/AddEventForm'
export default {
    components: { EditEventForm },
    setup() {
    }
 }
</script>
<style lang='scss' scoped>

</style>