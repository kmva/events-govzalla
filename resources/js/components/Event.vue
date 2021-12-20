<template>
    <div class="event" :data="data">
        <h3 class="event__title">{{ data.title }}</h3>
        <div class="event__date">
            {{ data.date }}
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