<template>
  <nav class="navbar" app>
    <div class="websiteName" @click="directHome">
      <div v-if="selectSeasonTopic === 'Summer'">
        <Whale class="logo" />
      </div>
      <div v-if="selectSeasonTopic === 'Spring'">
        <WhaleSpring class="logo" />
      </div>
      <div v-if="selectSeasonTopic === 'Autumn'">
        <WhaleAutumn class="logo" />
      </div>
      <div v-if="selectSeasonTopic === 'Winter'">
        <WhaleWinter class="logo" />
      </div>
      <div class="logoName" :class="seasonTopic">樂活台灣</div>
    </div>
    <div class="menuItem d-flex flex-grows">
      <div v-if="selectSeasonTopic === 'Summer'">
        <Dots class="dots" />
      </div>
      <div v-if="selectSeasonTopic === 'Spring'">
        <DotsSpring class="dots" />
      </div>
      <div v-if="selectSeasonTopic === 'Autumn'">
        <DotsAutumn class="dots" />
      </div>
      <div v-if="selectSeasonTopic === 'Winter'">
        <DotsWinter class="dots" />
      </div>
      <div class="linkItems">
        <router-link
          v-for="item in items"
          :key="item.en"
          :to="{ name: item.link }"
        >
          <div class="navbarItem text-center" :class="seasonTopic">
            <div class="ch">{{ item.ch }}</div>
            <div class="en">{{ item.en }}</div>
          </div>
        </router-link>
      </div>
      <div class="linkItemsMobile">
        <v-btn icon small @click="turnOn">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
      <div v-if="turnOnMenu" class="navbarItemMobile">
        <div class="blackBackground" @click="turnOff"></div>
        <div class="mobileItem">
          <div class="mobileBox" :class="seasonTopic">
            <router-link
              v-for="item in items"
              :key="item.en"
              :to="{ name: item.link }"
            >
              <div class="text-center mobileLinkItem" @click="turnOff">
                <div class="ch">{{ item.ch }}</div>
                <div class="en">{{ item.en }}</div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Whale from "@/assets/icons/whale.svg";
import WhaleSpring from "@/assets/icons/whaleSpring.svg";
import WhaleAutumn from "@/assets/icons/whaleAutumn.svg";
import WhaleWinter from "@/assets/icons/whaleWinter.svg";
import Dots from "@/assets/icons/dots.svg";
import DotsSpring from "@/assets/icons/dotsSpring.svg";
import DotsAutumn from "@/assets/icons/dotsAutumn.svg";
import DotsWinter from "@/assets/icons/dotsWinter.svg";
export default {
  components: {
    Whale,
    Dots,
    WhaleSpring,
    WhaleAutumn,
    WhaleWinter,
    DotsSpring,
    DotsAutumn,
    DotsWinter,
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
  watch: {
    windowSize: {
      deep: true,
      immediate: true,
      handler(v) {
        // console.log(v);
        if (v > 625) {
          this.turnOnMenu = false;
        }
      },
    },
  },
  data() {
    return {
      items: [
        { ch: "景點", en: "SCENICSPOT", link: "ScenicSpot" },
        { ch: "美食", en: "RESTAURANT", link: "Restaurant" },
        { ch: "活動", en: "ACTIVITY", link: "Activity" },
        { ch: "住宿", en: "HOTELS", link: "Hotel" },
      ],
      turnOnMenu: false,
      windowSize: window.innerWidth,
    };
  },
  methods: {
    directHome() {
      if (this.$route.name === "Home") {
        return;
      } else {
        this.$router.push({ name: "Home" });
        this.$store.dispatch("setResetSelect", "");
      }
    },
    turnOn() {
      this.turnOnMenu = true;
    },
    turnOff() {
      this.turnOnMenu = false;
      this.suspectHeight();
    },
    suspectHeight() {
      window.scrollTo(0, 0);
    },
    onResize() {
      this.windowSize = window.innerWidth;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 11.11vw;
  display: flex;
  align-items: center;
  @media screen and (max-width: 1280px) {
    height: 91px;
  }
  @media screen and (max-width: 625px) {
    height: 64px;
    justify-content: space-between;
    .menuItem {
      margin-right: 1.5rem;
    }
  }
  .websiteName {
    cursor: pointer;
  }
}
</style>