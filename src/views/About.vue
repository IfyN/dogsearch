<template>
  <div class="about">
    <h1>Breed: {{ $route.params.breed }}</h1>
    <h2> Sub Breeds: </h2>
    <ul>
      <li v-for="sub in subBreeds" :key="sub"> {{ sub }} </li>
    </ul>
    <img v-for="image in subBreedImages" :key="image" :src="image" />
  </div>
</template>
<script>
// import axios from "axios";

import axios from 'axios';


export default {
  name: "About",
  data() {
    return {
      subBreedImages: [],
      subBreeds: [],
    }
  },

  async mounted() {
    const { breed } = this.$route.params
    const breedImages = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random/3`)
    const subBreedImages = breedImages.data.message
    this.subBreedImages = subBreedImages;
    // console.log({ subBreedImages })

    const subBreeds = await axios.get(`https://dog.ceo/api/breed/${breed}/list`)
    this.subBreeds = subBreeds.data.message[breed]

  }
}

</script>
