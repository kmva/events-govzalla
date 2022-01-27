<template>
    <div class="about">
        <h1 class="event-title">{{ event.format }} "{{ event.title }}"</h1>
        <div class="about-event">
            <div class="about-event__info">
                <div class="about-event__card">
                     <h2>Информация о мероприятии</h2>
                    <!-- <p><span class="about-event__subtitle">Формат</span>{{ event.format }}</p>    -->
                    <p><span class="about-event__subtitle">Дата</span>{{ event.date }}</p>   
                    <p><span class="about-event__subtitle">Локация</span>{{ event.location }}</p>  
                    <p><span class="about-event__subtitle">Целевая аудитория</span>{{ event.target_audience }}</p>  
                    <p><span class="about-event__subtitle">Организатор</span>{{ event.organization }}</p>  
                    <p><span class="about-event__subtitle">Подразделение</span>{{ event.subdivision }}</p>  
                    <p><span v-if="event.direction" class="about-event__subtitle">Направление</span>{{ event.direction }}</p>  
                    <p><span v-if="event.participants_number" class="about-event__subtitle">Рассчитано на количество человек: </span>{{ event.participants_number }}</p> 
                </div>
                <div class="about-event__card">
                    <h2>Спикеры</h2>
                    <p class="about-event__speakers">
                        <ul>
                            <li>{{ event.speakers }}</li>
                        </ul>
                    </p>
                </div>
                <div class="about-event__card">
                    <h2>Описание мероприятия</h2>
                    <p>{{ event.description }}</p> 
                </div>
            </div>
            <img src="/img/2.jpg" alt="">
        </div>
    </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
    components: { },
    setup() {
        const route = useRoute();
        const store = useStore();
        const event = ref({});
        const eventId = route.params.id;

        onMounted(async () => {
            event.value = await store.dispatch('Events/fetchEventById', eventId);
        })

        return {
            event
        }
    }
}
</script>

<style lang="scss">

</style>