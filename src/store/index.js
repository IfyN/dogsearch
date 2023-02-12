import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dogBreeds: [],
    dogImages: [],
    subBreedImages: [],
    subBreeds: [],
  },
  getters: {
    getDogBreeds: (state) => state.dogBreeds,
    getDogImages: (state) => state.dogImages,
    getSubBreedImages: (state) => state.subBreedImages,
    getSubBreeds: (state) => state.subBreeds,
  },
  mutations: {
    setDogBreeds(state, dogBreeds) {
      state.dogBreeds = dogBreeds;
    },

    setDogImages(state, dogImages) {
      state.dogImages = dogImages;
    },

    setSubBreedImages(state, subBreedImages) {
      state.subBreedImages = subBreedImages;
    },

    setSubBreeds(state, subBreeds){
      state.subBreeds = subBreeds;
    }
  },
  actions: {
    async fetchDogBreeds(context) {
      const breedsResponse = await axios.get("https://dog.ceo/api/breeds/list");
      const dogBreeds = breedsResponse.data.message;
      context.commit("setDogBreeds", dogBreeds);
    },

    async fetchDogImages(context) {
      await context.dispatch("fetchDogBreeds");
      const dogImagePromises = context.state.dogBreeds.map((breed) =>
        axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
      );

      const settledPromises = await Promise.allSettled(dogImagePromises);
      const dogImages = settledPromises.map(
        (promise) => promise.value.data.message
      );
      context.commit("setDogImages", dogImages);
    },

    async fetchSubBreedImages(context, breed) {
      const breedImages = await axios.get(
        `https://dog.ceo/api/breed/${breed}/images/random/3`
      );
      const subBreedImages = breedImages.data.message;
      context.commit("setSubBreedImages", subBreedImages);
    },

    async fetchSubBreeds(context, breed) {
      const response = await axios.get(
        `https://dog.ceo/api/breed/${breed}/list`
      );
      const subBreeds = response.data.message[breed];
      context.commit("setSubBreeds", subBreeds);
    },
  },
  modules: {},
});
