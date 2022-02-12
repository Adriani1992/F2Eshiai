<template>
  <div>
    <CategoryItem />
    <v-container fluid v-if="Activity.length !== 0">
      <subTitle :title="'符合項目如以下'" />
      <v-row>
        <IntroduceBox :data="visiblePages" />
      </v-row>
      <v-row class="pagenation-top d-flex justify-center">
        <Pagenation v-model="page" :pageLength="PageLength" :visible="10" />
      </v-row>
    </v-container>
    <v-container fluid v-else>
      <subTitle :title="'台灣的活動你想參加哪一個呢？'" />
      <v-row class="justify-center">
        <v-col :cols="12" :sm="8" :md="8" :xs="12">
          <div class="coverwithtext">
            <div class="coverImg">
              <img src="/image/Activity01.jpg" />
            </div>
            <div class="covertext">
              <span>假日走在台灣街頭到處是參加活動的人群，<br /></span>
              <span>想知道台灣哪裡有令人興奮的活動嗎？<br /></span>
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
  name: "Activity",
  components: { Pagenation, IntroduceBox, subTitle, CategoryItem },
  watch: {
    Activity: {
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
    Activity() {
      let data = cloneDeep(this.$store.state.activity);
      if (data !== undefined) {
        data.map((i) => {
          if (i.ActivityName) {
            this.$set(i, "Name", i.ActivityName);
            this.$set(i, "ID", i.ActivityID);
          }
        });
        return data;
      } else {
        return [];
      }
    },
    PageLength() {
      let length = null;
      if (this.Activity.length !== 0) {
        length = Math.ceil(this.Activity.length / 20);
      }
      return length;
    },
    visiblePages() {
      let data = null;
      if (this.Activity.length !== 0 || this.Activity !== undefined) {
        data = this.Activity.slice((this.page - 1) * 20, this.page * 20);
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
