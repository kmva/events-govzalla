<template>
    <div class="events-filters">
        <input type="text" v-model="searchQuery" class="events-filters__search" placeholder="Поиск">

        <label>Формат мероприятия</label>
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
        <input type="date" placeholder="С" v-model="dateFrom">
        по
        <input type="date" placeholder="По" v-model="dateTo">
    </div>
    
    <div class="events" v-if="events">
        <event 
            v-for="event in events"
            :key="event.id"
            :data="event"
        ></event>
    </div>
</template>
<script>
import Event from '../components/Event'
import { onBeforeMount, computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    components: { Event },
    setup() {
        const store = useStore();
        const eventsFromStore = computed(() => { return store.getters['Events/events'] });
        const searchQuery = ref('');
        const events = computed(() => {
            return searchQuery.value 
                ? eventsFromStore.value.filter(event => { return event.title.includes(searchQuery.value)})
                : eventsFromStore.value
            });

        const formatFilter = ref('');
        const locationFilter = ref(''); 
        const dateFrom = ref(null); 
        const dateTo = ref(null); 

        onBeforeMount(() => {
            store.dispatch('Events/fetchEvents');
            console.log(events)
        })

        return {
            Event,
            events,
            searchQuery,
            formatFilter,
            locationFilter,
            dateFrom,
            dateTo,
        }
    }
}
</script>

<style lang="scss">

</style>