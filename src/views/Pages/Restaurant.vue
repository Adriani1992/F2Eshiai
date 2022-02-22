<template>
  <PageIntro
    :configs="{
      ContentData: Restaurant,
      contentIntro: {
        name: '台灣的美食你想搜尋哪一個呢？',
        content: [
          '走在台灣街頭都是撲鼻而來的香氣，',
          '想知道哪裡還有令人食指大動的餐廳嗎？',
          '快利用上面的搜尋區塊搜尋吧！',
        ],
        imageURL: 'image/Food01.jpg',
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
  },
};
</script>
