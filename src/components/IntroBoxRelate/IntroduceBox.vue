<template>
  <div>
    <Dialog
      v-model="dialog"
      :width="DialogWidth"
      :maxWidth="DialogWidth"
      :minWidth="280"
    >
      <template #cardText>
        <v-container fluid>
          <v-row class="dialogItem d-flex">
            <v-col :cols="12" :sm="12" :md="7" :xs="12" class="dialogMd">
              <div class="dialogImg" v-if="dialogitem.Picture.PictureUrl1">
                <img
                  :src="dialogitem.Picture.PictureUrl1"
                  :alt="dialogitem.Picture.PictureDescription1"
                />
              </div>
              <div
                v-else
                class="
                  dialogImg
                  withoutPicture
                  d-flex
                  justify-center
                  align-center
                "
                :class="seasonTopic"
              >
                No Picture
              </div>
            </v-col>
            <v-col :cols="12" :sm="12" :md="5" :xs="12">
              <div class="dialogdesc">
                <ul>
                  <li>
                    <div class="dialog_title">
                      {{ dialogitem.Name }}
                    </div>
                  </li>
                  <li>
                    <div class="d-flex flex-grows">
                      <v-icon size="20px" color="#173565"
                        >mdi-clock-outline</v-icon
                      >
                      <p>{{ dialogitem.OpenTime }}</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex flex-grows">
                      <v-icon size="20px" color="#173565">mdi-phone</v-icon>
                      <p>{{ dialogitem.Phone }}</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex flex-grows">
                      <v-icon size="20px" color="#173565"
                        >mdi-map-marker</v-icon
                      >
                      <p>{{ dialogitem.Address }}</p>
                    </div>
                  </li>
                  <li>
                    <div class="d-flex flex-grows">
                      <v-icon size="20px" color="#173565">mdi-car-back</v-icon>
                      <p>{{ dialogitem.MapUrl }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </v-col>
          </v-row>
          <v-row class="dialoglongdesc">
            <v-col :cols="12">
              <div class="long_desc">
                {{ dialogitem.Description }}
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid class="mt-6 dialog_r">
          <v-row>
            <subTitle :title="title[0].text" :titleEn="title[0].value" />
          </v-row>
          <IntroduceBoxWithBtn :dialogData="upData">
            <template #boxContext>
              <div
                class="d-flex reuse_container_dialog"
                ref="reuseBracketTop"
                :style="{ left: moveTop + 'px' }"
              >
                <InsideBox :Data="upData" @clickItem="openDialog" />
              </div>
            </template>
            <template #boxAction>
              <div
                class="r_btn"
                @click="handleMoveTop"
                v-if="upData.length !== 0"
              >
                <v-icon color="#dfe5f0" size="96px">mdi-chevron-right </v-icon>
              </div>
            </template>
          </IntroduceBoxWithBtn>
        </v-container>
        <v-container fluid class="mt-6 dialog_r">
          <v-row>
            <subTitle :title="title[1].text" :titleEn="title[1].value" />
          </v-row>
          <IntroduceBoxWithBtn :dialogData="bottomData">
            <template #boxContext>
              <div
                class="d-flex reuse_container_dialog"
                ref="reuseBracket"
                :style="{ left: moveBottom + 'px' }"
              >
                <InsideBox :Data="bottomData" @clickItem="openDialog" />
              </div>
            </template>
            <template #boxAction>
              <div
                class="r_btn"
                @click="handleMove"
                v-if="bottomData.length !== 0"
              >
                <v-icon color="#dfe5f0" size="96px">mdi-chevron-right </v-icon>
              </div>
            </template>
          </IntroduceBoxWithBtn>
        </v-container>
      </template>
    </Dialog>
    <div class="reuse_container reuse_container_FixedFormat">
      <div
        class="reuse_box"
        v-for="item in data"
        :key="item.ID"
        @click="openDialog(item)"
      >
        <div class="reuse_top" v-if="item.Picture.PictureUrl1">
          <img
            :src="item.Picture.PictureUrl1"
            :alt="item.Picture.PictureDescription1"
          />
        </div>
        <div
          v-else
          class="reuse_top withoutPicture d-flex justify-center align-center"
          :class="seasonTopic"
        >
          No Picture
        </div>
        <div class="reuse_bottom">
          <ul>
            <li>
              <div class="resue_bottom_title">
                {{ maxLength(item.Name, 10) }}
              </div>
            </li>
            <li>
              <div class="d-flex flex-grows">
                <v-icon size="20px" color="#173565">mdi-clock-outline</v-icon>
                <p>{{ maxLength(item.OpenTime, 11) }}</p>
              </div>
            </li>
            <li>
              <div class="d-flex flex-grows">
                <v-icon size="20px" color="#173565">mdi-phone</v-icon>
                <p>{{ maxLength(item.Phone, 15) }}</p>
              </div>
            </li>
            <li>
              <div class="d-flex flex-grows">
                <v-icon size="20px" color="#173565">mdi-map-marker</v-icon>
                <p>{{ maxLength(item.Address, 10) }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cloneDeep } from "lodash";
import axios from "axios";
import relateFunction from "@/utils/relateFunction";
import { categoryItems } from "@/utils/data.js";
import subTitle from "@/components/subTitle.vue";
import IntroduceBoxWithBtn from "@/components/IntroBoxRelate/introduceBoxWithBtn.vue";
import InsideBox from "@/components/IntroBoxRelate/InsideBox.vue";
export default {
  name: "IntroduceBox",
  components: {
    subTitle,
    IntroduceBoxWithBtn,
    InsideBox,
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
    title() {
      let includeWord = this.$route.name;
      // console.log(includeWord);
      let titleBlock = this.shuffleArray(categoryItems);
      titleBlock = titleBlock.filter((i) => {
        return i.value !== includeWord;
      });
      // console.log("titleBlock", titleBlock);
      return titleBlock;
    },
    DialogWidth() {
      return this.windowSize > 1440 ? 1440 : 1240;
    },
    upData() {
      if (this.title[0].value === "Hotel") {
        // console.log("hi");
        return this.relateHotel;
      }
      if (this.title[0].value === "Restaurant") {
        return this.relateFood;
      }
      if (this.title[0].value === "Activity") {
        return this.relateActicity;
      }
      if (this.title[0].value === "ScenicSpot") {
        return this.relateSpot;
      }
      return false;
    },
    bottomData() {
      if (this.title[1].value === "Hotel") {
        return this.relateHotel;
      }
      if (this.title[1].value === "Restaurant") {
        return this.relateFood;
      }
      if (this.title[1].value === "Activity") {
        return this.relateActicity;
      }
      if (this.title[1].value === "ScenicSpot") {
        return this.relateSpot;
      }
      return false;
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
  props: {
    data: {
      require: true,
      type: Array,
    },
  },
  data() {
    return {
      dialog: false,
      dialogitem: {},
      relateActicity: [],
      relateSpot: [],
      relateFood: [],
      relateHotel: [],
      moveTop: 0,
      moveBottom: 0,
      relateData: [],
      windowSize: window.innerWidth,
    };
  },
  methods: {
    examinate(KAS) {
      KAS();
    },
    openDialog(item) {
      // console.log("item", item);
      this.dialogitem = { ...item };
      this.dialog = true;
      this.moveTop = 0;
      this.moveBottom = 0;
      this.gettingOther(item);
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
    async gettingOther(item) {
      await axios
        .all([
          axios.get(
            `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/?$spatialFilter=nearby(${item.Position.PositionLat},${item.Position.PositionLon},300)&$format=JSON`,
            {
              headers: relateFunction.GetAuthorizationHeader(),
            }
          ),
          axios.get(
            `https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/?$spatialFilter=nearby(${item.Position.PositionLat},${item.Position.PositionLon},300)&$format=JSON`,
            {
              headers: relateFunction.GetAuthorizationHeader(),
            }
          ),
          axios.get(
            `https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/?$spatialFilter=nearby(${item.Position.PositionLat},${item.Position.PositionLon},300)&$format=JSON`,
            {
              headers: relateFunction.GetAuthorizationHeader(),
            }
          ),
          axios.get(
            `https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel/?$spatialFilter=nearby(${item.Position.PositionLat},${item.Position.PositionLon},300)&$format=JSON`,
            {
              headers: relateFunction.GetAuthorizationHeader(),
            }
          ),
        ])
        .then(
          axios.spread((data1, data2, data3, data4) => {
            if (data4.data.length !== 0) {
              data4.data.map((i) => {
                if (i.HotelName) {
                  this.$set(i, "Name", i.HotelName);
                  this.$set(i, "ID", i.HotelID);
                }
              });
              this.relateHotel = cloneDeep(data4.data);
            }

            if (data3.data.length !== 0) {
              data3.data.map((i) => {
                if (i.ActivityName) {
                  this.$set(i, "Name", i.ActivityName);
                  this.$set(i, "ID", i.ActivityID);
                }
              });
              this.relateActicity = cloneDeep(data3.data);
            }

            if (data2.data.length !== 0) {
              data2.data.map((i) => {
                if (i.RestaurantName) {
                  this.$set(i, "Name", i.RestaurantName);
                  this.$set(i, "ID", i.RestaurantID);
                }
              });
              this.relateFood = cloneDeep(data2.data);
            }

            if (data1.data.length !== 0) {
              data1.data.map((i) => {
                if (i.ScenicSpotName) {
                  this.$set(i, "Name", i.ScenicSpotName);
                  this.$set(i, "ID", i.ScenicSpotID);
                }
              });
              this.relateSpot = cloneDeep(data1.data);
            }
            // console.log(
            //   "data1",
            //   data1,
            //   "data2",
            //   data2,
            //   "data3",
            //   data3,
            //   "data4",
            //   data4
            // );
          })
        )
        .catch((err) => {
          console.log("error", err);
        });
    },
    shuffleArray(array) {
      let currentIndex = array.length;
      let randomIndex;

      // 若想將剩餘的選項打亂
      while (currentIndex != 0) {
        // 隨機選一個
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        //與現在的項目互相交換位置
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
      return array;
    },
    //Dialog中上面那排移動的按鈕功能
    handleMoveTop() {
      const _this = this;
      let width = _this.$refs.reuseBracketTop.clientWidth;
      //console.log("width", width);
      //拿到不同螢幕大小的vw
      let widthCaculateUnit = this.windowSize / 100;
      //若螢幕小於625那乘以70
      let calculateX = widthCaculateUnit * 70;
      //若螢幕大於625則乘40
      let calculateY = widthCaculateUnit * 40;
      //若一次要移動兩個選項則要減兩倍的calculateY
      let widthTwice = calculateY * 2;
      //若1440~1920的時候
      let widthGreater = 418.05 * this.upData.length;
      let greaterTwice = 418.05 * 2;
      //當視窗小於375
      if (this.windowSize < 375) {
        if (this.moveTop >= -width + calculateX) {
          this.moveTop = (this.moveTop -= calculateX).toFixed(1);
        }
      }
      if (this.windowSize >= 375 && this.windowSize <= 625) {
        if (this.moveTop >= -width + calculateX) {
          this.moveTop = (this.moveTop -= calculateX).toFixed(1);
        }
      }

      if (this.windowSize > 625 && this.windowSize <= 1280) {
        if (this.moveTop >= -width + widthTwice) {
          this.moveTop = (this.moveTop -= calculateY).toFixed(1);
        }
      }

      if (this.windowSize > 1280 && this.windowSize <= 1920) {
        if (this.moveTop >= -widthGreater + greaterTwice) {
          this.moveTop = (this.moveTop -= 418.05).toFixed(1);
        }
      }
    },
    //Dialog中下面那排移動的按鈕功能
    handleMove() {
      const _this = this;
      let width = _this.$refs.reuseBracket.clientWidth;
      let widthCaculateUnit = this.windowSize / 100;
      //若螢幕小於625那乘以70
      let calculateX = widthCaculateUnit * 70;
      //console.log("width", width);
      //若螢幕大於625則乘40
      let calculateY = widthCaculateUnit * 40;
      //若一次要移動兩個選項則要減兩倍的calculateY
      let widthTwice = calculateY * 2;
      //若1440~1920的時候
      let widthGreater = 418.05 * this.bottomData.length;
      let greaterTwice = 418.05 * 2;
      if (this.windowSize < 375) {
        if (this.moveBottom >= -width + calculateX) {
          this.moveBottom = (this.moveBottom -= calculateX).toFixed(1);
        }
      }
      if (this.windowSize >= 375 && this.windowSize <= 625) {
        if (this.moveBottom >= -width + calculateX) {
          this.moveBottom = (this.moveBottom -= calculateX).toFixed(1);
        }
      }

      if (this.windowSize > 625 && this.windowSize < 1440) {
        if (this.moveBottom >= -width + widthTwice) {
          this.moveBottom = (this.moveBottom -= calculateY).toFixed(1);
        }
      }

      if (this.windowSize > 1280 && this.windowSize <= 1920) {
        if (this.moveBottom >= -widthGreater + greaterTwice) {
          this.moveBottom = (this.moveBottom -= 418.05).toFixed(1);
        }
      }
    },
    onResize() {
      this.windowSize = window.innerWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
.reuse_container {
  transition: 1.5s;
}
</style>
