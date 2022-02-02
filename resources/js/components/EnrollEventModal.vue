<template>
    <Modal :title="title" modalName="enrollEventModal">
        <EnrollEventForm :data="data" />
    </Modal>
</template>
<script>
import EnrollEventForm from './EnrollEventForm.vue'
import Modal from './Modal.vue'

export default {
    components: { EnrollEventForm, Modal },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    setup(props) {

        const title = `Регистрация на мероприятие "${props.data.title}"`;
    
        return {
            title,
        }
    }
}
</script>
<style lang="scss" scoped>

</style>