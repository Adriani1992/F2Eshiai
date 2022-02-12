<template>
  <v-container fluid>
    <v-pagination
      v-model="initPage"
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
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>