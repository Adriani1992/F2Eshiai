<template>
  <PageIntro
    :configs="{
      ContentData: ScenicSpotData,
      contentIntro: {
        name: '台灣的景點你想搜尋哪一個呢？',
        content: [
          '夕陽餘暉中的101令人眩目，',
          '想知道台灣哪裡還有美麗的地方嗎？',
          '快利用上面的搜尋區塊搜尋吧！',
        ],
        imageURL: './image/building01.jpg',
      },
    }"
  >
  </PageIntro>
</template>

<script>
import PageIntro from "@/components/PageIntro";
import { cloneDeep } from "lodash";
export default {
  components: {
    PageIntro,
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
  },
};
</script>
