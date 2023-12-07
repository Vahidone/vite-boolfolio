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
      paginator: {

        links: [],
        firstPageUrl: '',
        lastPageUrl: '',
        currentPage: '',
        lastPage: ''
      }




    }
  },

  methods: {
    
    getApi(endpoint) {
      this.isLoaded = false;
      axios.get(endpoint)

      .then(results => {
          this.isLoaded = true;
          store.projects = results.data.data;
          this.paginator.links = results.data.links;
          this.paginator.firstPageUrl = results.data.first_page_url;
          this.paginator.lastPageUrl = results.data.last_page_url;
          this.paginator.currentPage = results.data.current_Page;
          this.paginator.lastPage = results.data.last_Page;

          
         
          
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
  
      <navigator :paginator="paginator" @callApi="getApi"/>
    </div>

  </div>

</template>

<style lang="scss">

</style>
