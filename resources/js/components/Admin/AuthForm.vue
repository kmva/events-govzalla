<template>
  <form class="form" @submit.prevent="onSubmit">
      <div class="form-control">
        <label>Email</label>
        <input type="email" v-model="email">
        <small v-if="emailError">{{ emailError }}</small>
      </div>
      <div class="form-control">
        <label>Пароль</label>
        <input type="password" v-model="password">
        <small v-if="passwordError">{{ passwordError }}</small>
      </div>
      <button type="submit" :disabled="isSubmitting">Войти</button>
  </form>
</template>

<script>
import useAuthForm from '../../use/auth-form'

export default {
    setup() {
        return {
            ...useAuthForm(),
        }
    }
}
</script>

<style>

</style>