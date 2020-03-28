<template>
  <div>
    <Banner />
      <img :src="aboutUsImg" class="aboutus-img">
      <BottomBanner />
  </div>
</template>

<script>
import Banner from './banner';
import BottomBanner from './BottomBanner';
export default {
  name: 'Aboutus',
  components: {
    Banner,
    BottomBanner
  },
  data () {
    return {
      aboutUsImg: 'http://minichoc.cn/US.png'
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
.aboutus-img {
  display: block;
  width: 100%; 
}
</style>
