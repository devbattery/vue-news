<template>
  <div>
    <user-profile></user-profile>
    <!-- <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>created: {{ userInfo.created }}</p> -->
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
  computed: {
    userInfo() {
      return this.$store.state.user;
    },
  },
  created() {
    console.log(this.$route.params.id);
    const username = this.$route.params.id;
    // axios.get(`https://api.hnpwa.com/v0/user/${userName}.json`);
    this.$store.dispatch("FETCH_USER", username);
  },
};
</script>

<style lang="scss" scoped></style>
