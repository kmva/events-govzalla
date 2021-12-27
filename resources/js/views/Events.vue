<template>
    <div>
        <h1 class="events-title">Мероприятия</h1>
        <Events />
    </div>
</template>
<script>
import Events from '../components/Events'
export default {
    components: { Events },
    setup() {
        return {
            Events,
        }
    }
}
</script>

<style lang="scss">

</style>