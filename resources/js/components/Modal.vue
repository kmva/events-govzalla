<template>
    <div class="enroll-modal">
        <h2>{{ title }}</h2>
        <span class="modal-close" @click="closeModal">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" data-v-4b862fc4=""><path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" data-v-4b862fc4=""></path><path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" data-v-4b862fc4=""></path></svg>
        </span>
        <slot></slot>
    </div>
    <div class="modal-overlay"></div>
</template>
<script>
import { useStore } from 'vuex'

export default {
    props: {
        title: {
            type: String,
            required: true
        },
        modalName: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const store = useStore();

        const closeModal = () => { 
            store.commit('Modals/closeModal', props.modalName);
        }

        return {
            closeModal,
        }
    }
}
</script>
<style lang="scss" scoped>

</style>