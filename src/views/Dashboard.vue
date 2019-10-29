<template>
  <div class="container">
    <adicao-modal :modal="modal" :callback="add_page" v-if="modal.active"></adicao-modal>
    <div class="social-card" :key="social.name" v-for="social in social_list">
      <div class="help" @click="help">?</div>
      <img :src="social.image"/>
      <span>{{ social.name }}</span>
      <button @click="add(social)">Adicionar</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios';
import VueMessages from 'vue-messages'
import AdicaoModal from '@/components/AdicaoRedeSocial.vue'

Vue.use(VueMessages, { themes: 'blackGold' });

const PAGES_URL = 'https://demo2697181.mockable.io/pages';

export default {
  components: {
    AdicaoModal
  },
  data(){
    return {
      modal: {
        social: null,
        active: false,
        pages: []
      },
      social_list: [
        {
          image: require('@/assets/facebook.png'),
          name: 'Facebook',
          channel: 'facebook',
          help: 'https://pt-br.facebook.com/help/262314300536014/'
        },
        {
          image: require('@/assets/twitter.png'),
          name: 'Twitter',
          channel: 'twitter',
          help: 'https://help.twitter.com/pt/managing-your-account/connect-or-revoke-access-to-third-party-apps'
        },
        {
          image: require('@/assets/instagram.png'),
          name: 'Instagram',
          channel: 'instagram',
          help: 'https://pt-br.facebook.com/help/instagram/186452768798716'
        },
        {
          image: require('@/assets/google-my-business.png'),
          name: 'Google Meu Negócio',
          channel: 'google_my_business',
          help: 'https://support.google.com/googleplay/work/answer/6137917'
        },
        {
          image: require('@/assets/pinterest.png'),
          name: 'Pinterest',
          channel: 'pinterest',
          help: 'https://help.pinterest.com/pt-br/article/edit-account-privacy'
        },
        {
          image: require('@/assets/linkedin.png'),
          name: 'LinkedIn',
          channel: 'linkedin',
          help: 'https://www.linkedin.com/help/learning/suggested/95455/como-gerenciar-permissoes-de-administrador-no-linkedin-learning'
        },
        {
          image: require('@/assets/youtube.png'),
          name: 'Youtube',
          channel: 'youtube',
          help: 'https://support.google.com/youtube/answer/2453875'
        },
        {
          image: require('@/assets/whatsapp.png'),
          name: 'Whatsapp',
          channel: 'whatsapp',
          help: 'https://faq.whatsapp.com/pt_pt/iphone/22077198/?category=5245250'
        },
        {
          image: require('@/assets/google-analytics.png'),
          name: 'Google Analytics',
          channel: 'google_analytics',
          help: 'https://support.google.com/analytics/answer/2884495'
        }
      ]
    }
  },
  methods: {
    async add(social){
      let response = await axios.get(PAGES_URL);
      let pages = response.data.data;

      this.modal.pages = pages.filter((page) => {
        return page.channel_key == social.channel;
      })
      this.modal.social = social;
      this.modal.active = true;
    },
    add_page(page){
      console.log(page);
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