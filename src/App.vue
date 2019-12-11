<template>
  <div id="app">
    <eheader v-show="$route.name!=='login'"></eheader>
    <enav v-show="$route.name!=='login'"></enav>
    <router-view></router-view>
    
    <efooter v-show="$route.name!=='login'"></efooter>
  </div>
</template>

 <script>
import eheader from './components/eheader.vue'
import enav from './components/enav.vue'
import efooter from './components/efooter.vue'



export default {
  name: 'app',
  components: {
    eheader,
    enav,
    efooter,
  }
}

</script>

<style>

</style>
