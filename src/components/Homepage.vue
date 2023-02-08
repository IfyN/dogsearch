<template>
  <div>
    <router-link v-for="(breed, index) in dogBreeds" :to="breed" :key="breed">
      <img :src="dogImages[index]" loading="lazy" />
    </router-link>
  </div>
</template>

<script>

export default {
  name: "Homepage",
  computed: {
    dogBreeds() {
      return this.$store.getters.getDogBreeds
    },
    dogImages() {
      return this.$store.getters.getDogImages
    }
  },
  async mounted() {
    await this.$store.dispatch('fetchDogImages');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
