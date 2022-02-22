<template>
  <v-container fluid class="scenic_section">
    <Dialog v-model="dialog" :maxWidth="1240" :minWidth="280">
      <template #cardText>
        <v-container fluid>
          <v-row class="dialogItem">
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
      </template>
    </Dialog>
    <v-row class="category_reference">
      <div class="fixedContainer">
        <subTitle :title="title" :titleEn="titleEn" />
        <div class="category_content">
          <div class="category_btn_left" @click="handleCategoryBack">
            <v-icon color="#dfe5f0" size="112px">mdi-chevron-left </v-icon>
          </div>
          <div class="category_slip">
            <div
              class="category_total"
              ref="categorycoat"
              :style="{ left: movespace + 'px' }"
            >
              <div
                class="category_box"
                v-for="item in LandingPageData"
                :key="item.ID"
                @click="openDialog(item)"
              >
                <div class="category_top" v-if="item.Picture.PictureUrl1">
                  <img
                    :src="item.Picture.PictureUrl1"
                    :alt="item.Picture.PictureDescription1"
                  />
                </div>
                <div
                  class="
                    category_top
                    withoutPicture
                    d-flex
                    justify-center
                    align-center
                  "
                  v-else
                >
                  No Picture
                </div>
                <div class="category_bottom">
                  <ul>
                    <li>
                      <div class="bottom_title">
                        {{ maxLength(item.Name, 10) }}
                      </div>
                    </li>
                    <li>
                      <div class="d-flex flex-grows">
                        <v-icon size="20px" color="#173565"
                          >mdi-clock-outline</v-icon
                        >
                        <p>{{ maxLength(item.OpenTime, 11) }}</p>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex flex-grows">
                        <v-icon size="20px" color="#173565">mdi-phone</v-icon>
                        <p>{{ item.Phone }}</p>
                      </div>
                    </li>
                    <li>
                      <div class="d-flex flex-grows">
                        <v-icon size="20px" color="#173565"
                          >mdi-map-marker</v-icon
                        >
                        <p>{{ maxLength(item.Address, 10) }}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="category_btn" @click="handleCategory">
            <v-icon color="#dfe5f0" size="112px">mdi-chevron-right </v-icon>
          </div>
        </div>
      </div>
    </v-row>
  </v-container>
</template>

<script>
// import BlueDots from "@/assets/icons/blueDots.svg";
// import Sky from "@/assets/icons/Sky.svg";
import subTitle from "@/components/subTitle.vue";
export default {
  name: "ScenicSpot",
  props: {
    title: {
      type: String,
      default: "名字",
    },
    titleEn: {
      type: String,
      default: "Name",
    },
    data: {
      require: true,
      type: Array,
      default: () => {
        [
          {
            Name: "Adriani",
            OpenTime: "7/24",
            Phone: "09XX-XXX-XXX",
            Address: "Earth",
          },
        ];
      },
    },
  },
  watch: {
    windowSize: {
      immediate: true,
      handler(newv, oldv) {
        console.log("newv", newv, "oldv", oldv);
        if (newv) {
          this.movespace = 0;
        }
      },
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  components: { subTitle },
  computed: {
    LandingPageData() {
      return this.windowSize > 1440 ? this.data : this.data.slice(0, 10);
    },
    movement: {
      get() {
        return this.movespace;
      },
      set(val) {
        this.movespace = val;
      },
    },
  },
  data() {
    return {
      show: false,
      dialog: false,
      movespace: 0,
      dialogitem: {},
      windowSize: window.innerWidth,
    };
  },
  methods: {
    //onResize
    onResize() {
      this.windowSize = window.innerWidth;
    },
    showArrow() {
      this.show = !this.show;
    },
    handleCategory() {
      const _this = this;
      //拿到div的值
      let width = _this.$refs.categorycoat.clientWidth;
      //一次切換一個的話就是除以10
      let calculateX = width / 10;
      //若首頁不是一次切換一個的話（大概顯示兩個）
      //換算要移動多少，先將原本一次切換一個的width找到
      let widthGreaterMore = width - calculateX;
      widthGreaterMore = widthGreaterMore - calculateX;
      //畫面一次顯示兩組
      let widthOne = calculateX * 2;
      //將多餘的移除掉
      let widthTest = width - widthOne;
      widthTest = width - widthOne;
      // //檢調多餘的部分
      console.log("x", widthTest);
      console.log("widthOne", widthOne);

      width = width - calculateX;
      if (this.windowSize < 375) {
        if (this.movespace > -width) {
          this.movespace = (this.movespace -= calculateX).toFixed(1);
        }
      }
      if (this.windowSize >= 375 && this.windowSize <= 625) {
        if (this.movespace > -widthGreaterMore) {
          this.movespace = (this.movespace -= calculateX).toFixed(1);
        }
      }
      if (this.windowSize > 625 && this.windowSize <= 1280) {
        if (this.movespace > -widthTest + calculateX) {
          this.movespace = (this.movespace -= widthOne).toFixed(1);
        }
      }
      if (this.windowSize > 1280 && this.windowSize <= 1920) {
        if (this.movespace > -widthGreaterMore) {
          this.movespace = (this.movespace -= calculateX).toFixed(1);
        }
      }
    },
    handleCategoryBack() {
      const _this = this;
      console.log("moveSpaceA", this.movespace);
      let width = _this.$refs.categorycoat.clientWidth;
      let calculateX = width / 10;
      width = width - calculateX;
      console.log("calculateX", calculateX);
      console.log("width", width);
      this.movespace = Number(this.movespace);
      if (this.windowSize < 375) {
        if (this.movespace > -width) {
          if (this.movespace >= -width) {
            if (this.movespace === 0) {
              return;
            } else {
              this.movespace = (this.movespace += calculateX).toFixed(1);
            }
          }
        }
      }
      if (this.windowSize >= 375 && this.windowSize <= 625) {
        if (this.movespace >= -width) {
          if (this.movespace === 0) {
            return;
          } else {
            this.movespace = (this.movespace += calculateX).toFixed(1);
          }
        }
      }
      if (this.windowSize > 625 && this.windowSize <= 1280) {
        if (this.movespace >= -width) {
          if (this.movespace === 0 || this.movespace > 1) {
            return;
          } else {
            this.movespace = (this.movespace += calculateX).toFixed(1);
          }
        }
      }
      if (this.windowSize > 1280 && this.windowSize <= 1920) {
        if (this.movespace >= -width) {
          if (this.movespace === 0) {
            return;
          } else {
            this.movespace = (this.movespace += calculateX).toFixed(1);
          }
        }
      }
    },
    maxLength(str, length) {
      // console.log(str);
      let adjustLength = null;
      if (str !== undefined) {
        if (str.length > length) {
          adjustLength = str.slice(0, length + 1) + "...";
        } else {
          adjustLength = str;
        }
      }
      return adjustLength;
    },
    openDialog(item) {
      console.log("item", item);
      this.dialogitem = { ...item };
      this.dialog = true;
      this.movespace = 0;
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