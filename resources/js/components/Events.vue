<template>
    <div class="events-filters">
        <input type="text" v-model="searchQuery" class="events-filters__search" placeholder="Поиск">

        <!-- <label>Формат мероприятия</label>
        <select v-model="formatFilter">
            <option>Семинар</option>
            <option>Конференция</option>
            <option>Лекция</option>
            <option>Форум</option>
            <option>Курсы</option>
            <option>Круглый стол</option>
            <option>Мастер-класс</option>
            <option>Тренинг</option>
            <option>Практикум</option>
            <option>Конкурс</option>
            <option>Вебинар</option>
            <option>Стратегическая сессия</option>
        </select>

        <label>Место проведения</label>
        <select v-model="locationFilter">
            <option>ГБУ ДПО «ИРО ЧР»</option>
            <option>ФБОУ ВО «ЧГПУ»</option>
            <option>В режиме ВКС на платформе Zoom</option>
        </select>

        <br>
        <label>Дата проведения</label>
        с
        <input type="date" placeholder="С" v-model="dateStart">{{dateStart}}
        по
        <input type="date" placeholder="По" v-model="dateEnd">{{dateEnd}} -->
    </div>
    
    <app-loader v-if="isLoading"></app-loader>
    <div v-if="searchResultEvents">
         <div class="events">
            <event 
                v-for="event in searchResultEvents"
                :key="event.id"
                :data="event"
            ></event>
        </div>
    </div>
    <div class="organizations" v-else-if="organizations">
        <div class="organization" v-for="organization in Object.keys(organizations)" :key="organization">
            <h2 class="organization__title">{{ organization }}</h2>
            <div class="events">
                <event 
                    v-for="event in organizations[organization]"
                    :key="event.id"
                    :data="event"
                ></event>
            </div>
        </div>
    </div>
    <div v-else>Нет добавленных мероприятий</div>
</template>
<script>
import Event from '../components/Event'
import AppLoader from '../components/AppLoader.vue'

import { onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    components: { Event, AppLoader },
    setup() {
            
        const store = useStore();

        const isLoading = ref(false);
        const eventsFromStore = computed(() => { return store.getters['Events/events'] });
        const searchQuery = ref('');
        const searchResultEvents = computed(() => {
            if(searchQuery.value) { return  eventsFromStore.value.filter(event => { 
                const lowerCaseTitle = event.title.toLowerCase();
                const lowerCaseSearchQuery = searchQuery.value.toLowerCase();
                return lowerCaseTitle.includes(lowerCaseSearchQuery)}) 
            }
        });

        const organizations = ref({})

        const formatFilter = ref('');
        const locationFilter = ref(''); 
        const dateStart = ref(null); 
        const dateEnd = ref(null); 

        onMounted(async () => {
            isLoading.value = true;
            await store.dispatch('Events/fetchEvents');
            await store.dispatch('Enrollers/fetchEnrollers');
            organizations.value = _.groupBy(eventsFromStore.value, "organization");
            isLoading.value = false;
        })

        return {
            isLoading,
            Event,
            searchResultEvents,
            organizations,
            searchQuery,
            formatFilter,
            locationFilter,
            dateStart,
            dateEnd,
        }
    }
}
</script>

<style lang="scss">

</style>