<template>
  <div class="bottom-banner">
    <a target="_blank" href="http://www.beian.miit.gov.cn">©2020 MINICHOC 浙ICP备12034599号-5</a>
  </div>
</template>

<script>
export default {
  name: 'BottomBanner',
  components: {
    // Banner
  },
  data () {
    return {
      // aboutUsImg: 'http://minichoc.cn/US.png'
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
.bottom-banner {
  width: 100%;
  height: 20px;
  background: #fafafa;
  color: #bbbbbb;
  text-align: right;
  font-size: 12px;
  line-height: 20px;
}
a {
  color: #bbbbbb;
  display: inline-block;
  margin-right: 20px;
}
</style>
