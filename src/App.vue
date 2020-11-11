<template>
  <div class="container">
    <div class="nav bg-dark">
      <div class="nav-item">
        <router-link class="nav-link text-muted" to="/">Home</router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link text-muted" to="/about">About</router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link text-muted" to="/register">Register</router-link>
      </div>
      <div class="nav-item">
        <router-link class="nav-link text-muted" to="/login">Login</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>
