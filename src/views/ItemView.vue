<template>
  <div>
    <p>{{ this.$store.state.item.title }}</p>
    <div>
      {{ this.$store.state.item.content }}
    </div>
  </div>
</template>

<script>
export default {
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>

<style lang="scss" scoped></style>
