<template>
    <div class="events" v-if="events">
        <event 
            v-for="event in events"
            :key="event.id"
            :data="event"
        ></event>
    </div>
</template>
<script>
import Event from '../components/Event'
import { onBeforeMount, computed } from 'vue'
import { useStore } from 'vuex'

export default {
    components: { Event },
    setup() {
        const store = useStore();
        const events = computed(() => { 
            return store.state.Events.events
        });
        

        onBeforeMount(() => {
            store.dispatch('Events/fetchEvents');
            console.log(events)
        })

        return {
            Event,
            events
        }
    }
}
</script>

<style lang="scss">

</style>