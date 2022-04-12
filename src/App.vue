<template>
  <div id="app">
    <div class="header">
    <router-link to="/">
      <div class="logo">
        <img src="../public/flex.png">
      </div>
    </router-link>
    <div class="title">
      <h1>Austin's Game Room</h1>
    </div>  
    <nav class="selections">
      <router-link to="/">Home</router-link>
      <router-link to="/event">Events</router-link>
      <router-link to="/challenge">Challenge</router-link>
    </nav>
    </div>

    <router-view/>

    <div class="footer">
    <a href="https://github.com/AustinLHarris/create3.git" class="gary">Github</a>
    </div>
  
  </div>

  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.selections{
  font-size: 20px;
  text-emphasis-color: red;
}

.footer {
  height: 50px;
  padding: 20px 100px 0px 100px;
  background: #e3e3e3;
  font-size: 12px;
  text-align: center;
}
.header {
  display: flex;
  padding: 10px 100px 0px 100px;
  background-color: #5f5d51;
  color: #8ca1a7;
}

.title {
  margin-top: 5px;
}

.logo{
  max-height: 50dp;
  max-width: 50dp;
} 

.img{
  size: 10px;
  height: 10%;
  object-fit:inherit
}
</style>
