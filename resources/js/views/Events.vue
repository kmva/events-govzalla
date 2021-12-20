<template>
    <div>
        <h1>Мероприятия</h1>
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