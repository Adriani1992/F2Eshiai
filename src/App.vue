<template>
  <v-app>
    <Navbar />
    <SearchSection />
    <v-main>
      <router-view />
    </v-main>
    <div class="circle" @click="suspectHeight">
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
  background-color: #00a7ba;
  @media screen and (max-width: 540px) {
    width: 28px;
    height: 28px;
  }
  cursor: pointer;
  .up {
    .v-icon.v-icon {
      font-size: 28px !important;
      color: #fff;
      @media screen and (max-width: 540px) {
        font-size: 10px !important;
      }
    }
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    @media screen and (max-width: 540px) {
      font-size: 10px;
    }
  }
}
</style>