<template>
    <div class='container container--with-form'>
        <h1>Зарегистрировавшиеся</h1>
        <app-loader v-if="isLoading"></app-loader>
        <div class="enrollers" v-else>
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

import AppLoader from '../../components/AppLoader.vue'

export default {
    components: { Event, AppLoader },
    setup() {
        const store = useStore();

        const isLoading = ref(false);

        const enrollers = computed(() => { return store.getters['Enrollers/enrollers'] });

        onMounted(async () => {
            isLoading.value = true;
            await store.dispatch('Enrollers/fetchEnrollers');
            isLoading.value = false;
        })

        return {
            enrollers
        }
    }
}
</script>
<style lang='scss' scoped>

</style>