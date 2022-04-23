<template>
  <component v-if="layout" :is="layout"></component>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Main from './layout/Main.vue'
import Admin from './layout/Admin.vue'

import '../../public/assets/css/reset.css'
import '../../public/assets/css/normalize.css'
import '../../public/assets/css/style.css'

export default ({
  setup() {
    const route = useRoute();
    const layout = computed(() => {
      return route.meta.layout;
    })

    return {
      layout,
      Main,
      Admin,
    }
  }
})
</script>
<style lang="scss">
</style>
