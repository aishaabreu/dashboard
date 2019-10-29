<template>
  <div class="container">
    <div class="background"></div>
    <div class="modal">
      <div class="modal-header">
        <img :src="modal.social.image"/>
        <span>Vincular página do {{ modal.social.name }}</span>
        <a @click="close"><close-icon width="18" height="18"></close-icon></a>
      </div>
      <div class="modal-body">
        <div class="timelapse">
          <div class="lapse">
            <div class="dot active"></div>
            <div :class="['line', current > 0 ? 'active' : '']"></div>
            <div :class="['dot', current > 0 ? 'active' : '']"></div>
            <div :class="['line', current > 1 ? 'active' : '']"></div>
            <div :class="['dot', current > 1 ? 'active' : '']"></div>
            <div :class="['line', current > 2 ? 'active' : '']"></div>
            <div :class="['dot', current > 2 ? 'active' : '']"></div>
          </div>
          <div class="label">
            <span class="active">Verificação</span>
            <span :class="[current > 0 ? 'active' : '']">Páginas</span>
            <span :class="[current > 1 ? 'active' : '']">Segmento</span>
            <span :class="[current > 2 ? 'active' : '']">Concorrentes</span>
          </div>
        </div>
        <div class="pages" v-if="steps[current].pages">
          <div class="page" :key="page.id" v-for="page in modal.pages">
            <div class="image" v-bind:style="{ backgroundImage: 'url(' + page.picture + ')' }"></div>
            <div class="text">
              <span>{{ page.name }}</span>
              <a :href="page.url">{{ page.url }}</a>
            </div>
            <input type="radio" name="page" @change="selected = page">
          </div>
        </div>
        <span class="info">{{ steps[current].text }}</span>
        <a :href="modal.social.help" v-if="steps[current].help">
          Clique aqui para atualizar suas permissões do {{modal.social.name}}
        </a>
      </div>
      <div class="modal-footer">
        <button :class="[!current? 'disabled' : '']" @click="previous">Voltar</button>
        <button :class="[steps[current].pages && !selected? 'disabled' : '']" @click="next" v-if="steps[current + 1]">Próximo</button>
        <button @click="callback(selected); close()" v-if="!steps[current + 1]">Concluir</button>
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
  data(){
    return {
      selected: null,
      current: 0,
      steps: [
        {
          text: 'Pressione próximo para continuar',
          pages: false,
          help: false
        },
        {
          text: 'Não encontrou sua página?',
          pages: true,
          help: true
        },
        {
          text: 'Pressione próximo para continuar',
          pages: false,
          help: false
        },
        {
          text: 'Pressione concluir para finalizar',
          pages: false,
          help: false
        }
      ]
    }
  },
  props: {
    modal: Object,
    callback: Function
  },
  methods: {
    close(){
      this.modal.active = false;
    },
    previous(){
      let previous = this.current - 1;
      if(previous > -1){
        this.current = previous;
        this.selected = null;
      }
    },
    next(){
      let next = this.current + 1;
      if(this.steps[next] && !(this.steps[this.current].pages && !this.selected)){
        this.current = next;
      }
    },
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
  width: 25rem;
}
.modal .modal-header{
  display: flex; 
  align-items: center;
  padding: 1.4rem;
}
.modal .modal-header a{
  position: absolute;
  right: 0.8rem;
  top: 0.8rem;
  color: gray;
  cursor: pointer;
}
.modal .modal-header span{
  margin-left: 1rem;
}
.modal .modal-header img{
  width: 1.8rem;
}
.modal .modal-body{
  height: 20rem;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
}
.modal .modal-body .pages{
  height: 13rem;
  overflow: auto;
  width: 100%;
}
.modal .modal-body .pages .page{
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  margin: 0.1rem;
  padding: 0.5rem;
  background: #efefef;
}
.modal .modal-body .pages .page .image{
  height: 2rem;
  width: 2rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.modal .modal-body .pages .page .text{
  display: flex;
  align-items: left;
  text-align: left;
  flex-direction: column;
  justify-content: space-between;
  width: 16rem;
}
.modal .modal-body .pages .page .text a{
  color: gray;
  text-decoration: none;
}
.modal .modal-body .info{
  font-size: small;
  color: #808284;
}
.modal .modal-body a{
  font-size: x-small;
}
.modal .modal-footer{
  display: flex;
  justify-content: space-between;
  background: #f8f8f8;
  padding: 1.4rem;
}

.modal .modal-footer button{
  border: 0;
  background: #4a8fe2;
  color: white;
  padding: 0.4rem;
  text-transform: uppercase;
  border-radius: 0.3rem;
  cursor: pointer;
}
.modal .modal-footer button.disabled{
  background: #f8f8f8;
  color: #737373;
  cursor: default;
}
.timelapse{
  width: 100%;
}
.timelapse .lapse,
.timelapse .label{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.timelapse .lapse{
  padding: 0 1.7rem;
}
.timelapse .label{
  margin-top: 0.4rem;
}
.timelapse .lapse .dot{
  background: #d8d8d8;
  border-radius: 100%;
  width: 0.6rem;
  height: 0.6rem;
}
.timelapse .lapse .line{
  background: #979797;
  width: 5rem;
  height: 0.1rem;
  margin: 0.3rem;
}
.timelapse .lapse .dot.active,
.timelapse .lapse .line.active{
  background: #ef9f2e;
}
.timelapse .label span{
  font-size: x-small;
  margin-left: 0;
  width: 4rem;
}
.timelapse .label span.active{
  font-weight: bold;
}
</style>
