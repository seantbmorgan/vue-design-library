import Vue from "vue";
import StbmBanner from "./components/Banner/Banner.vue";
import "./assets/tailwind.css";

const Components = {
  StbmBanner
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
