<script>

import axios from 'axios';
import { store } from './data/store';
import ListComponent from './components/ListComponent.vue';



export default {
  name: 'App',

  components: {
    ListComponent
  },

  data() {
    return {



    }
  },

  methods: {
    
    getApi() {
      axios.get(store.apiUrl + 'projects')

      .then(results => {
          console.log(results.data);
          store.projects = results.data;
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
    <ListComponent />
  </div>

</template>

<style lang="scss">

</style>
