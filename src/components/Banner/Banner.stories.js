import StbmBanner from "./Banner.vue";
import "../../assets/tailwind.css";

export default { title: "StbmBanner" };

export const asAComponent = () => ({
  components: { StbmBanner },
  template: "<stbm-banner>banner</stbm-banner>"
});
