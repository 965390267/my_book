<template>
  <div class="mainpage" >
  <top-bar :title='title'></top-bar>


  <div class="book-container">
    <div class="left-nav"><ul>
      <li class="up-bottom-space " v-for='(data,key,index) in type' :key='index'>
        <a v-if="key!='ok'" :class="{bgcolor:iswhite==index}"  @click="lookdetail(data,key,index)">{{data[0].name}} </a>
   
         </li>
      </ul>
      </div>
    <div class="right-container">
  
      <typelist v-for='(detail,key,index) in datalist' :key='index' :datames='detail'></typelist>

    </div>
  </div>
  </div>

</template>

<script>
import typelist from "./typelist";
import TopBar from "../basecomponent/topbar";
import { getAllType } from "../../api/typetxt";
export default {
  components: {
    TopBar,
    typelist
  },
  data() {
    return {
      datames: "",
      title: "分类",
      type: "",
      datalist: "",
    
     iswhite:0
    };
  },
  methods: {

    lookdetail(data, key,index) {

      this.datalist = data;
this.iswhite=index;
    },

    getdata() {
  
      getAllType().then(res => {
        if ((res.data.ok = "true")) {
        
          this.type = res.data;
          this.datalist = this.type["male"];
  
        }
      });
    }
  },
  mounted() {
    this.getdata();
    this.$router.push("/typelist");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.isshow {
  background: #ffd591;
}
.book-container {
  box-sizing: content-box;
}
.left-nav {
  width: 108px;
  float: left;
  margin-bottom: 60px;
  background-color: #f5f5f5;
}
.bgcolor{
   background-color: #fff;
}
.up-bottom-space  a{
  display:block;
  width: 108px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.right-container {
  padding-bottom: 60px;
}
</style>
