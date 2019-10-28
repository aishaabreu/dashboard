<template>
  <div class="container">
    <div class="social-card" :key="social.name" v-for="social in redes">
      <div class="help">?</div>
      <img :src="social.image"/>
      <span>{{ social.name }}</span>
      <button>Adicionar</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      redes: [
        {
          image: require('@/assets/facebook.png'),
          name: 'FACEBOOK',
          channel: 'facebook'
        },
        {
          image: require('@/assets/twitter.png'),
          name: 'TWITTER',
          channel: 'twitter'
        },
        {
          image: require('@/assets/instagram.png'),
          name: 'INSTAGRAM',
          channel: 'instagram'
        },
        {
          image: require('@/assets/google-my-business.png'),
          name: 'GOOGLE MEU NEGÓCIO',
          channel: 'google_my_business'
        },
        {
          image: require('@/assets/pinterest.png'),
          name: 'PINTEREST',
          channel: 'pinterest'
        },
        {
          image: require('@/assets/linkedin.png'),
          name: 'LINKEDIN',
          channel: 'linkedin'
        },
        {
          image: require('@/assets/youtube.png'),
          name: 'YOUTUBE',
          channel: 'youtube'
        },
        {
          image: require('@/assets/whatsapp.png'),
          name: 'WHATSAPP',
          channel: 'whatsapp'
        },
        {
          image: require('@/assets/google-analytics.png'),
          name: 'GOOGLE ANALYTICS',
          channel: 'google_analytics'
        }
      ]
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
  width: 4rem;
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
}
</style>