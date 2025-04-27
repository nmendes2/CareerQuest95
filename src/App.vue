<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="header-wrapper">
      <div class="header-left">
        <RouterLink to="/">
          <img class="logo" src="./assets/career-quest-logo.png" alt="" />
        </RouterLink>
        <nav class="nav-items">
          <RouterLink to="/" class="nav-item"> Discover </RouterLink>
          <RouterLink to="/" class="nav-item"> Special Deals </RouterLink>
          <RouterLink to="/" class="nav-item"> Community </RouterLink>
          <RouterLink to="/" class="nav-item"> About Us </RouterLink>
        </nav>
      </div>
      <div class="header-right">
        <button class="sign-in">Sign in</button>
        <button class="register">Register</button>
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  width: 100%;
  position: fixed;
  z-index: 1;
}

.header-wrapper {
  display: flex;
  align-items: center;
  padding: 20px 60px;
  justify-content: space-between;
  font-size: 12px;
}

.header-left {
  display: flex;
}

.logo {
  padding-right: 2em;
  width: 100px;
  cursor: pointer;
}

.logo:hover {
  filter: drop-shadow(0px 0px 5px #fc70fc);
}

.nav-items {
  display: flex;
  align-items: center;
  font-family: 'Press Start 2P', system-ui;
}

.nav-item {
  padding: 0 2em;
}

.header-right {
  display: flex;
}

.sign-in {
  border: none;
  background-color: transparent;
  color: #fc70fc;
  margin-right: 30px;
}

.sign-in:hover {
  text-shadow: 0px 0px 10px #fc70fc;
}

.register {
  color: white;
  background-color: black;
  border: 1px solid #fc70fc;
  border-radius: 10px;
  padding: 15px 30px;
}

.register:hover {
  box-shadow: 0px 0px 10px #fc70fc;
}
/*
* Old CSS
*/
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
