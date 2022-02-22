<template>
  <div class="category_title d-flex flex-grows align-center">
    <BlueDots />
    <Sky class="Sky_Lantern" />
    <div class="d-flex flex-grows category_subtitle">
      <div class="ch mx-2">{{ title }}</div>
      <div class="en mx-2">{{ titleEn }}</div>
    </div>
  </div>
</template>

<script>
import BlueDots from "@/assets/icons/blueDots.svg";
import Sky from "@/assets/icons/Sky.svg";
export default {
  name: "subTitle",
  components: { BlueDots, Sky },
  props: {
    title: {
      type: String,
      default: "名字",
    },
    titleEn: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.category_title {
  margin-left: 4rem;
  @media screen and(max-width:625px) {
    margin-left: 8.53vw;
  }
  .Sky_Lantern {
    fill: #00a7ba;
    font-size: 3.33vw;
    // @media screen and(max-width:625px) {
    //   font-size: 12px;
    // }
  }
  .category_subtitle {
    font-size: 30px;
    color: #00a7ba;
    @media screen and(max-width:625px) {
      font-size: 4.25vw;
    }
  }
}
</style>