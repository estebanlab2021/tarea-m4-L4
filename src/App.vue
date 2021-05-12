<template>
  <!--<img alt="Vue logo" src="./assets/logo.png">-->
  <Cabecera />
  <Ppal />
  <Pie />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Cabecera from '@/components/Cabecera.vue'
import Pie from '@/components/Pie.vue'
import Ppal from '@/components/Ppal.vue'

export default {
  name: 'App',
  components: {
    Cabecera,
    Pie,
    Ppal
  }
}
</script>

<style>

</style>
