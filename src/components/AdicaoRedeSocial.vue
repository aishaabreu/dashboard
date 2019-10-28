<template>
  <div class="container">
    <div class="background"></div>
    <div class="modal">
      <div class="modal-header">
        <img :src="modal.social.image"/>
        <span>Vincular página do {{ modal.social.name }}</span>
        <a @click="modal.active = false"><close-icon width="18" height="18"></close-icon></a>
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from 'mdi-vue/Close'

export default {
  components:{
    CloseIcon
  },
  props: {
    modal: Object
  }
}
</script>

<style scoped>
.container{
  position: fixed;
  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.background{
  z-index: 500;
  background: black;
  opacity: 0.4;
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.modal{
  z-index: 600;
  position: fixed;
  opacity: 1;
  background: white;
  box-shadow: 0 0 1.5rem rgba(0,0,0,0.5);
  width: 22rem;
  height: 28rem;
  padding: 1.4rem;
}
.modal .modal-header{
  display: flex; 
  align-items: center;
}
.modal a{
  position: absolute;
  right: 0.8rem;
  top: 0.8rem;
  color: gray;
  cursor: pointer;
}
.modal span{
  margin-left: 1rem;
}
.modal .modal-header img{
  width: 1.8rem;
}
</style>
