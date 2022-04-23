<template>
    <Modal :title="title" modalName="deleteEventModal">
        <div class="flex modal-buttons-flex">
            <button class="btn btn-filled" @click.prevent="deleteEvent">Да</button>
            <button class="btn btn-blue" @click.prevent="closeConfirmModal">Нет</button>
        </div>
    </Modal>
</template>
<script>
import Modal from '../Modal.vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

export default {
    components: { Modal },
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();

        const title = "Вы уверены, что хотите удалить мероприятие?";

        const closeConfirmModal = () => { 
           store.commit('Modals/closeModal', 'deleteEventModal');
        }

        const deleteEvent = async () => {
            await store.dispatch('Events/deleteEvent', route.params.id);
            store.commit('Modals/closeModal', 'deleteEventModal');
            router.push('/');
        }
        return {
            title,
            closeConfirmModal,
            deleteEvent,
        }
    }
}
</script>
<style lang="scss" scoped>

</style>