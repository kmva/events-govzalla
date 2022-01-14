<template>
    <div>
        <h1 class="events-title">{{ event.title }}</h1>
        <div class="about-event">
            <div class="about-event__info">
                <p><span class="about-event__subtitle">Формат</span>{{ event.format }}</p>   
                <p><span class="about-event__subtitle">Дата</span> {{ event.date }}</p>   
                <p><span class="about-event__subtitle">Локация</span> {{ event.location }}</p>  
                <p><span class="about-event__subtitle">Целевая аудитория</span> {{ event.target_audience }}</p>  
                <p><span class="about-event__subtitle">Организатор</span> {{ event.organization }}</p>      
                <p class="about-event__speakers"><span class="about-event__subtitle">Спикеры</span>
                    <ul>
                        <li>{{ event.speakers }}</li>
                    </ul>
                </p>
                <h2>Описание мероприятия</h2>
                <p>{{ event.description }}</p> 
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