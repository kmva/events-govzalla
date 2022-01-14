<template>
    <div class="enroll-modal">
        <h2>Регистрация на мероприятие "{{ data.title }}"</h2>
        <span class="modal-close" @click="$emit('closeModal')">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16" data-v-4b862fc4=""><path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z" data-v-4b862fc4=""></path><path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z" data-v-4b862fc4=""></path></svg>
        </span>
        <EnrollForm :data="data" />
    </div>
    <div class="modal-overlay"></div>
</template>
<script>
import EnrollForm from './EnrollForm.vue'

export default {
    components: { EnrollForm },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    setup() {
        return {}
    }
}
</script>
<style lang="scss" scoped>

</style>