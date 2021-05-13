<template>
  <div>
    <h3>当前最新的count:{{ homeState.count }}</h3>
    <button @click="btnHanderDel">-1</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['homeState']),
  },
  methods: {
    ...mapMutations(['sub']),
    btnHanderDel() {
      this.btnHanderDel()
      // this.sub()
    },
  },
}
</script>

<style>
</style>
