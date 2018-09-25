<template>
 

   <div class="bgbox"  @click="opentype(datames)"><img class="bgsize" :src='imgurl(datames)'>{{datames.name}}</div>

</template>
<script>
import {ByCategories} from '../../api/getnovelevery'
import imgsrc from '../../api/base.js'
import booklist from '../booklist'
export default {
    components:{
booklist
    },
  data(){
      return{
imgbg:imgsrc,
typelist:[]
      }
  },
  props:['datames'],
  computed:{

  },
  watch:{

  },
  methods:{
      opentype(detail){
               
      this.$router.push({path:'/typedetail',query:{name:detail.name}})
//   ByCategories('male','hot',detail.name,0,20).then(res=>{
// console.log(res.data);
// this.typelist=res.data.books;
// })
},
      imgurl(detail){
          
       let num=  Math.floor(Math.random()* detail.bookCover.length);
             num=num||0;
return this.imgbg+detail.bookCover[num]
      },

  },
  computed:{
// datames(){
// console.log(this.datames)
// }


  }
}
</script>
<style scoped>
.bgbox{
    width: 50%;
   display: inline-block;
}
.bgsize{
    width: 40px;
    height: 60px;
    vertical-align: middle;
    margin: 15px 0;
}

</style>


