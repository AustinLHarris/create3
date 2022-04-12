<template>
  <div>
    <div class="home">
      <h1>Get Pumped. Game On!</h1>
    </div>
    <HomeComponent2 :event="events"/>
  </div>
</template>

<script>

import HomeComponent2 from "../components/HomeComponent2"
export default {
  name: 'HomeView',
  components: {
    HomeComponent2
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