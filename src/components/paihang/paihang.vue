<template>
  <div >
<top-bar :title='title'></top-bar>
<el-collapse v-model="activeName" accordion>
  <el-collapse-item v-for='(item,key,index) in ranklist' :key='index' class="iconfont" :class="icon[index]"  :title="item[0].title" v-if="key!='ok'" :name="index">
   <ul>
    <li class="top-bottom-space" v-for='(data,key,index) in item' :key='index'>
      <div class="leftspace" @click="openlist(data)">
        <span class="titimg"><img alt="..."  :src="`${baseurl}${data.cover}`"></span>
        <span class="title">{{data.title}}</span>
        </div>
      </li>
</ul>
  </el-collapse-item>

</el-collapse>

  </div>
</template>
<script>
import TopBar from '../basecomponent/topbar'
import{ Rank }from '../../api/rank'
import baseurl from '../../api/base.js'
export default {
    components:{
TopBar
    },
  data(){
      return{
title:'排行',
ranklist:'',
 activeName: '1',
 icon:[' icon-bangdan','icon-resou','icon-popularity_value','icon-popularity_value'],

 baseurl:baseurl
      }
  },
  computed:{

  },
  methods:{
    openlist(objdata){

console.log(objdata)
 localStorage.setItem('paihangsave',JSON.stringify(objdata))
   this.$router.push({path:'/paihanglist',query:{datas:objdata}})
},
    getrank(){
     
     Rank().then(res=>{
console.log(res.data)
this.ranklist=res.data;
// setTimeout(()=>{

// },200)

        })
    }
  },
  mounted(){
this.getrank()
  }
}
</script>
<style scoped>
.top-bottom-space{
  padding: 4px 0;
}
.leftspace{
  padding-left: 10px;
}
.titimg,.title{
  display: inline-block;
      margin-right: 20px;
}
.title{
  vertical-align: top;
}
.titimg img{
  width: 20px;
  height: 20px;
}

</style>


