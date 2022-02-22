<template>
  <div>
    <!-- <SearchSection /> -->
    <CategoryItem />
    <LandingPage
      :title="'景點'"
      :titleEn="'Scenic Spot'"
      :data="ScenicSpotData"
    />
    <LandingPage
      :title="'美食'"
      :titleEn="'Restaurant'"
      :data="restaurantData"
    />
  </div>
</template>

<script>
//import SearchSection from "@/components/SearchSection";
import { cityItems } from "@/utils/data.js";
import CategoryItem from "@/components/CategoryItem";
import LandingPage from "@/components/LandingPage.vue";
import relateFunction from "@/utils/relateFunction";
import axios from "axios";

export default {
  name: "Home",
  components: { CategoryItem, LandingPage },
  data() {
    return {
      show: false,
      movespace: 0,
    };
  },
  created() {
    this.gettingRestaurantData();
    this.gettingScenicSpotData();
  },
  computed: {
    restaurantData() {
      let data = [...this.$store.state.restaurantData];
      data.map((i) => {
        if (i.RestaurantName) {
          this.$set(i, "Name", i.RestaurantName);
          this.$set(i, "ID", i.RestaurantID);
        }
      });
      console.log("data", data);
      return this.$store.state.restaurantData;
    },
    ScenicSpotData() {
      let data = [...this.$store.state.scenicData];
      data.map((i) => {
        if (i.ScenicSpotName) {
          this.$set(i, "Name", i.ScenicSpotName);
          this.$set(i, "ID", i.ScenicSpotID);
        }
      });
      return this.$store.state.scenicData;
    },
    randomNum() {
      return Math.floor(Math.random() * this.cityItems.length + 1);
    },
    cityItems() {
      return cityItems;
    },
  },
  methods: {
    showArrow() {
      this.show = !this.show;
    },
    handleCategory() {
      const _this = this;
      let width = _this.$refs.categorycoat.clientWidth;
      console.log(width);
      console.log("moveSpace", this.movespace);
      if (this.movespace > -width + 1152) {
        this.movespace -= 1152;
      }
    },
    async gettingRestaurantData() {
      await axios
        .get(
          `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/${
            this.cityItems[this.randomNum].value
          }?$top=12&$format=JSON`,
          {
            headers: relateFunction.GetAuthorizationHeader(),
          }
        )
        .then((response) => {
          // this.randomSelectNumber = [...response.data];
          console.log(response.data);
          this.$store.dispatch("setRestaurantData", response.data);
        })
        .catch((err) => {
          console.log("error", err);
        });
    },
    async gettingScenicSpotData() {
      await axios
        .get(
          `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${
            this.cityItems[this.randomNum].value
          }?$top=12&$format=JSON`,
          {
            headers: relateFunction.GetAuthorizationHeader(),
          }
        )
        .then((response) => {
          // this.randomSelectNumber = [...response.data];
          console.log(response.data);
          if (response.data.length !== 0) {
            this.$store.dispatch("setScenicSpotData", response.data);
          } else {
            return;
          }
        })
        .catch((err) => {
          console.log("error", err);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.scenic_section {
  // margin-top: 206px;
  .category_title {
    margin-left: 4rem;
    .Sky_Lantern {
      fill: #00a7ba;
      font-size: 48px;
    }
    .category_subtitle {
      font-size: 30px;
      color: #00a7ba;
    }
  }
}
</style>
