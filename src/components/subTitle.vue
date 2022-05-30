<template>
  <div class="category_title d-flex flex-grows align-center">
    <BlueDots v-if="selectSeasonTopic === 'Summer'" />
    <SpringDots v-if="selectSeasonTopic === 'Spring'" />
    <AutumnDots v-if="selectSeasonTopic === 'Autumn'" />
    <WinterDots v-if="selectSeasonTopic === 'Winter'" />
    <Sky class="Sky_Lantern" :class="seasonTopic" />
    <div class="d-flex flex-grows category_subtitle" :class="seasonTopic">
      <div class="ch mx-2">{{ title }}</div>
      <div class="en mx-2">{{ titleEn }}</div>
    </div>
  </div>
</template>

<script>
import BlueDots from "@/assets/icons/blueDots.svg";
import SpringDots from "@/assets/icons/blueDotsSpring.svg";
import AutumnDots from "@/assets/icons/blueDotsAutumn.svg";
import WinterDots from "@/assets/icons/blueDotsWinter.svg";
import Sky from "@/assets/icons/Sky.svg";
export default {
  name: "subTitle",
  components: { BlueDots, Sky, SpringDots, AutumnDots, WinterDots },
  computed: {
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
    // fill: #00a7ba;
    font-size: 3.33vw;
    // @media screen and(max-width:625px) {
    //   font-size: 12px;
    // }
  }
  .Sky_Lantern.Summer {
    fill: #00a7ba;
  }
  .Sky_Lantern.Spring {
    fill: #fcc9b9;
  }
  .Sky_Lantern.Autumn {
    fill: #9c2706;
  }
  .Sky_Lantern.Winter {
    fill: #22283b;
  }
  .category_subtitle {
    font-size: 30px;
    @media screen and(max-width:625px) {
      font-size: 4.25vw;
    }
  }
  .category_subtitle.Summer {
    color: #00a7ba;
  }
  .category_subtitle.Spring {
    color: #fcc9b9;
  }
  .category_subtitle.Autumn {
    color: #9c2706;
  }
  .category_subtitle.Winter {
    color: #22283b;
  }
}
</style>