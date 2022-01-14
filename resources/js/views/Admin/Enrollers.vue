<template>
    <div class='container container--with-form'>
        <h1>Зарегистрировавшиеся</h1>
        <div class="enrollers">
            <EnrollersTable 
                v-for="enroller in enrollers" 
                :key="enroller.id"
            />
        </div>
    </div>
</template>
<script>
import { onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    components: { Event },
    setup() {
        const store = useStore();
        const enrollers = computed(() => { return store.getters['Enrollers/enrollers'] });

        onMounted(async () => {
            await store.dispatch('Enrollers/fetchEnrollers');
        })

        

        return {
            enrollers
        }
    }
}
</script>
<style lang='scss' scoped>

</style>