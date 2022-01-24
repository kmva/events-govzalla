<template>
    <form class="form add-event-form" @submit.prevent="onSubmit">
        <div :class="['form-control', {invalid: titleError}]">
            <label> Название</label>
            <input type="text" v-model="title" />
            <small v-if="titleError">{{ titleError }}</small>
        </div>

        <div :class="['form-control', {invalid: formatError}]">
            <label>Формат мероприятия</label>
            <select v-model="format">
                <option disabled>Выберите один из вариантов</option>
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
                <option value="another">Иное</option>
            </select>
            <input type="text" v-if="isAnotherFormat" v-model="anotherFormat" class="another-format">
            <small v-if="formatError">{{ formatError }}</small>
        </div>

        <div :class="['form-control', {invalid: descriptionError}]">
            <label>Описание мероприятия</label>
            <textarea cols="30" rows="10" v-model="description"></textarea>
            <small v-if="descriptionError">{{ descriptionError }}</small>
        </div>
         
        <div :class="['form-control', {invalid: locationError}]">
            <label>Место проведения</label>
            <input type="text" v-model="location">
            <small v-if="locationError">{{ locationError }}</small>
        </div>

        <div :class="['form-control', {invalid: dateError}]">
            <label>Дата проведения</label>
            <input type="date" v-model="date">
            <small v-if="dateError">{{ dateError }}</small>
        </div>

        <div :class="['form-control', {invalid: organizationError}]">
            <label>Организатор</label>
            <input type="text" v-model="organization">
            <small v-if="organizationError">{{ organizationError }}</small>
        </div>

        <div :class="['form-control', {invalid: subdivisionError}]">
            <label>Подразделение</label>
            <input type="text" v-model="subdivision">
            <small v-if="subdivisionError">{{ subdivisionError }}</small>
        </div>

        <div :class="['form-control', {invalid: speakersError}]">
            <label>Спикеры</label>
            <input type="text" v-model="speakers">
            <small v-if="speakersError">{{ speakersError }}</small>
        </div>

        <div :class="['form-control', {invalid: targetAudienceError}]">
            <label>Целевая аудитория</label>
            <input type="text" v-model="target_audience">
            <small v-if="targetAudienceError">{{ targetAudienceError }}</small>
        </div>

        <div :class="['form-control', {invalid: participantsNumberError}]">
            <label>Рассчитано на количество человек</label>
            <input type="number" v-model="participants_number">
            <small v-if="participantsNumberError">{{ participantsNumberError }}</small>
        </div>

        <button type="submit" class="btn btn-blue" :disabled="isSubmitting">Добавить мероприятие</button>
    </form>
</template>
<script>
import useAddEventForm from '../../use/add-event-form'

export default {
    setup() {
        return {
            ...useAddEventForm()
        }
    }
}
</script>
<style lang="scss" scoped>

</style>