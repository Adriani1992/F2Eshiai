<template>
  <div>
    <CategoryItem />
    <v-container fluid v-if="ScenicSpotData.length !== 0">
      <subTitle :title="'符合項目如以下'" />
      <v-row>
        <IntroduceBox :data="visiblePages" />
        <!-- <div class="reuse_box" v-for="item in visiblePages" :key="item.ID">
            <div class="reuse_top" v-if="item.Picture.PictureUrl1">
              <img
                :src="item.Picture.PictureUrl1"
                :alt="item.Picture.PictureDescription1"
              />
            </div>
            <div
              v-else
              class="
                reuse_top
                withoutPicture
                d-flex
                justify-center
                align-center
              "
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
                    <v-icon size="20px" color="#173565">mdi-map-marker</v-icon>
                    <p>{{ maxLength(item.Address, 10) }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div> -->
      </v-row>
      <v-row class="pagenation-top d-flex justify-center">
        <Pagenation v-model="page" :pageLength="PageLength" :visible="10" />
      </v-row>
    </v-container>
    <v-container fluid v-else>
      <subTitle :title="'台灣的景點你想搜尋哪一個呢？'" />
      <v-row class="justify-center">
        <v-col :cols="12" :sm="8" :md="8" :xs="12">
          <div class="coverwithtext">
            <div class="coverImg">
              <img src="/image/building01.jpg" />
            </div>
            <div class="covertext">
              <span>夕陽餘暉中的101令人眩目，<br /></span>
              <span>想知道台灣哪裡還有美麗的地方嗎？<br /></span>
              <span>快利用上面的搜尋區塊搜尋吧！</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import IntroduceBox from "@/components/IntroduceBox";
import CategoryItem from "@/components/CategoryItem";
import subTitle from "@/components/subTitle.vue";
import { cloneDeep } from "lodash";
import Pagenation from "@/components/Pagenation";
export default {
  name: "ScenicSpot",
  components: { Pagenation, IntroduceBox, subTitle, CategoryItem },
  watch: {
    ScenicSpotData: {
      immediate: true,
      deep: true,
      handler(v) {
        if (v) {
          this.page = 1;
        }
        console.log(v);
      },
    },
  },
  computed: {
    ScenicSpotData() {
      let data = cloneDeep(this.$store.state.scenicSpot);
      if (data !== undefined) {
        data.map((i) => {
          if (i.ScenicSpotName) {
            this.$set(i, "Name", i.ScenicSpotName);
            this.$set(i, "ID", i.ScenicSpotID);
          }
        });
        return data;
      } else {
        return [];
      }
    },
    PageLength() {
      let length = null;
      if (this.ScenicSpotData.length !== 0) {
        length = Math.ceil(this.ScenicSpotData.length / 20);
      }
      return length;
    },
    visiblePages() {
      let data = null;
      if (
        this.ScenicSpotData.length !== 0 ||
        this.ScenicSpotData !== undefined
      ) {
        data = this.ScenicSpotData.slice((this.page - 1) * 20, this.page * 20);
      }
      // console.log("data", data);
      return data;
    },
  },
  data() {
    return {
      page: 1,
    };
  },
  methods: {},
};
</script>

