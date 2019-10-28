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
      <div class="logo">
        <img src="@/assets/lorem-logo.png"/>
      </div>
      <div class="nav-items">
        <router-link :to="item.path" :key="item.label" v-for="item in navi">
          <div class="nav-item">
            <div class="tag" v-if="item.tag">{{ item.tag }}</div>
            <component :is="item.icon" :width="36" :height="36"></component><br/>
            <span>{{ item.label }}</span>
          </div>
        </router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMessages from 'vue-messages'
import ArrowDownIcon from '@/components/icon/ArrowDown.vue'
import SettingsIcon from 'mdi-vue/Settings'
import AlbumIcon from 'mdi-vue/Album'
import DashboardIcon from 'mdi-vue/SpeedometerMedium'
import AgendarIcon from 'mdi-vue/Calendar'
import CalendarioIcon from 'mdi-vue/CalendarMonth'
import InboxIcon from 'mdi-vue/Inbox'
import FeedIcon from 'mdi-vue/Newspaper'
import WorkflowIcon from 'mdi-vue/FolderEdit'
import AcompanhamentoIcon from 'mdi-vue/MonitorDashboard'
import RelatoriosIcon from 'mdi-vue/Pizza'
import BeakerIcon from 'mdi-vue/BeakerOutline'

Vue.use(VueRouter);
Vue.use(VueMessages, { themes: 'blackGold' });

const now = () => {
  let datetime = new Date();
  return datetime.toLocaleDateString() + ' ' + datetime.toLocaleTimeString();
}

export default {
  components:{
    SettingsIcon,
    ArrowDownIcon,
    AlbumIcon,
    DashboardIcon,
    AgendarIcon,
    CalendarioIcon,
    InboxIcon,
    FeedIcon,
    WorkflowIcon,
    AcompanhamentoIcon,
    RelatoriosIcon,
    BeakerIcon
  },
  data() {
    return {
      clock: now(),
      navi: [
        {
          label: 'DASHBOARD',
          path: '/',
          icon: 'dashboard-icon'
        },
        {
          label: 'AGENDAR POST',
          path: '/agendar_post',
          icon: 'agendar-icon',
          tag: 'NOVO'
        },
        {
          label: 'CALENDÁRIO',
          path: '/calendario',
          icon: 'calendario-icon'
        },
        {
          label: 'INBOX',
          path: '/inbox',
          icon: 'inbox-icon'
        },
        {
          label: 'FEED',
          path: '/feed',
          icon: 'feed-icon'
        },
        {
          label: 'WORKFLOW',
          path: '/workflow',
          icon: 'workflow-icon'
        },
        {
          label: 'ACOMPANHAMENTO',
          path: '/acompanhamento',
          icon: 'acompanhamento-icon'
        },
        {
          label: 'RELATÓRIOS',
          path: '/relatorios',
          icon: 'relatorios-icon'
        },
      ]
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
  width: 100%;
  position: fixed;
  top: 2rem;
  left: 0;
}
#nav .logo{
  float: left;
  width: 9rem;
  padding-top: 0.3rem;
}
#nav .logo img{
  width: 100%;
}
#nav .nav-items{
  min-width: 20rem;
}
#nav a .nav-item{
  color: #606060;
  padding: 0.8rem;
  float: left;
  font-size: small;
}
#nav a .nav-item .tag{
  background: #ffb300;
  border-radius: 1rem;
  position: absolute;
  margin-left: 4rem;
  color: white;
  font-weight: bold;
  padding: 0.25rem 0.3rem 0;
  font-size: xx-small;
}
#nav a .nav-item .mdi{
  color: #adadad;
}
#nav a.router-link-exact-active .nav-item .mdi{
  color: #777777;
}
#nav a.router-link-exact-active .nav-item{
  background: #eff0f0;
  color: #e12b4a;
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
