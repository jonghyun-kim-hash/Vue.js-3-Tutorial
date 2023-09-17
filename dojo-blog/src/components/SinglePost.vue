<template>
  <div class="">
    <h3>{{ post.title }}</h3>
    <p>{{ snippet }}</p>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      const body = props.post.body;
      return body.length > 100 ? body.substring(0, 100) + "...." : body;
    });
    return { snippet };
  },
};
</script>

<style></style>
