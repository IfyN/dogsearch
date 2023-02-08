<template>
  <div class="body">
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
  border: 2px solid #999999;
  border-radius: 6px;
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
</style>
