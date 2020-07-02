import Vue from "vue";
import StbmBanner from "./components/Banner/Banner.vue";
import "./assets/tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes);
Vue.component("font-awesome-icon", FontAwesomeIcon);

const Components = {
  StbmBanner
};

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
