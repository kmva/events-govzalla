<template>
    <div class="event" :data="data">
          <router-link :to="{path:`/editevent/${data.id}`}" v-if="isAuth" class="event__edit">Редактировать</router-link>
        <div class="event__header">
            <img class="event__header-img" :src="data.picture_url" alt="">
            <div class="event__header-backdrop">
                {{ 
                    new Date(data.date).getDate() 
                    + ' ' +
                    new Date(data.date).toLocaleString('ru', { month: 'long' }) 
                }}
            </div>
        </div>
        <div class="event__body">
            <div class="event__info">
                <h3 class="event__title">{{ data.title }}</h3>
                <div class="event__format">
                    {{ data.format }}
                </div>
            </div>
            <div class="event__enrollers-count">Зарегистрировалось: <span>{{ enrollers.length }}</span></div>
            <div class="event__links">
                <router-link :to="{ path: `/event/${data.id}`, query: {'enrollersCount': enrollers.length} }" class="btn btn-red">Подробнее</router-link>
                <router-link to="" @click.prevent="openEnrollModal(data.id)" class=" btn btn-filled">Зарегистрироваться</router-link>
            </div>
        </div>
    </div>
    <EnrollEventModal v-if="isModalOpen" :data="data" />
</template>
<script>
import { onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'
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
            enrollers.value = store.getters['Enrollers/enrollersByEventId'](props.data.id)
        })

        return {
            openEnrollModal,
            isModalOpen,
            isAuth,
            enrollers
        }
    }
}
</script>
<style lang="scss">

</style>