<template>
<!-- :class="{'event--removed': !isAuth && data.removed, 'event--removed-for-admin': isAuth && data.removed} -->
    <div v-if="!data.removed || (data.removed && isAuth)" class="event" :data="data" :class="{'event--removed': isAuth && data.removed}">
        <router-link :to="{path:`/editevent/${data.id}`}" v-if="isAuth" class="event__edit">Редактировать</router-link>
        <div class="event__header">
            <img class="event__header-img" :src="data.picture_url" alt="">
            <div class="event__header-backdrop">
                {{ dayLongMonth(data.date) }}
                <br>{{ time(data.date) }}
            </div>
        </div>
        <div class="event__body">
            <div class="event__info">
                <h3 class="event__title">{{ data.title }}</h3>
                <div class="event__format">
                    {{ data.format }}
                </div>
                <div v-if="isAuth && data.removed" class="event__removed-banner">Снято с публикации</div>
            </div>
            <div class="event__enrollers-count">Зарегистрировалось: <span>{{ enrollers.length }}</span></div>
            <div class="event__links">
                <router-link :to="{ path: `/event/${data.id}` }" class="btn btn-red">Подробнее</router-link>
                <router-link to="" @click.prevent="openEnrollModal(data.id)" class=" btn btn-filled" :class="{disabled: data.enrollment_disabled == 1}">Зарегистрироваться</router-link>
                
            </div>
        </div>
    </div>
    <EnrollEventModal v-if="isModalOpen" :data="data" />
</template>
<script>
import { onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'
import { dayLongMonth, time } from '../utils/dateFormatter'
import EnrollEventModal from './EnrollEventModal.vue'

export default {
    components: { EnrollEventModal },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        const store = useStore();

        const isModalOpen = computed(() => store.getters['Modals/enrollEventModal']);
        const isAuth = computed(() => store.getters['Admin/isAuth'])
        const enrollers = ref('')

        const openEnrollModal = () => {
            store.commit('Modals/openModal', 'enrollEventModal');
        }

        onMounted(async() => {
            enrollers.value = await store.getters['Enrollers/enrollersByEventId'](props.data.id)
        })

        return {
            openEnrollModal,
            isModalOpen,
            isAuth,
            enrollers,
            dayLongMonth,
            time,
        }
    }
}
</script>
<style lang="scss">

</style>