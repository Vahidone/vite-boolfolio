

<script>
  export default {
    name: 'Navigator',

    props: {
      links: Array
    },


    data() {
      return {}
    },
    
   
    methods: {
      callApi(linkUrl) {
        this.$emit('callApi', linkUrl)
      }
    },

    mounted() {}
  }
</script>


<template>
  <div class="nav-wrapper">

    <button>
      |&lt;
    </button>
   
   <button v-for="link in links" :key="link.label" v-html="link.label" :disabled="link.active || !link.url" @click="callApi(link.url)"></button>

   <button>
      &gt;|
    </button>
  
 </div>
</template>

<style lang="scss" scoped>

.nav-wrapper {
  margin-top: 20px;
  text-align: center;
  button {
    padding: 4px 8px;
    margin: 3px;
  }
}

</style>