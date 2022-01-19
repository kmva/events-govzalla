<template>
    <div class="enrollers">

    </div>   
</template>
<script>
import Event from '../components/Event'
import { onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'

export default {
    components: { Event },
    setup() {
        const store = useStore();
        const enrollers = computed(() => { return store.getters['Enrollers/enrollers'] });


        return {
        }
    }
}
</script>

<style lang="scss">

</style>