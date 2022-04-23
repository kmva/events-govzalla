<template>
    <header class="main-header">
        <router-link to="/">
            <img src="/img/logo.png" alt="Логотип ИРО ЧР" class="main-header__logo">
        </router-link>
        <nav class="main-nav">
            <ul class="main-nav__items">
                <li class="main-nav__item"><a href="/">Мероприятия</a></li>
                <li class="main-nav__item"><a href="/">Помощь</a></li>
                <li class="main-nav__item"><a href="/auth">Войти</a></li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    data() {}
}
</script>