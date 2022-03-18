<template>
    <header class="main-header">
       <router-link to="/">
            <img src="/img/logo.png" alt="Логотип ИРО ЧР" class="main-header__logo">
        </router-link>
         <nav class="main-nav">
            <ul class="main-nav__items">
                <li class="main-nav__item"><a href="/">Мероприятия</a></li>
                <li class="main-nav__item"><a href="/addevent">Добавить мероприятие</a></li>
                <li class="main-nav__item"><a href="/">Помощь</a></li>
                <li class="main-nav__item"><a href="#" @click.prevent="logout">Выйти</a></li>
            </ul>
        </nav>
    </header>
</template>
<script>
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    data() {
        const store = useStore()
        const router = useRouter()

        const logout = () => {
            store.commit('Admin/logout');
            router.push('/auth');
        }

        return {
            logout
        }
    }
}
</script>