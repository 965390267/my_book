<template>
      <ul class="booklist" >
     <li class="oneBook" >
				
			            <img :alt="list.title" class="book_cover" :src="`${baseurl}${list.cover}`">
			            <h2 class="book_title">{{list.title}}</h2>
			            <p class="author">{{list.author}}</p>
			            <p class="book_summary">{{list.shortIntro}}</p>
			            <div class="book_price">
			            	
				                <div>{{list.lastChapter}}</div>
			                
			                
			                
			                    <!-- <span class="book_currentPrice">免费</span>  -->
			                
			            </div>
			            
			           <div class='free-download' @click.stop="deletebook(list._id)"> <slot ></slot></div>

			            
		        
		    	</li>
    </ul>
</template>
<script>
import baseurl from '../api/base.js'
import{ GetEveryNavel} from '../api/getnovelevery.js'
export default {
    props:['list'],
  data(){
      return{
baseurl:baseurl,
bookid:''
      }
  },
  methods:{
deletebook(id){
    localStorage.removeItem(id);
    // this.$router.go(0)
    this.$emit('deletabook')
}
  },
  mounted(){

  }
}
</script>

<style scoped>
.booklist{
    padding-left: 0px;
}
.oneBook {
    background: #fff7e6;
    border-bottom: #d5d6d3 1px solid;
    padding: 10px 10px 10px 97px;
    position: relative;
    min-height: 110px;
}
.oneBook .book_cover {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 73px;
    height: 93px;
    border-bottom: 2px #b5aeac solid;
    border-radius: 5px;
}
.oneBook .book_title {
    height: 20px;
    line-height: 20px;
    font-size: 17px;
    overflow: hidden;
    color: #6c6c6c;
}
.oneBook .author {
    height: 18px;
    line-height: 18px;
    overflow: hidden;
    font-size: 12px;
    color: #838383;
}
.oneBook .book_summary {
    margin: 2px 0;
    height: 36px;
    line-height: 18px;
    overflow: hidden;
    font-size: 13px;
    color: #838383;
}

.free-download {
    position: absolute;
    right: 10px;
    bottom: 10px;
   
    line-height: 20px;
    text-align: center;
  
    border-radius: 2px;
    font-size: 13px;
    background:    #efdbff;
    color: #531dab;
    box-sizing: border-box;
}
</style>

