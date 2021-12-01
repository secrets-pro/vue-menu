<template>
  <div :class="{ 'sm-menu': true, [this.placement]: !!this.placement }">
    <sm-menu
      :active="currentValue"
      :items="menu"
      :activeClass="activeClass"
      :hoveredIndex="hovered"
      @on-click="triggerClick"
    ></sm-menu>
  </div>
</template>

<script>
import SmMenu from "./Menu";
export default {
  components: {
    SmMenu
  },
  name: "vue-menu",
  props: {
    placement: {
      type: String,
      default: "left"
    },
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    label: {
      type: Array,
      default() {
        return [];
      }
    },
    menu: {
      type: Array,
      default: function() {
        return [];
      }
    },
    activeClass: String
  },
  data() {
    return {
      hovered: [],
      currentValue: this.value,
      currentLabel: this.label,
      menus: this.menu
    };
  },
  watch: {
    active(n) {
      this.currentValue = n;
    }
  },
  methods: {
    // 手动触发hover
    triggerHover(itemsIndex = []) {
      if (Array.isArray(itemsIndex)) {
        this.hovered = itemsIndex;
      }
    },
    triggerClick(item) {
      // 构造
      let v = item.map((el) => el.name);
      let l = item.map((el) => el.title);
      this.currentValue = v;
      this.currentLabel = l;
      this.$emit("input", v);
      this.$emit("update:label", l);
      this.$emit("on-click", v, l);
    }
  }
};
</script>
