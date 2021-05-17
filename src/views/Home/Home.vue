<template>
  <div class="home">
    <van-button type="default">默认按钮1</van-button>
    <van-button type="primary" @click="clickEvent">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <span class="ceshi"></span>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { Button } from 'vant'

export default {
  name: 'Home',
  components: {
    [Button.name]: Button,
  },
  computed: mapState({
    count: 'count', // 第一种写法
    page: function (state) {
      // 用普通函数this指向vue实例,要注意
      return state.index.page
    },
    // 注意下面的写法看起来和上面相同,事实上箭头函数的this指针并没有指向vue实例,因此不要滥用箭头函数
    // from: (state) => this.str + ':' + state.from
    myCmpted: function () {
      // 这里不需要state,测试一下computed的原有用法
      return '测试' + this.str
    },
  }),
  created() {
    this.increment()
  },
  methods: {
    ...mapActions(['incrementData']),
    increment() {
      // this.index
      console.log(this.page, '----- this.index----')
      this.incrementData(this.page)
    },
    clickEvent() {},
  },
}
</script>
