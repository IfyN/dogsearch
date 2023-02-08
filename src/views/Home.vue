<template>
  <div class="home">
    <Homepage msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Homepage from "@/components/Homepage.vue";

export default {
  name: "Home",
  components: {
    Homepage,
  },
};
</script>
