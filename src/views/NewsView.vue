<template>
  <div>
    <p v-for="item in this.$store.state.news" :key="item.id">
      <a :href="item.url">{{ item.title }}</a>
      <small
        >{{ item.time_ago }} by
        <router-link :to="`/user/${item.user}`">{{
          item.user
        }}</router-link></small
      >
    </p>
  </div>
</template>

<script>
// import { fetchNewsList } from "@/api";
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS");
    // fetchNewsList()
    //   .then((response) => {
    //     this.users = response.data;
    //   })
    //   .catch((error) => console.log(error));
  },
};
</script>

<style lang="scss" scoped></style>
