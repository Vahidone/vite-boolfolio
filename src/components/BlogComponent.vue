<script>
import { store } from '../data/store';

  export default {
    name: 'BlogComponent',
    data() {
      return {
        store
      }
    },
    components:{},
    methods: {},
    mounted() {},
    computed: {}  
  }
</script>

<template>
  
  <ul>
    <li v-for="project in store.projects" :key="project.id" >
      <router-link :to="{name: 'projectDetail', params:{slug: project.slug}}"  class="title">{{ project.title }}</router-link>
      <div>
        <em>{{ project.technology?.name }}</em>
        <strong v-for="technology in project.technologies" :key="technology.id" >{{ technology.name }}</strong>
      </div>
    </li>
  </ul>
</template>


<style lang="scss" scoped>

ul{
  list-style:none;
  .title, em, strong{
    margin-right: 10px;
  }
  li{
    margin-bottom:5px;
    display:flex;
    justify-content:space-between;
    a{
        color:white;
        text-decoration: none;
        &.active{
          font-weight: bold;
          color:yellow;
        }
        &:hover{
          text-decoration:underline;
        }
      }
  }
}
</style>