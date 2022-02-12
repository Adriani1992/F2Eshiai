import Vue from "vue";
import Vuex from "vuex";
import { cloneDeep } from "lodash"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    restaurantData: [],
    scenicData: [],
    scenicSpot: [],
    restaurant: [],
    hotels: [],
    nearBy: [],
    activity: [],
    clearable: false,
    searchitem: {
      selectCity: null,
      selectCategory: null,
    }
  },
  mutations: {
    //ScenicSpot
    handleScenicData(state, data) {
      state.scenicData = cloneDeep(data);
    },
    handleScenicSpotData(state, data) {
      state.scenicSpot = cloneDeep(data);
    },
    handleResetScenicSpotData(state) {
      state.scenicSpot = [];
    },
    //Restaurant
    handlerestaurantData(state, data) {
      // console.log("data", data)
      state.restaurantData = cloneDeep(data);
    },
    handleRestaurant(state, data) {
      // console.log("data", data)
      state.restaurant = cloneDeep(data);
    },
    handleResetRestaurantData(state) {
      state.restaurant = [];
    },
    //hotels
    handleHotel(state, data) {
      // console.log("data", data)
      state.hotels = cloneDeep(data);
    },
    handleResetHotel(state) {
      state.hotels = [];
    },
    //activities
    handleActivity(state, data) {
      // console.log("data", data)
      state.activity = cloneDeep(data);
    },
    handleResetActivity(state) {
      state.activity = [];
    },
    //includesNearby
    handleNearby(state, data) {
      state.nearBy = cloneDeep(data);
    },
    //clearable
    handleClearable(state, data) {
      state.clearable = data
    },
    //handle search
    handleCategory(state, data) {
      state.searchitem.selectCategory = data
    },
    handleCity(state, data) {
      state.searchitem.selectCity = data
    },
    //handle reset
    handleReset(state, data) {
      state.searchitem.selectCategory = data
      state.searchitem.selectCity = data
    }
  },
  actions: {
    //首頁的部分
    setRestaurantData({ commit }, data) {
      // console.log("data", data)
      commit('handlerestaurantData', data);
      // state.restaurantData = clonedeep(data);
    },
    setScenicSpotData({ commit }, data) {
      // console.log("data", data)
      commit('handleScenicData', data);
      // state.restaurantData = clonedeep(data);
    },
    setClearable({ commit }, data) {
      commit('handleClearable', data)
    },
    //非首頁
    setScenicData({ commit }, data) {
      // console.log("data", data)
      commit('handleScenicSpotData', data);
      // state.restaurantData = clonedeep(data);
    },
    setRestaurant({ commit }, data) {
      // console.log("data", data)
      commit('handleRestaurant', data);
      // state.restaurantData = clonedeep(data);
    },
    setHotel({ commit }, data) {
      // console.log("data", data)
      commit('handleHotel', data);
      // state.restaurantData = clonedeep(data);
    },
    setActivity({ commit }, data) {
      // console.log("data", data)
      commit('handleActivity', data);
      // state.restaurantData = clonedeep(data);
    },
    ResetScenicData({ commit }) {
      // console.log("data", data)
      commit('handleResetScenicSpotData');
      // state.restaurantData = clonedeep(data);
    },
    ResetRestaurantData({ commit }) {
      // console.log("data", data)
      commit('handleResetRestaurantData');
      // state.restaurantData = clonedeep(data);
    },
    ResetHotelsData({ commit }) {
      // console.log("data", data)
      commit('handleResetHotel');
      // state.restaurantData = clonedeep(data);
    },
    ResetActivityData({ commit }) {
      // console.log("data", data)
      commit('handleResetActivity');
      // state.restaurantData = clonedeep(data);
    },
    //handle Nearby
    SetNearby({ commit }, data) {
      commit('handleNearby', data);
    },
    //handle search
    SetCity({ commit }, data) {
      commit('handleCity', data)
    },
    SetCategory({ commit }, data) {
      commit('handleCategory', data)
    },
    //handle Reset
    setResetSelect({ commit }, data) {
      commit('handleReset', data)
    }
  },
  modules: {},
});
