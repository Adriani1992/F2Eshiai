<template>
  <footer :class="seasonTopic">
    <v-container fluid>
      <v-row no-gutters>
        <div class="changeTopic">
          <label> 更換主題 </label>
          <v-autocomplete
            v-model="selectSeasonTopic"
            :items="seasons"
            outlined
            solo
            hide-details="auto"
            placeholder="請選擇"
            @input="
              (val) => {
                changeTopic(val);
              }
            "
            :color="selectTopic"
          />
        </div>
      </v-row>
      <v-row class="footer_item d-flex justify-center" no-gutters>
        <div class="footer_word">
          <v-icon color="#fff" size="1rem"> mdi-copyright </v-icon>
          By Adriani 2021
        </div>
      </v-row>
    </v-container>
  </footer>
</template>

<script>
export default {
  computed: {
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
    selectTopic() {
      let checkColor;
      if (this.selectSeasonTopic === "Summer") {
        checkColor = "#00A7BA";
      }
      if (this.selectSeasonTopic === "Spring") {
        checkColor = "#fcc9b9";
      }
      if (this.selectSeasonTopic === "Autumn") {
        checkColor = "#9C2706";
      }
      if (this.selectSeasonTopic === "Winter") {
        checkColor = "#22283B";
      }
      return checkColor;
    },
  },
  data() {
    return {
      selectSeasonTopic: this.$store.state.topic,
      seasons: [
        { text: "春天", value: "Spring" },
        { text: "夏天", value: "Summer" },
        { text: "秋天", value: "Autumn" },
        { text: "冬天", value: "Winter" },
      ],
    };
  },
  methods: {
    changeTopic(val) {
      return this.$store.dispatch("setTopic", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.footer_item {
  height: 73.4px !important;
  @media screen and (max-width: 1280px) {
    align-items: center;
  }
  @media screen and (max-width: 625px) {
    align-items: center;
  }
}
.footer_word {
  font-size: 1rem;
  color: #fff;
}
.changeTopic {
  display: flex;
  label {
    color: #fff;
    margin-right: 1.1vw;
  }
  ::v-deep .v-input__slot {
    min-height: 32px !important;
    height: 32px !important;
    // @media screen and (max-width: 1280px) {
    //   height: 2.22vw !important;
    // }
  }
}
</style>
