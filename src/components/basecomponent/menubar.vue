<template>
<mu-paper>
  <mu-bottom-nav :value="bottomNav" @change="handleChange">
    <mu-bottom-nav-item value="main" title="书架" to='/'  class="iconfont icon-shujia"/>
     <mu-bottom-nav-item value="type" title="分类" to='/type' class="iconfont icon-fenlei"/>
    <mu-bottom-nav-item value="paihang" title="排行" to='/paihang' class="iconfont icon-paihangbang"/>
   
    <mu-bottom-nav-item value="person" title="搜索" to='/search' class="iconfont icon-icon-"/>
  </mu-bottom-nav>
</mu-paper>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: 'main'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>

<style>

</style>


