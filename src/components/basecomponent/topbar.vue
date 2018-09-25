<template>
<div class="topbar">
  <i class="back" @click="$router.go(-1)"><</i><h2 class="topbar-tit">{{title}}</h2>

</div>
</template>

<script>
export default {
props:['title'],
  data () {
    return {
    
    }
  },
 
  methods: {
  
  },
  created(){
    
  }
}
</script>
<style scoped>
.topbar{
    background-color: #efdbff;
  }
.topbar-tit{
  text-align: center;
  font-weight:normal;
  padding: 5px 0px;
  margin: 0; 
}
.back{
  position: absolute;
  top:10px;
  left: 15px;
  width: 15px;
  height: 25px;
}
</style>
