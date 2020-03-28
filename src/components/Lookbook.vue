<template>
  <div>
    <Banner />
    <div class="img-box">
      <img src="http://minichoc.cn/look.png">
      <img src="http://minichoc.cn/back.png" class="top-img" @click="topClick">
    </div>
    <BottomBanner />
  </div>
</template>

<script>
import Banner from './banner';
import BottomBanner from './BottomBanner';
const J = window.jQuery;
export default {
  name: 'Lookbook',
  components: {
    Banner,
    BottomBanner
  },
  data () {
    return {}
  },
  beforeMount() {},
  mounted() {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0)
    })
  },
  methods: {
    topClick() {
      J('html , body').animate({scrollTop: 0},'slow');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-box {
  position: relative;
}
img {
  display: block;
  width: 100%; 
}
.top-img {
  width: 60px;
  position: absolute;
  right: 20px;
  bottom: 20px;
}
</style>
