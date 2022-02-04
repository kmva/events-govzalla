<template>
    <div>
        <h1 class="events-title">Мероприятия</h1>
        <router-link to="/enrollers" v-if="isAuth" class="enrollers-link">Cписок зарегистрировавшихся</router-link>
        <Events />
    </div>
</template>
<script>
import Events from '../components/Events'
import { useStore } from 'vuex'

export default {
    components: { Events },
    setup() {
        const store = useStore();
        const isAuth = store.getters['Admin/isAuth'];

        return {
            isAuth
        }
    }
}
</script>

<style lang="scss">

</style>