<template>
  <div class="dialogBox">
    <div
      class="reuseCoat"
      :style="{ width: dialogItemWidth * dialogData.length + 'px' }"
    >
      <slot name="boxContext"> </slot>
    </div>
    <slot name="boxAction">
      <div class="r_btn" @click="handleV">
        <v-icon color="#dfe5f0" size="112px">mdi-chevron-right </v-icon>
      </div>
    </slot>
  </div>
</template>

<script>
// import InsideBox from "@/components/InsideBox.vue";
export default {
  // components: { InsideBox },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
    content() {
      return this.data;
    },
    dialogItemWidth() {
      let d_width = null;
      d_width = this.windowSize <= 540 ? 272 : 457;
      return d_width;
    },
  },
  props: {
    dialogData: {
      type: Array,
    },
  },
  data() {
    return {
      lengthspace: null,
      movespace: 0,
      windowSize: window.innerWidth,
    };
  },
  methods: {
    onResize() {
      this.windowSize = window.innerWidth;
    },
    maxLength(str, length) {
      // console.log(str);
      let adjustLength = null;
      if (str !== undefined && length) {
        if (str.length > length) {
          adjustLength = str.slice(0, length + 1) + "...";
        } else {
          adjustLength = str;
        }
      }
      return adjustLength;
    },
    handleV() {
      const _this = this;
      let width = _this.$refs.reuseBracketTop.clientWidth;
      console.log("width", width);
      if (this.movespace > -width + 1675) {
        this.movespace -= 850;
        console.log("movespace", this.movespace);
      }
    },
  },
};
</script>

