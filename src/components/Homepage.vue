<template>
  <div class="body">
    <div>
      <input type="text" v-model="search" placeholder="Search dog breeds..." />
      <ul>
        <li class="item fruit" v-for="dog in visibleDogs" :key="dog">{{ dog }}</li>
      </ul>
    </div>
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
import axios from "axios";
export default {
  name: "Homepage",
  data() {
    return {
      search: '',
      dogBreedResults: []
    }
  },

  created() {
    this.fetchList();
  },
  methods: {
    fetchList() {
      axios.get("https://dog.ceo/api/breeds/list").then(response => {
        this.dogBreedResults = response.data.message;
      });
    },
  },

  computed: {
    dogBreeds() {
      return this.$store.getters.getDogBreeds
    },
    dogImages() {
      return this.$store.getters.getDogImages
    },
    visibleDogs() {
      return this.dogBreedResults.filter(dog => {
        return dog.toLowerCase().includes(this.search.toLowerCase());
      })
    },
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

li.item {
  width: 350px;
  margin: 0 auto 10px auto;
  padding: 10px 20px;
  color: white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
}

li.fruit {
  background-color: rgb(97, 62, 252);
  cursor: pointer;
}
</style>
