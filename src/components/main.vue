<template>
<div>
  <top-bar :title='title'></top-bar>
  <div class="bookshelf">
<booklist v-for='( list,index) in booklist'  :list=' list' :key='index' @deletabook='deletabook' @click.native=" openbook(list,$event)">删除本书</booklist>
  </div>
</div>
</template>

<script>

import TopBar from '../components/basecomponent/topbar'
import booklist from '../components/booklist'
import {getAllType} from '../api/typetxt'
export default {
components:{
TopBar,booklist
},
  data () {
    return {
   title:'书架',
  booklist:[],
   isshow:false
    }
  },
  methods:{
    openbook(list,ev){
      console.log(ev.target.tagName)
localStorage.setItem('novellist',JSON.stringify(list))
this.$router.push({path:'/novelcontent',query:{datas:list}})

},

    getbooklistarr(){
      this.booklist=[];
let locallen= localStorage.length;
for(let i=0;i<locallen;i++){
  localStorage.key(i)
   
    let keyname= localStorage.key(i);
      let testlocaldata=localStorage.getItem(keyname);
    // JSON.parse(localStorage.getItem(keyname))
    let reg=/[0-9]{1,25}[a-z]{1,25}/ig;
    if(reg.test(keyname)){
    let localdata=localStorage.getItem(keyname);

    if(localdata.indexOf('{"_id"')>-1){
 let localobj= JSON.parse(localdata);

    this.booklist.push(localobj)
    }

    }


}
    },
    deletabook(){
    
      this.getbooklistarr()
    }
  },
  created(){
    // this.$http.get('/api/ranking/gender').then(res=>{
    //   this.msg=res
    // })
// this.getdata();
this.getbooklistarr()
  
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bookshelf{
  margin-top: 5px ;
  padding-bottom:60px; 
}
</style>
