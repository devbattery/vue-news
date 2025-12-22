<template>
  <div>
    <div v-for="item in ask" :key="item.id">{{ item }}</div>
  </div>
</template>

<script>
import { fetchAskList } from "@/api";
export default {
  data() {
    return {
      ask: [],
    };
  },
  created() {
    fetchAskList()
      .then((response) => {
        this.ask = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped></style>
