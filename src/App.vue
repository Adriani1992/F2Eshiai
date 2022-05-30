<template>
  <v-app>
    <Navbar />
    <SearchSection />
    <v-main>
      <router-view />
    </v-main>
    <div class="circle" @click="suspectHeight" :class="seasonTopic">
      <div class="up text-center d-flex flex-column justify-center">
        <v-icon>mdi-chevron-up</v-icon>
        UP
      </div>
    </div>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import SearchSection from "@/components/SearchSection";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: { Navbar, Footer, SearchSection },
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
  data: () => ({
    //
  }),
  methods: {
    suspectHeight() {
      window.scrollTo(0, 0);
      console.log(window.scrollY);
    },
  },
};
</script>
<style lang="scss">
.circle {
  width: 80px;
  height: 80px;
  border-radius: 50%;

  @media screen and (max-width: 1280px) {
    width: 5.55vw;
    height: 5.55vw;
  }
  @media screen and (max-width: 625px) {
    width: 28px;
    height: 28px;
  }
  cursor: pointer;
  .up {
    .v-icon.v-icon {
      font-size: 28px !important;
      color: #fff;
      @media screen and (max-width: 1280px) {
        font-size: 1.94vw !important;
      }
      @media screen and (max-width: 625px) {
        font-size: 10px !important;
      }
    }
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    @media screen and (max-width: 1280px) {
      font-size: 1.94vw;
    }
    @media screen and (max-width: 625px) {
      font-size: 12px;
    }
  }
}
.circle.Summer {
  background-color: #00a7ba;
}
.circle.Spring {
  background-color: #fcc9b9;
}

.circle.Autumn {
  background-color: #9c2706;
}

.circle.Winter {
  background-color: #22283b;
}
</style>