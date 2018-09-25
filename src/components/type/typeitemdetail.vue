<template>
  <div>
    <top-bar :title='title'></top-bar>
<div class="book-detail clearfix">
  <img :src="`${coverbg}${bookdetail.cover}`" :alt="bookdetail.title" class="cover">
 <div class="desc">
  
    <h1>{{bookdetail.title}}</h1>
     <p class="sku"><span class="c-red">{{bookdetail.author}}</span><i>|</i> <span>{{bookdetail.minorCate}}</span><i>|</i> <span>396万字</span></p> 
     <p class="update">{{bookdetail.lastChapter}}</p>
     </div>
     </div>

     <div class="reader-data">
       <p class="item">
         <span class="key">追人气</span> 
         <span>
                      {{hot_people}}
                    </span>
        </p>
         <p class="item"><span class="key">读者留存率</span> <span>{{keep_alive}}</span></p> 
         <p class="item"><span class="key">最新章节</span> <span id="key-chapter">{{bookdetail.lastChapter}}</span></p>
         </div>
         <div class="short-mes">
           <p class="short-des">
            {{bookdetail.shortIntro}}
           </p>
         </div>
         <div class="tolook-btn">
            <mu-flat-button label="开始阅读" @click="openbook(bookdetail)" class="demo-flat-button"/>
         </div>
  </div>
</template>

<script>
import imgsrc from '../../api/base.js'
import TopBar from '../basecomponent/topbar'
export default {
    components:{
TopBar
    },
  data() {
    return {
      bookdetail: {},
      coverbg:imgsrc,
      title:'书籍详情'
    };
  },
  computed:{
hot_people(){
   let hot=`${ (this.bookdetail.latelyFollower/10000).toFixed(1)}万`
  return hot
},
keep_alive(){
  let keep=`${this.bookdetail.retentionRatio}%`
  return keep;
}
  },
  methods: {

        openbook(list){

this.$router.push({path:'/novelcontent',query:{datas:list}})

},
  },
  mounted() {
   
    let objecttype = this.$route.query.datas;
    
    let type =Object.prototype.toString.call(objecttype);
    if(type=='[object Object]'){
       this.bookdetail = this.$route.query.datas;
    }else{
      this.bookdetail=JSON.parse( localStorage.getItem('bookdetail'));
    }
  }
};
</script>

<style scoped>
 .book-detail {
    padding:20px 0 40px 40px;
    background: #fff;
    border-bottom: 1px solid #ebebeb;
}
.book-detail .cover{
     float: left;
     width: 73px;
    height: 93px;
    border-bottom: 2px #b5aeac solid;
    border-radius: 5px;
}
.desc{
  margin-left: 80px;
}
.desc h1{
  font-weight: normal;
  font-size: 16px;
}
.sku{
  height: 30px;
}
.sku span{
  margin: 0 5px;
}
.sku .c-red{
  margin-left: 0;
  color:rgb(199, 70, 61);
}
 .reader-data {
    padding: .53333rem 0;
    border-bottom: 1px solid #ebebeb;
    font-size: 0;
    background: #fff;
}
 .reader-data .item {
    display: inline-block;
    vertical-align: middle;
    width: 33%;
    text-align: center;
}
 .reader-data .item span:first-child {
    font-size: 12px;
}
.reader-data .item span:last-child {
    margin-top: .13333rem;
    font-size: 16px;
}

.reader-data .item span {
    display: block;
    line-height:21px;
}
.short-mes{
  margin-top: 20px;
}
.short-des{
  width: 90%;
  margin: 0 auto;
  text-indent: 2rem;
  text-justify: auto;
}
#key-chapter{
  font-size: 12px;
}
.tolook-btn{
  text-align: center;
  margin-top: 40px;
}
</style>


