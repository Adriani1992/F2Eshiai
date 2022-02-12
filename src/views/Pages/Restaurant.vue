<template>
  <div>
    <CategoryItem />
    <v-container fluid v-if="Restaurant.length !== 0">
      <subTitle :title="'符合項目如以下'" />
      <v-row class="intruduce justify-center">
        <IntroduceBox :data="visiblePages" />
      </v-row>
      <v-row class="pagenation-top d-flex justify-center">
        <Pagenation v-model="page" :pageLength="PageLength" :visible="10" />
      </v-row>
    </v-container>
    <v-container fluid v-else>
      <subTitle :title="'台灣的美食你想搜尋哪一個呢？'" />
      <v-row class="justify-center">
        <v-col :cols="12" :md="8" :sm="8" :xs="12">
          <div class="coverwithtext">
            <div class="coverImg">
              <img src="/image/Food01.jpg" />
            </div>
            <div class="covertext">
              <span>走在台灣街頭都是撲鼻而來的香氣，<br /></span>
              <span>想知道哪裡還有令人食指大動的餐廳嗎？<br /></span>
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
  name: "Restaurant",
  components: { Pagenation, IntroduceBox, subTitle, CategoryItem },
  watch: {
    Restaurant: {
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
    Restaurant() {
      let data = cloneDeep(this.$store.state.restaurant);
      if (data !== undefined) {
        data.map((i) => {
          if (i.RestaurantName) {
            this.$set(i, "Name", i.RestaurantName);
            this.$set(i, "ID", i.RestaurantID);
          }
        });
        return data;
      } else {
        return [];
      }
    },
    PageLength() {
      let length = null;
      if (this.Restaurant.length !== 0) {
        length = Math.ceil(this.Restaurant.length / 20);
      }
      return length;
    },
    visiblePages() {
      let data = null;
      if (this.Restaurant.length !== 0 || this.Restaurant !== undefined) {
        data = this.Restaurant.slice((this.page - 1) * 20, this.page * 20);
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
};
</script>

