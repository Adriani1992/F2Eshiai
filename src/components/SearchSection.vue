<template>
  <v-container fluid class="search">
    <v-row>
      <div class="image"></div>
      <div class="image_dots">
        <Dots />
      </div>
      <div class="searchSection">
        <div class="top_title text-center">
          <div class="ch">樂活台灣</div>
          <div class="en">TRAVEL AROUND TAIWAN, HAVE FUN!</div>
        </div>
        <v-form ref="searchForm" v-model="formvalidate">
          <div class="searchArea d-flex mt-8 farAwayBottom">
            <v-row class="mr-2 selectionbar">
              <v-col cols="10" :xs="10" :sm="10" :md="5">
                <v-autocomplete
                  v-model="selectCity"
                  :items="city"
                  outlined
                  solo
                  hide-details="auto"
                  placeholder="依地區"
                  color="#00A7BA"
                />
              </v-col>
              <v-col
                cols="2"
                :xs="2"
                :sm="2"
                :md="2"
                class="location_btn_mobile"
              >
                <div
                  class="location_btn d-flex align-item-center justify-center"
                  @click="gettingData"
                >
                  <v-icon color="#fff" size="24px"> mdi-send </v-icon>
                </div>
              </v-col>
              <v-col cols="12" :xs="12" :sm="12" :md="5">
                <v-autocomplete
                  v-model="selectCategory"
                  :items="category"
                  outlined
                  solo
                  hide-details="auto"
                  placeholder="依類型"
                  color="#00A7BA"
                  :rules="validateRule.categoryRules"
                />
              </v-col>
              <v-col
                cols="12"
                :xs="12"
                :sm="12"
                :md="2"
                class="location_btn_cp"
              >
                <div
                  class="location_btn d-flex align-item-center justify-center"
                  @click="gettingData"
                >
                  <v-icon color="#fff" size="38px"> mdi-send </v-icon>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-form>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import Dots from "@/assets/icons/whiteDots.svg";
