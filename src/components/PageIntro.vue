<template>
  <div>
    <CategoryItem />
    <v-container fluid v-if="Content.length !== 0">
      <subTitle :title="'符合項目如以下'" />
      <v-row>
        <IntroduceBox :data="visiblePages" />
      </v-row>
      <v-row class="pagenation-top d-flex justify-center">
        <Pagenation v-model="page" :pageLength="PageLength" :visible="10" />
      </v-row>
    </v-container>
    <v-container fluid v-else>
      <subTitle :title="contenText.name" />
      <v-row class="justify-center">
        <v-col :cols="12" :sm="8" :md="8" :xs="12">
          <div class="coverwithtext">
            <div class="coverImg">
              <img :src="contenText.imageURL" />
            </div>
            <div class="covertext">
              <span v-for="p in contenText.content" :key="p"
                >{{ p }}<br
              /></span>
              <!-- <span>想知道台灣有哪些不錯的飯店嗎？<br /></span>
              <span>快利用上面的搜尋區塊搜尋吧！</span> -->
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import IntroduceBox from "@/components/IntroBoxRelate/IntroduceBox";
import CategoryItem from "@/components/CategoryItem";
import subTitle from "@/components/subTitle.vue";
import { cloneDeep } from "lodash";
import Pagenation from "@/components/Pagenation";
export default {
  name: "Hotels",
  components: { Pagenation, IntroduceBox, subTitle, CategoryItem },
  props: {
    configs: {
      type: Object,
      require: true,
    },
  },
  watch: {
    Content: {
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
    Content() {
      let data = cloneDeep(this.configs.ContentData);
      if (data !== undefined) {
        return data;
      } else {
        return [];
      }
    },
    PageLength() {
      let length = null;
      // let windowWidth =
      if (this.Content.length !== 0) {
        length =
          this.windowSize <= 540
            ? Math.ceil(this.Content.length / 5)
            : Math.ceil(this.Content.length / 20);
      }
      return length;
    },
    visiblePages() {
      let data = null;
      if (this.Content.length !== 0 || this.Content !== undefined) {
        data =
          this.windowSize <= 540
            ? this.Content.slice((this.page - 1) * 5, this.page * 5)
            : this.Content.slice((this.page - 1) * 20, this.page * 20);
      }
      // console.log("data", data);
      return data;
    },
    contenText() {
      let content = Object.assign({}, this.configs.contentIntro);
      return content;
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
