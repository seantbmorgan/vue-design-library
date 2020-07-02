<template>
  <div
    class="banner p-5"
    :style="bannerStyles"
    :class="{
      [`banner__${position}`]: true,
      'bg-red-500 text-red-max': danger,
      'bg-yellow-500 text-yellow-max': warn,
      'bg-green-500 text-green-max': success,
      'bg-blue-500 text-blue-max': basic
    }"
  >
    <div class="w-full" :class="textAlign">
      <slot></slot>
      <button
        class="flex items-center h-full close-button px-5"
        :class="{
          left: textAlign === 'text-right',
          right: textAlign !== 'text-right'
        }"
      >
        <font-awesome-icon icon="times" />
      </button>
    </div>
  </div>
</template>
<script>
const defaultStyles = {
  left: 0,
  right: 0
};
export default {
  props: {
    position: {
      type: String,
      default: "top",
      validator(position) {
        return ["top", "bottom"].indexOf(position) > -1;
      }
    },
    styles: {
      type: Object,
      default: () => ({})
    },
    basic: {
      type: Boolean,
      default: true
    },
    danger: {
      type: Boolean,
      default: false
    },
    warn: {
      type: Boolean,
      default: false
    },
    success: {
      type: Boolean,
      default: false
    },
    textAlign: {
      type: String,
      default: "text-left"
    }
  },
  data() {
    return {
      bannerStyles: {
        ...defaultStyles,
        ...this.styles
      }
    };
  }
};
</script>
<style lang="scss" scoped>
.banner {
  position: fixed;
  z-index: 2;
}
.banner__top {
  top: 0;
}
.banner__bottom {
  bottom: 0;
}
.close-button {
  position: absolute;
  top: 0;
}
.right {
  right: 0;
}
.left {
  left: 0;
}
</style>
