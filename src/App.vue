<script>

import axios from 'axios';
import { store } from './data/store';
import ListComponent from './components/ListComponent.vue';
import Loader from './components/partials/Loader.vue';



export default {
  name: 'App',

  components: {
    ListComponent,
    Loader
  },

  data() {
    return {
      isLoaded:false,



    }
  },

  methods: {
    
    getApi() {
      axios.get(store.apiUrl + 'projects')

      .then(results => {
          this.isLoaded = true;
          console.log(results.data.data);
          store.projects = results.data.data;
        })
    }

  },
  mounted () {
    this.getApi();
  }
}

</script>

<template>

  <div class="container">
    <loader v-if="!isLoaded" />
    <ListComponent v-else />
  </div>

</template>

<style lang="scss">

</style>
