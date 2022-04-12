<template>
  <div>
    <div class="home">
      <h1>Get Pumped. Game On!</h1>
    </div>
    <HomeComponent :event="events"/>
  </div>
</template>

<script>

import HomeComponent from "../components/HomeComponent"
export default {
  name: 'HomeView',
  components: {
    HomeComponent
  }
}
</script>

<style scoped>
 .home{
   background-image: url(../assets/Blackout.jpg);
   size: inherit;
   height: 900 px;
 }
</style>