<template>
  <div class="App">
    <!-- <my-addition></my-addition>
    <p>1111111--------------------------2------------</p>
    <my-subtraction></my-subtraction> -->
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Addition from './components/Addition'
import subtraction from './components/subtraction'

export default {
  components: {
    'my-addition': Addition,
    'my-subtraction': subtraction,
  },
  created() {
    this.getUrl()
  },
  methods: {
    ...mapActions(['getUrlpage']),
    getUrl() {
      const { query } = this.$route
      this.getUrlpage(query)
    },
  },
}
</script>

<style>
</style>
