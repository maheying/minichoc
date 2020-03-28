<template>
  <div class="banner">
    <div class="index-btn">
      <router-link to="/">
      <img src="http://minichoc.cn/MINI-logo.png">
      </router-link>
    </div>
    <div class="banner-right">
      <router-link to="/lookbook">
        <span class="LOOKBOOK">LOOKBOOK</span>
      </router-link>
      <router-link to="/aboutus">
        <span>ABOUT&nbsp;US</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {

  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  list-style: none;
}
.banner {
  width: 100%;
  height: 100px;
  position: relative;
}
.index-btn {
  color: #000;
  margin: 0 auto;
  padding-top: 10px;
  width: 230px!important;
}
.index-btn > a {
  display: block;
}
.index-btn > a >  img {
  width: 230px;
}
.index-btn:hover {
  cursor:pointer;
}
.banner-right {
  width: 300px;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
}
.banner-right > a > span {
  font-size: 20px;
  font-weight: bold;
  line-height: 100px;
  color: #000;
  font-family: cursive;
}
.banner-right > a > span:hover{
  text-decoration:underline;
  cursor:pointer;
}
.LOOKBOOK {
  margin-right: 50px;
}
</style>
