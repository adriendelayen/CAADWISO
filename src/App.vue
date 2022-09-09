<template>
<Navigation/>

<main>
  <router-view></router-view>
</main>
<Footer/>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Footer from './components/Footer.vue';



export default {
    name: "App",
    components: { Navigation, Footer }
}
</script>

<style>
 
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oxygen:wght@300&display=swap');

:root{
    --blue: #309bff;
    --white: #F5F5F7;
    --grey: #333333;
    --green: #73C48F;
} 

#app {
  font-family: 'Bebas Neue', cursive;
  font-family: 'Oxygen', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body{
    background-color: var(--white);
    margin: 0;
}
h1{
  color:var(--blue);
}
</style>
