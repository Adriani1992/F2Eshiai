<template>
  <div class="d-flex insideBoxDialog">
    <div
      class="reuse_box_dialog"
      v-for="item in Data"
      :key="item.ID"
      @click="$emit('clickItem', item)"
    >
      <div class="reuse_top_dialog" v-if="item.Picture.PictureUrl1">
        <img
          :src="item.Picture.PictureUrl1"
          :alt="item.Picture.PictureDescription1"
        />
      </div>
      <div
        v-else
        class="
          reuse_top_dialog
          withoutPicture
          d-flex
          justify-center
          align-center
        "
        :class="seasonTopic"
      >
        No Picture
      </div>
      <div class="reuse_bottom_dialog">
        <ul>
          <li>
            <div class="reuse_bottom_title_dialog">
              {{ maxLength(item.Name, 10) }}
            </div>
          </li>
          <li>
            <div class="d-flex flex-grows">
              <v-icon size="20px" color="#173565">mdi-clock-outline</v-icon>
              <p>{{ maxLength(item.OpenTime, 11) }}</p>
            </div>
          </li>
          <li>
            <div class="d-flex flex-grows">
              <v-icon size="20px" color="#173565">mdi-phone</v-icon>
              <p>{{ maxLength(item.Phone, 15) }}</p>
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Data: {
      type: Array,
    },
  },
  computed: {
    selectSeasonTopic() {
      return this.$store.state.topic;
    },
    seasonTopic() {
      let checkClass;
      if (this.selectSeasonTopic === "Summer") {
        checkClass = { Summer: true };
      }
      if (this.selectSeasonTopic === "Spring") {
        checkClass = { Spring: true };
      }
      if (this.selectSeasonTopic === "Autumn") {
        checkClass = { Autumn: true };
      }
      if (this.selectSeasonTopic === "Winter") {
        checkClass = { Winter: true };
      }
      return checkClass;
    },
  },
  methods: {
    maxLength(str, length) {
      // console.log(str);
      let adjustLength = null;
      if (str !== undefined && length) {
        if (str.length > length) {
          adjustLength = str.slice(0, length + 1) + "...";
        } else {
          adjustLength = str;
        }
      }
      return adjustLength;
    },
  },
};
</script>