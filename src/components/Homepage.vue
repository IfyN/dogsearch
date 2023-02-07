<template>
  <div>
    <router-link v-for="(breed, index) in dogBreeds" :to="breed" :key="breed">
      <img :src="dogImages[index]" loading="lazy" />
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Homepage",
  data() {
    return {
      dogBreeds: [],
      dogImages: [],
    }
  },
  async mounted() {
    const breedsResponse = await axios.get("https://dog.ceo/api/breeds/list")
    const dogBreeds = breedsResponse.data.message
    this.dogBreeds = dogBreeds

    const dogImagePromises = dogBreeds.map((breed) =>
      axios.get(`https://dog.ceo/api/breed/${breed}/images/random`))

    const settledPromises = await Promise.allSettled(dogImagePromises)
    const dogImages = settledPromises.map((promise) => promise.value.data.message)
    this.dogImages = dogImages
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
