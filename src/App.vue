<template>
  <div id="app">
    <div id="bar">
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f7f7f7;
  padding-top: 7.2rem;
  position: absolute;
  min-height: calc(100vh - 7.2rem);
  top: 0;
  left: 0;
  width: 100%;
}
#bar span{
  color: #b1b2b3;
}
#bar{
  background: #3a3a3a;
  height: 2rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
}
#nav{
  background: white;
  border-bottom: 0.1rem solid #dddede;
  height: 5.2rem;
  width: 100%;
  position: fixed;
  top: 2rem;
  left: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
