import Vue from "vue";
import StbmBanner from "./Banner.vue";
import "../../assets/tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faTimes);
Vue.component("font-awesome-icon", FontAwesomeIcon);

import { withKnobs, select } from "@storybook/addon-knobs";

const styles = {
  label: "Styles",
  options: {
    Default: "basic",
    Danger: "danger",
    Warn: "warn",
    Success: "success"
  },
  defaultValue: "basic",
  groupId: "STYLES"
};
const positions = {
  label: "Positions",
  options: {
    Top: "top",
    Bottom: "bottom"
  },
  defaultValue: "top",
  groupId: "STYLES"
};
const textAlign = {
  label: "Text Alignment",
  options: {
    Left: "text-left",
    Center: "text-center",
    Right: "text-right"
  },
  defaultValue: "left",
  groupId: "STYLES"
};
const toggle = {
  label: "Toggle",
  options: {
    Manual: "text-left",
    Timer: "text-center"
  },
  defaultValue: "left",
  groupId: "TOGGLE"
};

export default { title: "StbmBanner", decorators: [withKnobs] };

export const Playground = () => ({
  components: { StbmBanner },
  props: {
    style: {
      default: select(
        styles.label,
        styles.options,
        styles.defaultValue,
        styles.groupId
      )
    },
    position: {
      default: select(
        positions.label,
        positions.options,
        positions.defaultValue,
        positions.groupId
      )
    },
    textAlign: {
      default: select(
        textAlign.label,
        textAlign.options,
        textAlign.defaultValue,
        textAlign.groupId
      )
    },
    toggle: {
      default: select(
        toggle.label,
        toggle.options,
        toggle.defaultValue,
        toggle.groupId
      )
    }
  },
  template: `<stbm-banner :basic="style==='basic'" :danger="style==='danger'" :warn="style==='warn'" :success="style==='success'" :position='position' :text-align="textAlign"><div><b>{{style}} banner</b> Pay Attention<br/><h1 class="text-2xl"><b>Huge Deal!</b></h1></div></stbm-banner>`
});
