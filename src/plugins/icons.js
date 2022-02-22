/**
 * svg icons bundle，匯集 assets/svg 內所有svg檔
 */

import Vue from "vue";
import SvgIcon from "@/components/SvgIcon.vue"

Vue.component("svg-icon", SvgIcon);

const req = require.context("../assets/icons", false, /\.svg$/);
const requireAll = (requireContext) =>
    requireContext.keys().map(requireContext);
requireAll(req)