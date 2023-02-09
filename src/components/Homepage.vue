<template>
  <div class="body">
    <input type="text" v-model="search" placeholder="Search dog breeds..." />
    <div class="infobox">
      <router-link v-for="(breed, index) in dogBreeds" :to="breed" :key="breed">
        <div class="infobox_content">
          <img class="img_style" :src="dogImages[index]" loading="lazy" />
        </div>
      </router-link>
    </div>
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

input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}

input:focus {
  outline-color: #42b983;
}
</style>
