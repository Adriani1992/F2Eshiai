<template>
  <div>
    <CategoryItem />
    <v-container fluid v-if="Hotel.length !== 0">
      <subTitle :title="'符合項目如以下'" />
      <v-row>
        <IntroduceBox :data="visiblePages" />
      </v-row>
      <v-row class="pagenation-top d-flex justify-center">
        <Pagenation v-model="page" :pageLength="PageLength" :visible="10" />
      </v-row>
    </v-container>
    <v-container fluid v-else>
      <subTitle :title="'台灣的美食你想搜尋哪一個呢？'" />
      <v-row class="justify-center">
        <v-col :cols="12" :sm="8" :md="8" :xs="12">
          <div class="coverwithtext">
            <div class="coverImg">
              <img src="/image/Hotel01.jpg" />
            </div>
            <div class="covertext">
              <span>在疲憊的一天後好好休息是最理想的，<br /></span>
              <span>想知道台灣有哪些不錯的飯店嗎？<br /></span>
              <span>快利用上面的搜尋區塊搜尋吧！</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <!-- <Pagenation v-model="page" :pageLength="PageLength" :visible="10" /> -->
  </div>
</template>

<script>
import IntroduceBox from "@/components/IntroduceBox";
import CategoryItem from "@/components/CategoryItem";
import subTitle from "@/components/subTitle.vue";
import { cloneDeep } from "lodash";
import Pagenation from "@/components/Pagenation";
export default {
  name: "Hotels",
  components: { Pagenation, IntroduceBox, subTitle, CategoryItem },
  watch: {
    Hotel: {
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
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  computed: {
    Hotel() {
      let data = cloneDeep(this.$store.state.hotels);
      if (data !== undefined) {
        data.map((i) => {
          if (i.HotelName) {
            this.$set(i, "Name", i.HotelName);
            this.$set(i, "ID", i.HotelID);
          }
        });
        // console.log("i wanna check", data);
        return data;
      } else {
        return [];
      }
    },
    PageLength() {
      let length = null;
      // let windowWidth =
      if (this.Hotel.length !== 0) {
        length =
          this.windowSize <= 540
            ? Math.ceil(this.Hotel.length / 5)
            : Math.ceil(this.Hotel.length / 20);
      }
      return length;
    },
    visiblePages() {
      let data = null;
      if (this.Hotel.length !== 0 || this.Hotel !== undefined) {
        data =
          this.windowSize <= 540
            ? this.Hotel.slice((this.page - 1) * 5, this.page * 5)
            : this.Hotel.slice((this.page - 1) * 20, this.page * 20);
      }
      // console.log("data", data);
      return data;
    },
  },
  data() {
    return {
      page: 1,
      windowSize: window.innerWidth,
    };
  },
  methods: {
    onResize() {
      this.windowSize = window.innerWidth;
    },
  },
};
</script>
