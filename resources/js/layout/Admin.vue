<template>
  <AdminHeader />
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import AdminHeader from '../components/Admin/AdminHeader.vue'

export default ({
    components: { AdminHeader },
})
</script>
<style lang="scss">
</style>
