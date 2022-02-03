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
                    <p><span v-if="event.subdivision" class="about-event__subtitle">Подразделение</span>{{ event.subdivision }}</p>  
                    <p><span v-if="event.direction" class="about-event__subtitle">Направление</span>{{ event.direction }}</p>  
                    <p><span v-if="event.participants_number" class="about-event__subtitle">Рассчитано на количество человек: </span>{{ event.participants_number }}</p> 
                    <p><span class="about-event__subtitle">Зарегистрировалось: </span>{{ 0 ?? enrollersCount }}</p> 
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
                <router-link to="" @click.prevent="openEnrollModal" class=" btn btn-filled">Зарегистрироваться</router-link>
            </div>
            <img :src="event.picture_url" alt="">
        </div>
    </div>
    <EnrollEventModal v-if="isModalOpen" :data="event" />
</template>
<script>
import { onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

import EnrollEventModal from '../components/EnrollEventModal.vue'

export default {
    components: { EnrollEventModal },
    setup() {
        const route = useRoute();
        const store = useStore();
        const event = ref({});
        const eventId = route.params.id;
        const enrollersCount = route.query.enrollersCount;

        const isModalOpen = computed(() => store.getters['Modals/enrollEventModal']);

        const openEnrollModal = () => {
            store.commit('Modals/openModal', 'enrollEventModal');
        }

        onMounted(async () => {
            event.value = await store.dispatch('Events/fetchEventById', eventId);
        })

        return {
            event,
            enrollersCount,
            isModalOpen,
            openEnrollModal,
        }
    }
}
</script>

<style lang="scss">
</style>