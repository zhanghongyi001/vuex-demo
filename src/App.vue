<template>
  <div class="App">
    <!-- <keep-alive>

    </keep-alive> -->
    <router-view></router-view>
  </div>
</template>

<script>
import { getQueryString } from './common/common.js'
import { mapActions } from 'vuex'
export default {
  created() {
    this.getUrl()
  },
  methods: {
    ...mapActions(['getUrlpage']),
    getUrl() {
      var myParam = getQueryString(location.href)
      this.getUrlpage(myParam)
    },
  },
}
</script>

<style>
</style>
