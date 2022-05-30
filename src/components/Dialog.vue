<template>
  <v-dialog v-if="show" content-class="c-dialog" v-model="show">
    <v-card
      class="dialog-card"
      :class="seasonTopic"
      :maxWidth="maxWidth"
      :minWidth="minWidth"
      :width="width"
    >
      <v-card-title class="dialog-card-title" color="transparent">
        <v-spacer></v-spacer>
        <v-btn
          ref="closeBtn"
          class="close-btn"
          icon
          @click="close"
          :class="seasonTopic"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text light class="dialog-card-text">
        <slot name="cardText">
          <v-row>
            <v-col>CONTENT</v-col>
          </v-row>
        </slot>
      </v-card-text>
      <!-- <v-card-actions v-if="hasAction" class="dialog-card-action">
        <slot name="cardAction">
          <v-spacer></v-spacer>
          <v-btn small @click="confirm(true)">確定</v-btn>
          <v-btn small @click="confirm(false)">取消</v-btn>
        </slot>
      </v-card-actions> -->
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Dialog",
  components: {},
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "TITLE",
    },
    maxWidth: {
      type: [String, Number],
      default: undefined,
    },
    minWidth: {
      type: [String, Number],
      default: undefined,
    },
    width: {
      type: [String, Number],
      default: undefined,
    },
    hasAction: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    show: {
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
  methods: {
    confirm(val) {
      this.$emit("confirm", val);
      this.close();
    },
    close() {
      this.show = false;
    },
  },
};
</script>
