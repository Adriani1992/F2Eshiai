<template>
  <nav class="navbar" app>
    <div class="websiteName" @click="directHome">
      <div>
        <Whale class="logo" />
      </div>
      <div class="logoName">樂活台灣</div>
    </div>
    <div class="menuItem d-flex flex-grows">
      <div>
        <Dots class="dots" />
      </div>
      <div class="linkItems">
        <router-link
          v-for="item in items"
          :key="item.en"
          :to="{ name: item.link }"
        >
          <div class="navbarItem text-center">
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
          <div class="mobileBox">
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
import Dots from "@/assets/icons/dots.svg";
export default {
  components: { Whale, Dots },
  data() {
    return {
      items: [
        { ch: "景點", en: "SCENICSPOT", link: "ScenicSpot" },
        { ch: "美食", en: "RESTAURANT", link: "Restaurant" },
        { ch: "活動", en: "ACTIVITY", link: "Activity" },
        { ch: "住宿", en: "HOTELS", link: "Hotel" },
      ],
      turnOnMenu: false,
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
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 160px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 375px) {
    height: 64px;
  }
  .websiteName {
    cursor: pointer;
  }
}
</style>