<template>
  <div>
       <!-- <top-bar :title='title'></top-bar> -->
       <div class="search-bar">
           <div class="search bar7">
        <form>
            <input class="input" type="text" placeholder="输入书名" name="crid"  v-model="putvalue" @keyup="handleInput">
            <a class="button"  @click="search"></a>
        </form>
    </div>
       </div>
      <div class="search-box">
  
       <ul>
           <li class="bookname" v-for='(list,index) in dataSource' :key='index' @click="choosename(list)">{{list}}</li>
       </ul>

  </div>
  <div>
      <booklist v-for='(list,index) in datalist' :list='list' :key='index' @click.native="openbook(list)"></booklist>
     
  </div>
  </div>
</template>
<script>
import {AutoComplete,FuzzySearch,HotWords} from '../../api/autocomplete.js'
import TopBar from '../basecomponent/topbar'
import booklist from '../booklist'
export default {
    components:{
booklist,TopBar
    },
  data(){
      return{
          title:'搜索',
putvalue:'',
dataSource:[],
datalist:[],

      }
  },
  methods:{
      openbook(list){
     console.log('list')
     localStorage.setItem('bookdetail',JSON.stringify(list))
this.$router.push({path:'/typeitemdetail',query:{datas:list}})
      },
      choosename(name){
           this.putvalue=name;  
           this.dataSource=[];
      },
      search(){
         this.dataSource=[];   
           
FuzzySearch(this.putvalue).then(res=>{
  
    if(res.data.ok){
                
                  this.datalist =res.data.books;
              }
})

      },
      handlechange(){

      },
      handleInput (val) {
  this.datalist =[]

          AutoComplete(this.putvalue).then(res=>{
              if(res.data.ok){
        
                 
                  this.dataSource =res.data.keywords;
              }
             
          })

    },
    gethotwords(){
        HotWords().then(res=>{

            if(res.data.true){
  this.dataSource=  res.data.searchHotWords;
            }
        
        })
    }
  },
  mounted(){
this.gethotwords()
  }
}
</script>
<style scoped>
.search-bar{
    background-color: #efdbff;
}
.search {
	padding:10px 0;
}
form {
	position:relative;
	width:300px;
	margin:0 auto;
}
.input,.button {
	border:none;
	outline:none;
}
.input {
	width:100%;
	height:42px;
	padding-left:13px;
}
.button {
	height:42px;
	width:42px;
	cursor:pointer;
	position:absolute;
}
.bar7 form {
	height:42px;
}
.bar7 .input {
	width:250px;
	border-radius:42px;
	border:2px solid #324B4E;
	background:#F9F0DA;
	transition:.3s linear;
	float:right;
}
.bar7 .input:focus {
	width:300px;
}
.bar7 .button {
	background:none;
	top:-2px;
	right:20px;
}
.bar7 .button::before{
	content:"Search";
    display: inline-block;
	font-family:FontAwesome;
	color:#324b4e;
    line-height: 42px;
}
.search-box{
        width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
}
.search{
        border: none;
    outline: none;
    border-bottom: 1px solid #ccc;
    /* box-bottom-shadow: 0px 1px 5px rgb(206, 157, 157); */
}
.bookname{
 padding: 8px 0;
    border-bottom: 1px solid #eee;
}
.icon-icon-{
    font-size: 26px;
}
</style>


