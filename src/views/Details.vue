<template>
  <div class="body">
    <h1>Breed: {{ $route.params.breed }}</h1>
    <h2> Sub Breeds: </h2>
    <ul>
      <li v-for="sub in subBreeds" :key="sub"> {{ sub }} </li>
    </ul>
    <div class="infobox">
      <div class="infobox_content">
        <img class="img_style" v-for="image in subBreedImages" :key="image" :src="image" />
      </div>
    </div>
  </div>
</template>
<script>
// import axios from 'axios';


export default {
  name: "Details",
  computed: {
    subBreedImages() {
      return this.$store.getters.getSubBreedImages;
    },

    subBreeds() {
      return this.$store.getters.getSubBreeds;
    }
  },

  async mounted() {
    const { breed } = this.$route.params
    await this.$store.dispatch('fetchSubBreedImages', breed);
    await this.$store.dispatch('fetchSubBreeds', breed);

    //   const subBreeds = await axios.get(`https://dog.ceo/api/breed/${breed}/list`)
    //   this.subBreeds = subBreeds.data.message[breed];
  },
}

</script>

<style scoped>
body {
  padding: 0;
  margin: 0;
  font-family: 'Trispace', sans-serif;
  line-height: 1.6;
  font-size: 18px;
}

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

.infobox_content {
  text-align: center;
  border: none;
  padding-top: 5px;
}

.infobox {
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(200px, 300px));
  gap: 20px;
  margin-top: 20px;
}

.img_style {
  width: 300px;
  height: 300px;
}
