<template>
  <div>
    <p v-for="item in askItems" :key="item.id">
      <!-- <a :href="item.url">{{ item.title }}</a> -->
      <router-link :to="`item/${item.id}`">{{ item.title }}</router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // 3
    ...mapGetters({
      askItems: "fetchedAsk",
    }),

    // ...mapGetters(["fetchedAsk"]),

    // #2
    // ...mapState({
    //   ask: (state) => state.ask,
    // }),

    // #1
    // ask() {
    //   return this.$store.state.ask;
    // },
  },
  created() {
    this.$store.dispatch("FETCH_ASK");
  },
};
</script>

<style lang="scss" scoped></style>
