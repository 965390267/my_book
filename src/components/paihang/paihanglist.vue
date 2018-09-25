<template>
 
<div>
    <top-bar :title='title'></top-bar>
 <mu-tabs :value="activeTab" @change="choosetype">
    <mu-tab value="week" title="周榜"/>
    <mu-tab value="month" title="月榜"/>
    <mu-tab value="total" title="总榜"/>
  </mu-tabs>

      <div class="bookbox" ref='boxhh'>
          <book-list v-for='(list,key,index) in typelist' :list=' list' :key='index' @click.native="openbook(list)" ></book-list>
    
    </div>
</div>
</template>
<script>
import {GetPaiHangList} from '../../api/getnovelcontent'
import imgsrc from '../../api/base.js'
import TopBar from '../basecomponent/topbar'
import BookList from '../booklist'
export default {
    components:{
TopBar,BookList
    },
  data(){
      return{
          title:'',
 activeTab: 'week',
 typelist:[],
 typeid:'',
 typemonthid:'',
 typetotalid:''
      }
  },


  methods:{
     openbook(list){
     console.log('list')
     localStorage.setItem('bookdetail',JSON.stringify(list))
this.$router.push({path:'/typeitemdetail',query:{datas:list}})
      },
 choosetype (val) {
      this.activeTab = val;
      console.log(val);
      if(val=='month'){
          if(typeof this.typemonthid!='undefined'){
this.getpaihanglist(this.typemonthid) 
          }else{
               this.typelist=[];
             this.$message({
          message: '什么都没有',
          type: 'warning'
        });
          }
            
      }else if(val=='total'){
   if(typeof this.typetotalid!='undefined'){
this.getpaihanglist(this.typetotalid) 
          }else{
               this.typelist=[];
               this.$message({
          message: '什么都没有',
          type: 'warning'
        });
          }
      }else{
       if(typeof this.typeid!='undefined'){
this.getpaihanglist(this.typeid) 
          }else{
               this.typelist=[];
                 this.$message({
          message: '什么都没有',
          type: 'warning'
        });
          }
      }
      
    },
    getpaihanglist(rankid){
        GetPaiHangList(rankid).then(res=>{
             console.log(res.data)
             this.typelist=res.data.ranking.books
        })
    }
  },
  mounted(){
     let winhh=window.innerHeight;
     this.$refs.boxhh.style.height=winhh-130+'px';
     let objecttype = this.$route.query.datas;
    
    let type =Object.prototype.toString.call(objecttype);
    if(type=='[object Object]'){
       this.typeid = this.$route.query.datas._id;
       this.typemonthid= this.$route.query.datas.monthRank;
        this.typetotalid= this.$route.query.datas.totalRank;
       this.title= this.$route.query.datas.shortTitle;
    }else{
        let paihangid=JSON.parse( localStorage.getItem('paihangsave'));
      this.typeid=paihangid._id;
       this.typemonthid= this.$route.query.datas.monthRank;
        this.typetotalid= this.$route.query.datas.totalRank;
        this.title=paihangid.shortTitle;
    }
   console.log(this.typemonthid,this.typetotalid)
     this.getpaihanglist(this.typeid)
  },

}
</script>
<style scoped>

.bookbox{
    overflow-y: auto;
    padding-bottom: 60px;
}
</style>


