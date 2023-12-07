<script>
import axios from 'axios';
import { store } from '../data/store';
import Loader from '../components/partials/Loader.vue'

  export default {
    name: 'About',
    data() {
      return {
        project:{},
        isLoaded: false
      }
    },
    components:{
      Loader
    },
    methods: {
      getProject(slug){
        axios.get(store.apiUrl + 'projects/get-project/' + slug )
          .then(res => {
            console.log(res.data.project);
            if(!res.data.success){
              
              this.$router.push({ name: 'error-404' })
            }
            
            this.isLoaded = true;
            this.project = res.data.project;
          })
      }
    },
    mounted() {
      this.getProject(this.$route.params.slug);
    },
    computed: {
      technologiesList(){
        return this.project.technologies?.map(technology => technology.name).join(', ') || 'NO TECHNOLOGY';
      },
      formattedDate(){
        const d = new Date(this.project.date);

        const options = {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }

        return new Intl.DateTimeFormat(navigator.language, options).format(d)
      }
    }
  }
</script>

<template>
  <Loader v-if="!isLoaded" />
  <div v-else>
    <h1>{{ project.title }}</h1>
    <em>{{ formattedDate }}</em>
    <p>Technologia: {{ project.technology?.name || ' NO technology '  }} | technology: {{ technologiesList }}</p>
    <div>FOTO</div>
    <em>Nome Foto</em>
    <p>{{ project.text }}</p>

  </div>
</template>


<style lang="scss" scoped>
em{
  display:inline-block;
}
h1,em,p,div{
  margin-bottom: 10px;
}
</style>