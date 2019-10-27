<template>
  <div id="app">
    <div id="bar">
      <span id="clock">{{ clock }}</span>
      <a id="menu" @click="oompa_loompas">
        <span>MINHA CONTA</span>
        <arrow-down-icon></arrow-down-icon>
      </a>
      <a id="settings" @click="oompa_loompas">
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
import VueMessages from 'vue-messages'
import SettingsIcon from 'mdi-vue/Settings'
import ArrowDownIcon from '@/components/icon/ArrowDown'

Vue.use(VueRouter);
Vue.use(VueMessages, { themes: 'blackGold' });

const now = () => {
  let datetime = new Date();
  return datetime.toLocaleDateString() + ' ' + datetime.toLocaleTimeString();
}

export default {
  components:{
    SettingsIcon,
    ArrowDownIcon
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
  },
  methods: {
    oompa_loompas(){
      this.$Message.error('Oompa-Loompas não implementaram essa funcionalidade.');
    }
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
#bar{
  background: #3a3a3a;
  height: 2rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 0.5rem;
}
#bar a{
  cursor: pointer;
}
#bar span{
  color: #b1b2b3;
  font-size: small;
}
#bar span svg{
  position: absolute;
  top: 0.25rem;
}
#clock{
  left: 5rem;
  position: absolute;
  top: 0.6rem;
}
#settings{
  position: absolute;
  right: 0;
  top: 0;
}
#settings span{
  color: #7c7e80
}
#settings span svg{
  right: 5rem;
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
    left: 1.5rem;
  }
  #settings span svg{
    right: 1.5rem;
  }
}
@media (max-width: 400px) {
  #clock{
    display: none;
  }
  #settings span svg{
    right: 0.5rem;
  }
}
</style>
