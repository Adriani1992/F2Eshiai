<template>
  <v-container fluid>
    <v-pagination
      v-model="initPage"
      :class="seasonTopic"
      :total-visible="visible"
      :length="pageLength"
      circle
    ></v-pagination>
  </v-container>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    value: {
      type: Number || String,
      default: 1,
    },
    pageLength: {
      type: Number || String,
      default: 4,
    },
    visible: {
      type: Number || String,
      default: 4,
    },
  },
  computed: {
    initPage: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit("input", val);
      },
    },
    selectSeasonTopic() {
      return this.$store.state.topic;
    },
    seasonTopic() {
      let checkClass;
      if (this.selectSeasonTopic === "Summer") {
        checkClass = { Summer: true };
      }
      if (this.selectSeasonTopic === "Spring") {
        checkClass = { Spring: true };
      }
      if (this.selectSeasonTopic === "Autumn") {
        checkClass = { Autumn: true };
      }
      if (this.selectSeasonTopic === "Winter") {
        checkClass = { Winter: true };
      }
      return checkClass;
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>