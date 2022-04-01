<template>
    <form class="form add-event-form" @submit.prevent="onSubmit">
        <div :class="['form-control', {invalid: titleError}]">
            <label>Название <span class="required-star">*</span></label>
            <input type="text" v-model="title" />
            <small v-if="titleError">{{ titleError }}</small>
        </div>

        <div :class="['form-control', {invalid: formatError}]">
            <label>Формат мероприятия <span class="required-star">*</span></label>
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
            <label>Описание мероприятия <span class="required-star">*</span></label>
            <textarea cols="30" rows="10" v-model="description"></textarea>
            <small v-if="descriptionError">{{ descriptionError }}</small>
        </div>
         
        <div :class="['form-control', {invalid: locationError}]">
            <label>Место проведения <span class="required-star">*</span></label>
            <input type="text" v-model="location">
            <small v-if="locationError">{{ locationError }}</small>
        </div>

        <div :class="['form-control', {invalid: dateError}]">
            <label>Дата проведения <span class="required-star">*</span></label>
            <input type="datetime-local" v-model="date">
            <small v-if="dateError">{{ dateError }}</small>
        </div>

        <div :class="['form-control', {invalid: organizationIdError}]">
            <label>Организатор <span class="required-star">*</span></label>
            <select v-model="organization_id">
                <option disabled>Выберите один из вариантов</option>
                <option value="1">Министерство образования и науки Чеченской Республики</option>
                <option value="2">Институт развития образования Чеченской Республики</option>
                <option value="3">Центр непрерывного повышения профессионального мастерства
                        педагогических работников Чеченской Республики</option>
                <option value="4">Департамент образования Мэрии г. Грозного</option>
                <option value="5">МУ «Управление образования Грозненского муниципального района»</option>
                <option value="6">МУ «Шаройский районный отдел образования»</option>
                <option value="7">МУ «Отдел образования Шелковского муниципального района»</option>
                <option value="8">МУ «Управление образования Гудермесского муниципального района»</option>
                <option value="9">МУ «Отдел образования Шалинского муниципального района»</option>
                <option value="10">МУ «Отдел образования Шатойского муниципального района»</option>
                <option value="11">МУ «Отдел образования Урус-Мартановского муниципального района»</option>
                <option value="12">МУ «Управление образования Ножай-Юртовского муниципального района»</option>
                <option value="13">МУ «Наурский районный отдел образования»</option>
                <option value="14">МУ «Веденский районный отдел образования»</option>
                <option value="15">МУ «Итум-Калинский районный отдел образования»</option>
                <option value="16">МУ «Отдел образования администрации Надтеречного муниципального района»</option>
                <option value="17">МУ «Отдел образования Серноводского муниципального района»</option>
                <option value="18">МУ «Департамент образования г.Аргун»</option>
                <option value="19">МУ «Управление образования Курчалоевского муниципального района»</option>
                <option value="20">МУ «Отдел образования Ачхой-Мартановского муниципального района»</option>
            </select>
            <small v-if="organizationIdError">{{ organizationIdError }}</small>
        </div>

        <div :class="['form-control', {invalid: subdivisionError}]">
            <label>Подразделение</label>
            <input type="text" v-model="subdivision">
            <small v-if="subdivisionError">{{ subdivisionError }}</small>
        </div>

        <div :class="['form-control', {invalid: directionError}]">
            <label>Направление</label>
            <input type="text" v-model="direction">
            <small v-if="directionError">{{ directionError }}</small>
        </div>
<!-- , {invalid: speakersError} -->
        <div :class="['form-control']">
            <label>Спикеры <span class="required-star">*</span></label>
            <div class="flex"> <input type="text" v-model="speaker">
                <!-- <small v-if="speakersError">{{ speakersError }}</small> -->
                <button class="add-speaker" @click.prevent="addSpeaker">Добавить</button>
            </div>
           
            <ul class="speakers">
                <li 
                    v-for="(speaker, index) in speakers"
                    :key="index"
                    class="speaker"
                >{{ speaker }} <span class="delete-speaker" @click="deleteSpeaker(index)">x</span></li>
            </ul>
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

        <div :class="['form-control']">
            <label>Прикрепить фотографию</label>
            <input type="file" accept="image/jpeg, image/png, image/jpg" ref="eventImg"  @change="uploadImgHandler">
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