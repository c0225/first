<template>
  <div class="home">
    <button @click="onClick">+1</button>
    <button @click="onold">-1</button>
    <button @click="onclickjian">-N</button>
    <button @click="onAsync">Async</button>
    <button @click="onAsync2">+N Async</button>
    <button @click="subAsync">Async 第二种用法</button>

    <h1>{{ this.$store.state.count }}</h1>
    <h1>{{ count }}</h1>
    <h3>{{ $store.getters.showNum }}</h3>
    <h3>{{ showNum }}</h3>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapMutations(["sub", "sun"]),
    onold() {
      this.sub();
    },
    onClick() {
      this.$store.commit("add", 5);
    },
    onclickjian() {
      this.sun(3);
    },
    // 异步的
    onAsync() {
      this.$store.dispatch("addAsync");
    },
    onAsync2() {
      this.$store.dispatch("addNAsync", 10);
    },
    ...mapActions(["subAsync"]),
    // onAsync3() {
    //   this.subAsync();
    // },
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["showNum"]),
  },
};
</script>
