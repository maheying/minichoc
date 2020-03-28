<template>
  <div class="hello">
    <Banner />
    <router-link to="/lookbook">
      <img src="http://minichoc.cn/minichocsy.jpg" class="indexImg">
    </router-link>
    <BottomBanner />
  </div>
</template>

<script>
import Banner from './banner';
import BottomBanner from './BottomBanner';
export default {
  name: 'HelloWorld',
  components: {
    Banner,
    BottomBanner
  },
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
.hello {
  width: 100%;
  height: auto;
  min-height: 100%;
}
.indexImg {
  display: block;
  width: 100%; 
}
</style>
