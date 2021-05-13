<template>
  <div>
    <h3>当前最新的count:{{ homeState.count }}</h3>
    <button @click="btnHanderAdd">+1</button>
    <button @click="btnHanderAsyncAdd">addAsync+22221</button>
    <!-- {{ showNumber }} -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState(['homeState']),
    // ...mapGetters(['showNumber']),
  },
  methods: {
    ...mapActions(['addAsync', 'incrementData']),

    ...mapMutations(['increment']),
    btnHanderAdd() {
      this.increment(3)
      // this.add()
    },
    btnHanderAsyncAdd() {
      // this.addAsync(3)
      this.incrementData(2)
    },
  },
}
</script>

<style>
</style>
