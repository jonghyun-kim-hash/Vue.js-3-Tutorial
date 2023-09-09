<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Welcome!</p>
    <teleport to="#modals" v-if="showModal">
      <Modal theme="" @close="toggleModal">
        <template v-slot:link>
          <a href="#">Sign up now</a>
          <a href="#">More info </a>
        </template>

        <h1>{{ header }}</h1>
        <p>{{ text }}</p>
        <p>From {{ data[0] }} in {{ data[1] }}</p>
      </Modal>
    </teleport>

    <teleport to="#modals" v-if="showModalTwo">
      <Modal @close="toggleModalTwo">
        <h1>Sign up to the newsletter</h1>
        <p>For updates and promo codes!</p>
        <p>From {{ data[0] }} in {{ data[1] }}</p>
      </Modal>
    </teleport>
    <button @click="toggleModal">open modal</button>
    <button @click="toggleModalTwo">open 2nd modal</button>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App :)",
      header: "Sign up for the Giveaway!",
      text: "Grab the item you want!!",
      data: ["Jacky", 2023],
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app,
#modals {
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
