<template>
    <div class="event" :data="data">
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
                <router-link to="" class="">Подробнее</router-link>
                <router-link to="" class="">Зарегистрироваться</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>
<style lang="scss">

</style>