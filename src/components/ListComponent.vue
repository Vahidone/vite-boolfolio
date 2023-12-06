
<script>

import { store } from '../data/store';

  export default {
    name: 'ListComponent',
    data() {
      return {
        title: 'Projects List',
        store
      }
    },
    computed: {},
    mounted() {},
    methods: {}
  }
</script>

<template>
 
  <h1>{{ title }}</h1>

  <ul>
    <li v-for="project in store.projects" :key="project.id">
      <p>{{ project.title }}</p>
    </li>

  </ul>
  
</template>



<style lang="scss" scoped>

</style>