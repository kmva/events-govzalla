<template>
    <div class="event" :data="data">
          <router-link :to="{path:`/editevent/${data.id}`}" v-if="isAuth">Редактировать</router-link>
        <div class="event__date">
            {{ 
                new Date(data.date).getDate() 
                + ' ' +
                new Date(data.date).toLocaleString('ru', { month: 'long' }) 
            }}
        </div>
        <div class="event__body">
            <div class="event__info">
                <h3 class="event__title">{{ data.title }}</h3>
                <div class="event__format">
                    {{ data.format }}
                </div>
            </div>
            <div class="event__links">
                <router-link :to="{path:`/event/${data.id}`}">Подробнее</router-link>
                <router-link to="" @click.prevent="openEnrollModal(data.id)">Зарегистрироваться</router-link>
            </div>
        </div>
    </div>
    <EnrollEventModal v-if="isModalOpen" :data="data" @closeModal="closeEnrollModal"/>
</template>
<script>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import EnrollEventModal from './EnrollModal.vue'

export default {
    components: { EnrollEventModal },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    setup() {
        const store = useStore();

        const isModalOpen = ref(false);
        const isAuth = computed(() => store.getters['Admin/isAuth'])

        const openEnrollModal = () => {
            isModalOpen.value = true;
        }

        const closeEnrollModal = () => { 
            isModalOpen.value = false;
        }

        return {
            openEnrollModal,
            closeEnrollModal,
            isModalOpen,
            isAuth,
        }
    }
}
</script>
<style lang="scss">

</style>