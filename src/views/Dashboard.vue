<template>
  <div class="container">
    <adicao-modal :modal="modal" v-if="modal.active"></adicao-modal>
    <div class="social-card" :key="social.name" v-for="social in redes">
      <div class="help" @click="help">?</div>
      <img :src="social.image"/>
      <span>{{ social.name }}</span>
      <button @click="add(social)">Adicionar</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueMessages from 'vue-messages'
import AdicaoModal from '@/components/AdicaoRedeSocial.vue'

Vue.use(VueMessages, { themes: 'blackGold' });

export default {
  components: {
    AdicaoModal
  },
  data(){
    return {
      modal: {
        social: null,
        active: false,
      },
      redes: [
        {
          image: require('@/assets/facebook.png'),
          name: 'Facebook',
          channel: 'facebook'
        },
        {
          image: require('@/assets/twitter.png'),
          name: 'Twitter',
          channel: 'twitter'
        },
        {
          image: require('@/assets/instagram.png'),
          name: 'Instagram',
          channel: 'instagram'
        },
        {
          image: require('@/assets/google-my-business.png'),
          name: 'Google Meu Negócio',
          channel: 'google_my_business'
        },
        {
          image: require('@/assets/pinterest.png'),
          name: 'Pinterest',
          channel: 'pinterest'
        },
        {
          image: require('@/assets/linkedin.png'),
          name: 'LinkedIn',
          channel: 'linkedin'
        },
        {
          image: require('@/assets/youtube.png'),
          name: 'Youtube',
          channel: 'youtube'
        },
        {
          image: require('@/assets/whatsapp.png'),
          name: 'Whatsapp',
          channel: 'whatsapp'
        },
        {
          image: require('@/assets/google-analytics.png'),
          name: 'Google Analytics',
          channel: 'google_analytics'
        }
      ]
    }
  },
  methods: {
    add(social){
      this.modal.social = social;
      this.modal.active = true;
    },
    help(){
      this.$Message.error('Oompa-Loompas não implementaram essa funcionalidade.');
    }
  }
}
</script>

<style scoped>
.container{
  padding: 2rem 3rem;
  box-sizing: border-box;
}
.social-card{
  border: 2px dotted #cbcccd;
  background: #f0f0f0;
  float: left;
  width: 12.5rem;
  height: 12.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.social-card span{
  text-transform: uppercase;
}
.social-card .help{
  border: 2px solid #a2a4a5;
  color: #a2a4a5;
  border-radius: 100%;
  width: 1.2rem;
  padding-top: 0.2rem;
  font-size: small;
  font-weight: bold;
  cursor: pointer;
  margin-left: 8rem;
}
.social-card img{
  width: 3.5rem;
  margin-bottom: 0.7rem;
}
.social-card button{
  background: #e12b4a;
  color: white;
  border: 0;
  border-radius: 0.2rem;
  padding: 0.4rem 0.7rem;
  font-weight: bold;
  margin: 0.7rem 0;
  cursor: pointer;
}
</style>