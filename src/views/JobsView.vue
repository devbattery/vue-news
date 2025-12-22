<template>
  <div>
    <div v-for="job in jobs" :key="job.id">{{ job }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from "@/api";
export default {
  data() {
    return {
      jobs: [],
    };
  },
  created() {
    fetchJobsList()
      .then((response) => (this.jobs = response.data))
      .catch((error) => console.log(error));
  },
};
</script>

<style lang="scss" scoped></style>
