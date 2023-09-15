<template>
  <div class="home">
    <h1>home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">click me</button>

    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">click me</button>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "HomeView",
  setup() {
    // ref
    const ninjaOne = ref({
      name: "Jack",
      age: 38,
    });
    // reactive : doesn't work for primitive types, only objects
    const ninjaTwo = reactive({
      name: "Arnold",
      age: 45,
    });

    const updateNinjaOne = () => {
      ninjaOne.value.name = "Mel";
      ninjaOne.value.age = 40;
    };

    const updateNinjaTwo = () => {
      ninjaTwo.name = "Ronny";
      ninjaTwo.age = 65;
    };

    return {
      ninjaOne,
      ninjaTwo,
      updateNinjaOne,
      updateNinjaTwo,
    };
  },
};
</script>
