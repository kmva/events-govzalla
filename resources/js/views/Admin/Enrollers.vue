<template>
    <h1>Зарегистрировавшиеся</h1>
    <input type="text" v-model="searchQuery" class="events-filters__search" placeholder="Поиск мероприятия">
    <app-loader v-if="isLoading"></app-loader>
    <div class="enrollers" v-else>
        <div class="table-wrapper" 
                v-for="event in events" 
                :key="event.id">
            <EnrollersTable 
                :enrollers="enrollers.filter(enroller => enroller.event_id == event.id)"
                :event="event"
            />
        </div>
    </div>
</template>
<script>
import { onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'

import EnrollersTable from '../../components/Admin/EnrollersTable.vue'
import AppLoader from '../../components/AppLoader.vue'

export default {
    components: { Event, AppLoader, EnrollersTable },
    setup() {
        const store = useStore();

        const isLoading = ref(false);

        const enrollers = computed(() => { return store.getters['Enrollers/enrollers'] });
        const eventsFromStore = computed(() => { return store.getters['Events/events'] });
        const searchQuery = ref('');
        const searchResultEvents = computed(() => {
            if(searchQuery.value) { return  eventsFromStore.value.filter(event => { 
                const lowerCaseTitle = event.title.toLowerCase();
                const lowerCaseSearchQuery = searchQuery.value.toLowerCase();
                return lowerCaseTitle.includes(lowerCaseSearchQuery)}) 
            }
        });

        const events = computed(() => {
            return searchQuery.value  
                    ? searchResultEvents.value
                    : eventsFromStore.value
        })

        onMounted(async () => {
            isLoading.value = true;
            await store.dispatch('Events/fetchEvents')
            await store.dispatch('Enrollers/fetchEnrollers');
            isLoading.value = false;
        })

        return {
            searchQuery,
            events,
            enrollers,
            isLoading,
        }
    }
}
</script>
<style lang='scss' scoped>

</style>