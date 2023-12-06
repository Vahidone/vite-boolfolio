<script>

import axios from 'axios';
import { store } from './data/store';
import ListComponent from './components/ListComponent.vue';
import Loader from './components/partials/Loader.vue';
import Navigator from './components/Navigator.vue';



export default {
  name: 'App',

  components: {
    ListComponent,
    Loader,
    Navigator
  },

  data() {
    return {
      isLoaded:false,
      links: []



    }
  },

  methods: {
    
    getApi(endpoint) {
      this.isLoaded = false;
      axios.get(endpoint)

      .then(results => {
          this.isLoaded = true;
          store.projects = results.data.data;
          this.links = results.data.links;
         
          
        })
    }

  },
  mounted () {
    this.getApi(store.apiUrl + 'projects');
  }
}

</script>

<template>

  <div class="container">
    <loader v-if="!isLoaded" />

    <div v-else>

      <ListComponent />
  
      <navigator :links="links" @callApi="getApi"/>
    </div>

  </div>

</template>

<style lang="scss">

</style>
