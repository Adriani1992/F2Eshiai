<template>
  <PageIntro
    :configs="{
      ContentData: Activity,
      contentIntro: {
        name: '台灣的活動你想參加哪一個呢？',
        content: [
          '假日走在台灣街頭到處是參加活動的人群，',
          '想知道台灣哪裡有令人興奮的活動嗎？',
          '快利用上面的搜尋區塊搜尋吧！',
        ],
        imageURL: './image/Activity01.jpg',
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
  },
};
</script>
