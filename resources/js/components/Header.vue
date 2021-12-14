<template>
    <header>
        <img src="/img/logo.png" alt="Логотип ИРО ЧР">
        <nav class="main-nav">
            <ul class="main-nav__items">
                <li 
                    class="main-nav__item" 
                    v-for="link in links"
                    :key="index" 
                >
                    <a :href="link.href">{{ link.title }}</a>
                </li>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    data() {
        const links = [
            {
                title: 'Мероприятия',
                href: '/'
            },
            {
                title: 'Войти',
                href: '/'
            },
        ]
        return {
            links
        }
    }
}
</script>