<template>
  <b-form class="col-md-4 py-3 m-auto">

    <b-form-group
      label="Your unique login"
      label-for="login"
      description="Your unique login"
    >
      <b-form-input id="login" type="text" required ></b-form-input>
    </b-form-group>

    <b-form-group
      label="Your password"
      label-for="password"
      description="Your password"
    >
      <b-form-input id="password" type="password" required ></b-form-input>
    </b-form-group>

    <b-form-group
      label="Your name"
      label-for="name"
      description="Your name"
    >
      <b-form-input id="name" type="text" required ></b-form-input>
    </b-form-group>

    <b-form-group
      label="Your lastname"
      label-for="lastname"
      description="Your lastname"
    >
      <b-form-input id="lastname" type="text" required ></b-form-input>
    </b-form-group>

    <b-button type="submit" variant="primary">Submit</b-button>
  </b-form>
</template>

<script>
export default {
  
}
</script>