import { cityItems, categoryItems, costItems } from "@/utils/data.js";
import relateFunction from "@/utils/relateFunction";
import { cloneDeep } from "lodash";
import axios from "axios";
export default {
  name: "SearchSection",
  components: { Dots },
  data() {
    return {
      category_show: false,
      // selectCity: null,
      // selectCategory: null,
      formvalidate: false,
      initData: [],
    };
  },
  created() {
    // this.gettingRestaurantData();
    // this.gettingScenicSpotData();
  },
  watch: {
    // clearable: {
    //   immediate: true,
    //   deep: true,
    //   handler(v) {
    //     console.log("clearable", v);
    //     if (!v) {
    //       this.selectCity = this.$options.data().selectCity;
    //       this.selectCategory = this.$options.data().selectCity;
    //     }
    //   },
    // },
  },
  computed: {
    category() {
      return categoryItems;
    },
    cost() {
      return costItems;
    },
    city() {
      return cityItems;
    },
    selectCity: {
      get() {
        return this.$store.state.searchitem.selectCity;
      },
      set(val) {
        this.$store.dispatch("SetCity", val);
      },
    },
    selectCategory: {
      get() {
        return this.$store.state.searchitem.selectCategory;
      },
      set(val) {
        this.$store.dispatch("SetCategory", val);
      },
    },
    // clearable() {
    //   return this.$store.state.clearable;
    // },
    validateRule() {
      const categoryRule = (val) => {
        if (val === null) return "類別為必填！";
        return true;
      };
      return {
        categoryRule: categoryRule,
      };
    },
  },
  methods: {
    mysearchbar() {
      console.log("hi");
    },
    async gettingData() {
      const validate = this.$refs.searchForm.validate();
      console.log("validate", validate);
      this.handleReset();
      if (validate) {
        this.$store.dispatch("setClearable", true);
        await axios
          .get(
            `https://ptx.transportdata.tw/MOTC/v2/Tourism/${
              this.selectCategory
            }/${this.selectCity || ""}?$format=JSON`,
            {
              headers: relateFunction.GetAuthorizationHeader(),
            }
          )
          .then((response) => {
            // this.randomSelectNumber = [...response.data];
            // console.log("route", this.$route);
            this.initData = cloneDeep(response.data);
            console.log("exam", this.initData);
            if (this.initData.length !== 0 || this.initData !== undefined) {
              this.dealData();
            }
            // this.selectCity = "";
            // this.selectCost = "";
            // this.selectCategory = "";
            // this.$store.dispatch("setRestaurantData", response.data);
          })
          .catch((err) => {
            console.log("error", err);
          });
        // this.gettingOther();
      }
    },

    dealData() {
      if (this.initData[0].ScenicSpotID) {
        // console.log(true);
        if (this.$route.name === "ScenicSpot") {
          this.$store.dispatch("setScenicData", this.initData);
          return;
        } else {
          // console.log("initData", initData);
          this.$router.push({ name: "ScenicSpot" });
          this.$store.dispatch("setScenicData", this.initData);
        }
      }
      if (this.initData[0].RestaurantID) {
        // console.log(true);
        if (this.$route.name === "Restaurant") {
          this.$store.dispatch("setRestaurant", this.initData);
          return;
        } else {
          this.$router.push({ name: "Restaurant" });
          this.$store.dispatch("setRestaurant", this.initData);
        }
      }
      if (this.initData[0].HotelID) {
        // console.log(true);
        if (this.$route.name === "Hotel") {
          this.$store.dispatch("setHotel", this.initData);
          return;
        } else {
          this.$router.push({ name: "Hotel" });
          this.$store.dispatch("setHotel", this.initData);
        }
      }
      if (this.initData[0].ActivityID) {
        if (this.$route.name === "Activity") {
          this.$store.dispatch("setActivity", this.initData);
          return;
        } else {
          this.$router.push({ name: "Activity" });
          this.$store.dispatch("setActivity", this.initData);
        }
      }
    },
    handleReset() {
      this.$store.dispatch("ResetScenicData");
      this.$store.dispatch("ResetRestaurantData");
      this.$store.dispatch("ResetHotelsData");
      this.$store.dispatch("ResetActivityData");
      this.initData = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  position: relative !important;
}
.image_dots {
  position: absolute;
  margin-left: 0.45rem;
  margin-top: 0.25rem;
}
.searchSection {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .top_title {
    .ch {
      font-size: 75px;
      color: #fff;
    }
    .en {
      font-size: 28px;
      color: #fff;
    }
    @media screen and (max-width: 1280px) {
      .ch {
        font-size: 5.21vw;
      }
      .en {
        font-size: 1.94vw;
      }
    }
    @media screen and (max-width: 625px) {
      .ch {
        font-size: 50px;
      }
      .en {
        font-size: 20px;
      }
    }
  }
  .searchArea {
    margin-top: 3rem;
    @media screen and (min-width: 1440px) and (max-width: 1920px) {
      width: 840px;
      // justify-content: center !important;
    }
    @media screen and (max-width: 820px) {
      width: 90vw;
      // justify-content: center !important;
    }
    @media screen and (max-width: 540px) {
      // width: 90vw;
      // justify-content: center !important;
    }
    input[type="text"] {
      font-size: 21px;
      padding-left: 1rem;
    }
    input:focus {
      outline: none;
    }
    .top_searchbar {
      background-color: #fff;
      height: 60px;
      width: 100%;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }
    .btn,
    .location_btn {
      width: 60px;
      height: 60px;
      background-color: #00a7ba;
      cursor: pointer;
      box-shadow: 1px 1px 3px #333;
      @media screen and (max-width: 959px) {
        width: 60px;
        height: 60px;
      }
      @media screen and (max-width: 625px) {
        width: 40px;
        height: 40px;
      }
    }
    .btn {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
    .location_btn {
      border-radius: 10px;
    }
  }
  .location_btn_mobile {
    display: none;
    @media screen and (max-width: 959px) {
      display: grid;
      justify-content: flex-end;
      .v-icon.v-icon {
        font-size: 24px !important;
      }
    }
  }
  .location_btn_cp {
    .v-icon.v-icon {
      font-size: 36px !important;
    }
    @media screen and (max-width: 959px) {
      display: none;
    }
  }
  //   .farAwayBottom {
  //     margin-bottom: 3.5rem;
  //   }
}
</style>