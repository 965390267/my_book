<template>
 
<div>
    <top-bar :title='title'></top-bar>


      <div class="booklist" >
          <book-list v-for='(list,key,index) in typelist' :list=' list' :key='index' @click.native="openbook(list)" ></book-list>
    
    </div>
</div>
</template>
<script>
import {ByCategories} from '../../api/getnovelevery'
import imgsrc from '../../api/base.js'
import TopBar from '../basecomponent/topbar'
import BookList from '../booklist'
export default {
    components:{
TopBar,BookList
    },
  data(){
      return{
imgbg:imgsrc,
typelist:[],
title:''
      }
  },


  methods:{
      openbook(list){
     console.log('list')
     localStorage.setItem('bookdetail',JSON.stringify(list))
this.$router.push({path:'/typeitemdetail',query:{datas:list}})
      },
getTypeList(){
      ByCategories('male','hot',this.title,0,20).then(res=>{
console.log(res.data);
this.typelist=res.data.books;
})
}

  },
  mounted(){
this.title=this.$route.query.name;
this.getTypeList()
  },

}
</script>
<style scoped>



</style>


