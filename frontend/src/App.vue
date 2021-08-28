<template>
  <h1>{{ title }}</h1>
  <p>Welcome !</p>
  <teleport to="#modals" v-if="showModal">
      <Modal theme="none" @close="toggleModal(1)">
        <template v-slot:links>
          <a href="#">singin</a>
          <a href="#">give up</a>
        </template>
      <h1>Signin or leave !</h1>
      <p>Mouhaaha, so you signin ?</p>
    </Modal>
  </teleport>
  <teleport to="#modals" v-if="showModal2">
      <Modal theme="sale" @close="toggleModal(2)">
        <template v-slot:choice>
          <a href="#">This one?</a>
          <a href="#">or this one?</a>
        </template>
      <h1>Will you try one link ? </h1>
    </Modal>
  </teleport>
  <button @Click="toggleModal(1)">Open modal 1</button>
  <button @Click="toggleModal(2)">Open modal 2</button>
  <p>Here a refs test:</p>
  <div>
    <input type="text" ref="name">
    <button @Click="handleClick">CLick me</button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      title: 'My first Vue Site',
      header: 'Youhou signup or leave!',
      text: 'here is the modal content!',
      showModal: false,
      showModal2: false
    }
  },
  methods: {
    handleClick() {
      this.$refs.name.classList.toggle('active')
      this.$refs.name.focus()
    },
    toggleModal(nbr) {
      console.log('toggle modal ' + nbr)
      if (nbr == 1)
        this.showModal =  !this.showModal
      else
        this.showModal2 =  !this.showModal2
    },
  }
}
</script>

<style>
#app, #modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
