<template>
  <PageIntro
    :configs="{
      ContentData: Hotel,
      contentIntro: {
        name: '台灣的你想住哪裡呢？',
        content: [
          '在疲憊的一天後好好休息是最理想的，',
          '想知道台灣有哪些不錯的飯店嗎？',
          '快利用上面的搜尋區塊搜尋吧！',
        ],
        imageURL: '/image/Hotel01.jpg',
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
  },
};
</script>
