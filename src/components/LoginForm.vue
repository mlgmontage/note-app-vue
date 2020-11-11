<template>
  <b-form @submit="onSubmit" class="col-md-4 py-3 m-auto">

    <b-form-group
      label="Your unique login"
      label-for="login"
      description="Your unique login"
    >
      <b-form-input id="login" v-model="form.login" type="text" required ></b-form-input>
    </b-form-group>

    <b-form-group
      label="Your password"
      label-for="password"
      description="Your password"
    >
      <b-form-input id="password" v-model="form.password" type="password" required ></b-form-input>
    </b-form-group>

    <b-button type="submit" @click="onSubmit" variant="primary">Login</b-button>
  </b-form>
</template>

<script>

import signin from "@/axios/login"

export default {
  data ()  {
    return {
        form: {
          login: '',
          password: ''
      }
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      const response = await signin({
        Login: this.form.login,
        Password: this.form.password
      })

      if(response.status === 200) {
        localStorage.setItem("token", response.data.token)
        console.log("logged in")
      }
    }
  }
}
</script>