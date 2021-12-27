<template>
    <header class="main-header">
        <img src="/img/logo.png" alt="Логотип ИРО ЧР" class="main-header__logo">
        <nav class="main-nav">
            <ul class="main-nav__items">
                <li 
                    class="main-nav__item" 
                    v-for="link in links"
                    :key="link"
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
                title: 'Добавить мероприятие',
                href: '/'
            },
            {
                title: 'Выйти',
                href: '/'
            },
        ]
        return {
            links
        }
    }
}
</script>