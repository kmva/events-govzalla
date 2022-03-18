<template>   
    <app-loader v-if="isLoading"></app-loader>
    <div v-else class="about">
        <h1 class="event-title">{{ event.format }} "{{ event.title }}"</h1>
        <router-link to="/enrollers" v-if="isAuth" class="enrollers-link">Список зарегистрировавшихся</router-link>
        <div class="about-event">
            <div class="about-event__info">
                <div class="about-event__card">
                    <h2>Информация о мероприятии</h2>
                    <p><span class="about-event__subtitle">Дата</span>{{ dayLongMonthYear(event.date) }}</p>
                    <p><span class="about-event__subtitle">Локация</span>{{ event.location }}</p>
                    <p v-if="event.target_audience"><span class="about-event__subtitle">Целевая аудитория</span>{{ event.target_audience }}</p>
                    <p v-if="event.organization"><span class="about-event__subtitle">Организатор</span>{{ event.organization }}</p>
                    <p v-if="event.subdivision"><span class="about-event__subtitle">Подразделение</span>{{ event.subdivision }}</p>
                    <p v-if="event.direction"><span class="about-event__subtitle">Направление</span>{{ event.direction }}</p>
                    <p v-if="event.participants_number> 0"><span class="about-event__subtitle">Рассчитано на количество человек: </span>{{ event.participants_number }}</p>
                    <p><span class="about-event__subtitle">Зарегистрировалось: </span>{{ enrollersCount ?? 0}}</p>
                </div>
                <div class="about-event__card">
                    <h2>Спикеры</h2>
                    <ul class="about-event__speakers">
                        <li v-for="speaker in speakers" :key="speaker">{{ speaker }}</li>
                    </ul>
                </div>
                <div class="about-event__card">
                    <h2>Описание мероприятия</h2>
                    <p class="about-event__description">{{ event.description }}</p>
                </div>
                <router-link :to="{path:`/editevent/${event.id}`}" v-if="isAuth" class="event__edit btn btn-red">Редактировать</router-link>
                <router-link to="" @click.prevent="openEnrollModal" class=" btn btn-filled" :class="{disabled: event.enrollment_disabled == 1}">Зарегистрироваться</router-link>
            </div>
            <img :src="event.picture_url" alt="">
        </div>
    </div>
    <EnrollEventModal v-if="isModalOpen" :data="event" />
</template>
<script>
import { onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

import { dayLongMonthYear } from '../utils/dateFormatter'

import EnrollEventModal from '../components/EnrollEventModal.vue'
import AppLoader from '../components/AppLoader.vue'

export default {
    components: { EnrollEventModal, AppLoader },
    setup() {
        const route = useRoute();
        const store = useStore();
        const event = ref({});
        const eventId = route.params.id;
        const enrollersCount = computed(() => {
            return route.query.enrollersCount ?? store.getters['Enrollers/enrollersByEventId'](eventId).length;
        })


        const isLoading = ref(false);
        const isAuth = store.getters['Admin/isAuth'];

        const speakers = computed(() => {
            if(event.value.speakers) {
                try {
                    return JSON.parse(event.value.speakers)
                } catch {
                    return event.value.speakers.split(',')
                }
            }

         });

        const isModalOpen = computed(() => store.getters['Modals/enrollEventModal']);

        const openEnrollModal = () => {
            store.commit('Modals/openModal', 'enrollEventModal');
        }

        onMounted(async () => {
            isLoading.value = true;
            event.value = await store.dispatch('Events/fetchEventById', eventId);
            isLoading.value = false;
        })

        return {
            event,
            speakers,
            enrollersCount,
            isModalOpen,
            openEnrollModal,
            isAuth, 
            isLoading,
            dayLongMonthYear,
        }
    }
}
</script>

<style lang="scss">
</style>
