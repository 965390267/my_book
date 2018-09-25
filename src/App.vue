<template>
  <div id="app">
  
  <router-view/>
    <menu-bar></menu-bar>
  </div>
</template>

<script>
import MenuBar from './components/basecomponent/menubar'
export default {
   components:{
MenuBar
},
 data(){
   return{

   }
 },

}
</script>

<style>
#app {
 
   color: #2c3e50;
}
</style>
