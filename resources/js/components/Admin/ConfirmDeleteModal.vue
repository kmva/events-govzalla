<template>
    <Modal :title="title">
        <div class="flex modal-buttons-flex">
            <button class="btn btn-filled" @click.prevent="$emit('deleteEvent')">Да</button>
            <button class="btn btn-blue" @click.prevent="$emit('closeModal')">Нет</button>
        </div>
    </Modal>
</template>
<script>
import Modal from '../Modal.vue'

export default {
    components: {  Modal },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    setup() {

        const title = "Вы уверены, что хотите удалить мероприятие?";
        return {
            title,
        }
    }
}
</script>
<style lang="scss" scoped>

</style>