<template>
    <Modal :title="title">
        <EnrollForm :data="data" />
    </Modal>
</template>
<script>
import EnrollForm from './EnrollForm.vue'
import Modal from './Modal.vue'

export default {
    components: { EnrollForm, Modal },
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