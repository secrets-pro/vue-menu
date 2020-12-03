<template>
  <div class="chid-nav-wrap">
    <ul :class="{ 'chid-nav': true }" v-if="items">
      <li :class="setActive(cm)" v-for="cm in items" :key="cm.name">
        <div @click="triggerClick(cm)">
          <a>{{ cm.title }}</a>
          <vue-menu-item
            :active="nextActive"
            :parent="cm"
            :items="cm.items"
            @on-click="childClick"
            v-if="cm.items"
          ></vue-menu-item>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "vue-menu-item",
  props: {
    active: Array,
    items: Array,
    activeClass: String,
    parent: Object,
    default() {
      return [];
    }
  },
  computed: {
    nextActive() {
      let ac = [].concat(this.active);
      return ac && ac.length ? (ac.splice(0, 1), ac) : [];
    }
  },
  methods: {
    setActive(cm) {
      if (this.activeClass) {
        return {
          [this.activeClass]:
            this.active && this.active.length
              ? this.active[0] === cm.name
              : false
        };
      } else {
        return "";
      }
    },
    triggerClick(item) {
      if (!item.items) {
        const params = this.parent ? [this.parent] : [];
        params.push(item);
        this.$emit("on-click", params);
      }
    },
    childClick(items) {
      const params = this.parent ? [this.parent] : [];
      this.$emit("on-click", params.concat(items));
    }
  }
};
</script>
