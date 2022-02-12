<template>
  <i class="v-icon" v-on="$listeners">
    <svg :class="iconClass" aria-hidden="true">
      <use :xlink:href="iconName" />
    </svg>
  </i>
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    classList: [Array, String],
    icon: {
      type: String,
      default: "",
    },
    append: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconClass() {
      if (typeof this.classList === "string") {
        return `app-svg-icon ${this.classList}`;
      } else if (Array.isArray(this.classList)) {
        return ["app-svg-icon", ...this.classList];
      } else {
        return "app-svg-icon";
      }
    },
    iconName() {
      return `#icon-${this.icon}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.app-svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
}
.app-svg-icon-text {
  font-size: 1rem;
  cursor: default;
}
</style>