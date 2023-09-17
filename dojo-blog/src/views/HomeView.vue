<template>
  <div class="home">
    <h1>home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="posts.pop()">delete a post</button>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from "vue";

export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: "welcome to the blod",
        body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sunt qui unde ratione quo dolorum at commodi placeat iste totam? Dicta, rerum dolorem repellat doloremque quaerat omnis nihil eos perspiciatis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sunt qui unde ratione quo dolorum at commodi placeat iste totam? Dicta, rerum dolorem repellat doloremque quaerat omnis nihil eos perspiciatis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sunt qui unde ratione quo dolorum at commodi placeat iste totam? Dicta, rerum dolorem repellat doloremque quaerat omnis nihil eos perspiciatis?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut sunt qui unde ratione quo dolorum at commodi placeat iste totam? Dicta, rerum dolorem repellat doloremque quaerat omnis nihil eos perspiciatis?",
        id: 1,
      },
      {
        title: "top 5 css tips",
        body: "Lorem ipsum",
        id: 2,
      },
    ]);
    const showPosts = ref(true);
    return { posts, showPosts };
  },
};
</script>
