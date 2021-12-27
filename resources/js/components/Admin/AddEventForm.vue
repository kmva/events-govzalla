<template>
    <form action="" class="add-event-form">
        <label> Название</label>
        <input type="text" v-model="title" />

        <label>Формат мероприятия</label>
        <select v-model="format">
            <option>Семинар</option>
            <option>Конференция</option>
            <option>Лекция</option>
            <option>Форум</option>
            <option>Курсы</option>
            <option>Круглый стол</option>
            <option>Мастер-класс</option>
            <option>Тренинг</option>
            <option>Практикум</option>
            <option>Конкурс</option>
            <option>Вебинар</option>
            <option>Стратегическая сессия</option>
        </select>

        <label>Описание мероприятия</label>
        <textarea cols="30" rows="10" v-model="description"></textarea>

        <label>Место проведения</label>
        <input type="text" v-model="location">

        <label> Дата проведения</label>
        <input type="date" v-model="date">

        <label>Спикеры</label>
        <input type="text" v-model="speakers">

        <label>Целевая аудитория</label>
        <input type="text" v-model="target_audience">
        <label>Рассчитано на количество человек</label>
        <input type="number" v-model="participants_number">

        <button type="submit" @click.prevent="validateForm">Добавить мероприятие</button>
    </form>
</template>
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore();

        const title = ref('');
        const format = ref(null);
        const description = ref('');
        const location = ref('');
        const date = ref('');
        //заменить на массив
        const speakers = ref('');
        const target_audience = ref('');
        const participants_number = ref('');

        const isValid = true;

        const validateForm = (values) => {
            if(isValid) {
                addEvent()
            }
        }

        const addEvent = () => {
            store.dispatch('Events/addEventToDB', {
                title: title.value,
                format: format.value,
                description: description.value,
                location: location.value,
                date: date.value,
                speakers: speakers.value,
                target_audience: target_audience.value,
                participants_number: participants_number.value,
            });
        }

        return {
            title,
            format,
            description,
            location,
            date,
            speakers,
            target_audience,
            participants_number,

            validateForm,
            addEvent,
        }
    }
}
</script>
<style lang="scss" scoped>

</style>