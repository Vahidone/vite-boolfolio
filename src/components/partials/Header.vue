<script>
  export default {
    name: 'Header',
    data() {
      return {}
    },
    components:{},
    methods: {},
    mounted() {},
    computed: {}
  }
</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link :to="{name: 'home'}">Home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}">Chi siamo</router-link>
        </li>
        <li>
          <router-link :to="{name: 'blog'}">Blog</router-link>
        </li>
        <li>
          <router-link :to="{name: 'contacts'}">Contatti</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style lang="scss" scoped>
header{
  position: fixed;
  width: 100%;
  text-align: center;
  padding: 20px;
  ul{
    list-style:none;
    li{
      margin: 0 10px;
      display:inline-block;
      a{
        color:white;
        text-decoration: none;
        text-transform:uppercase;
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
}

.router-link-exact-active{
  font-weight: bold;
  color:yellow;
}

</style>