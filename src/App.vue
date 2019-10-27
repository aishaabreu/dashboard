<template>
  <div id="app">
    <div id="bar">
      <span id="clock">{{ clock }}</span>
      <a id="settings">
        <settings-icon></settings-icon>
      </a>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import SettingsIcon from 'mdi-vue/Settings'

Vue.use(VueRouter)

const now = () => {
  let datetime = new Date();
  return datetime.toLocaleDateString() + ' ' + datetime.toLocaleTimeString();
}

export default {
  components:{
    SettingsIcon
  },
  data() {
    return {
      clock: now()
    }
  },
  mounted(){
    setInterval(() => {
      this.clock = now();
    }, 1000);
  }
}
</script>

<style scoped>
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
#clock{
  left: 5rem;
  position: absolute;
  top: 0.6rem;
  font-size: small;
}
#settings{
  right: 5rem;
  position: absolute;
  top: 0.2rem;
  font-size: small;
}
#settings span{
  color: #7c7e80
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
@media (max-width: 600px) {
  #clock{
    left: 2rem;
  }
  #settings{
    right: 2rem;
  }
}
</style>
