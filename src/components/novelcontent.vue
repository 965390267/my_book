<template>
  <div class="novel-position">
    <div class="catalog" v-show='showcontent' ref='catalog'>
    <ul>
      
        <li v-for='(data,index) in nodelist' :class="{bgcolor:isred==index}" :key='index' @click="opencontent(data.link,index)">
         {{data.title}}
        </li>
    </ul>
    </div>

    <div class="footmes"  v-show='isshow' >
    <ul>
        <li @click="toggle">目录</li>
        <li>夜间</li>
        <li>白天</li>
        <li>字体</li>
        <li @click="collection">加入书架</li>
        </ul>    
     </div>
    <div class="bookcontent" ref='novelbox'  @click="opennovelcontent($event)">
        <h4 class="noveltile">{{noveltitle}}</h4>
        <pre class="article">  {{novel}}</pre>
       <!-- <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/> -->
        </div>
        
  </div>
</template>
<script>
import {
  GetCopyRightNavel,
  GetSourceAddress,
  GetNovelContent
} from "../api/getnovelevery.js";

export default {
  data() {
    return {
      bookid: "",
      sourceid: "",
      nodelist: "",
      noveltitle: "",
      novel: "",
      isshow: false,
      showcontent: false,
      open: false,
      docked: true,
      bookindex: 0,
     loading: true,
      scroller: null,
      isred:0
    };
  },
  methods: {
     loadMore () {
       this.loading=false;
     },
    toggle(flag) {
      this.showcontent = !this.showcontent;
      //   this.docked = !this.docked;
      //    this.open = !this.open
      //       this.isshow=false;
      this.$nextTick(()=>{
     let chapterpos=parseInt(localStorage.getItem('chapterpos')) ;
     document.getElementsByClassName('catalog')[0].scrollTop=chapterpos;
    
      })

    },

    opennovelcontent(e) {
    
      this.isshow = !this.isshow;
      if(this.showcontent){
        this.showcontent=false;
      }
    },
    collection() {

       var bookmes = this.$route.query.datas;
     let bookmesid=bookmes._id
let locallen= localStorage.length;
for(let i=0;i<locallen;i++){
 let keyname= localStorage.key(i);

 if(keyname===bookmesid){
    this.$message({
          message: '已经收藏过了',
          type: 'warning'
        });
        
 console.log(keyname,bookmesid)
 }

 
}

      localStorage.setItem(bookmesid, JSON.stringify(bookmes));
      this.$message({
          message: '已成功收藏',
          type: 'success'
        });

     
      // this.bookindex =
      //   Number(localStorage.getItem("bookindex", this.bookindex)) || 0;
      // this.bookindex++;
   
      // localStorage.setItem("bookindex", this.bookindex);
      // this.bookindex = Number(localStorage.getItem("bookindex"));
   
    
    },

    opencontent(novelsrc,index) {
      this.isred=index;
      this.isshow=false;
      console.log(index)
      this.$nextTick(function(){

  let chapterlist= this.$refs.catalog.scrollTop
      localStorage.setItem('chapterpos',chapterlist)
      })
     
     this.$refs.novelbox.scrollTop=0;
     
      GetNovelContent(novelsrc).then(res => {
          
        this.noveltitle = res.data.chapter.title;
        this.novel = res.data.chapter.cpContent;
        this.showcontent = false;
      });
    },
    getdata(book) { 
        
      GetCopyRightNavel(book).then(res => {
        this.sourceid = res.data[0]._id;

        GetSourceAddress(this.sourceid).then(res => {
            
          this.nodelist = res.data.chapters;
       
          this.opencontent(this.nodelist[0].link);
        });
      });
    }
  },
  computed: {},
  mounted() {
     this.scroller = this.$refs.novelbox;
     let winhh=window.innerHeight;
     this.$refs.novelbox.style.height=winhh-60+'px';
    if(typeof (this.$route.query.datas._id)!='undefined'){
  this.bookid = this.$route.query.datas._id;
    }else{
   var datas=  localStorage.getItem('novellist');
     var objdatas= JSON.parse(datas);
       this.bookid = objdatas._id;
       console.log(this.bookid)
    }
  
//接收到一本小说的json信息之后通过路由传值到该组件进行处理然后显示，datas代表单本小说对象
    console.log(this.bookid);
    this.getdata(this.bookid);

    //
  }
};
</script>

<style scoped>
.catalog {
position: fixed;
  
  background-color: rgba(0, 0, 0, 0.8);
  height: 86%; 
  overflow: auto;
  width: 240px;
  /* transition: all 1s ease-in-out; */
}
.catalog li{
  color:#fff7e6;
  padding: 5px 20px;
}
.bgcolor{
  color: rgb(190, 38, 38)!important;
}
.novel-position {
  position: relative;
}
.footmes {
  position: fixed;
  bottom: 60px;
  left: 0px;
  width: 100%;

  transition: all 1.5s;
}
.footmes ul {
  padding: 10px 0;
  background-color: rgba(0, 0, 0, 0.7);
}
.footmes li {
  display: inline-block;
  width: 19%;
  color: #fff;
  text-align: center;
}
.bookcontent {
  /* position: fixed;
  top: 0px;
  left: 0px; */
  width: 100%;
color:#000;
  overflow: auto;
  padding: 0 16px;
  /* z-index: -5; */
  line-height: 26px;
  font-size: 18px;
  background-color: #fff7e6;
}
.noveltile {
  text-align: center;
  padding: 10px 0;
}
</style>


