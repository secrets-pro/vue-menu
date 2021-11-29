<template>
  <div id="app" style="padding: 15px">
    <div>
      <vue-menu
        :menu="menu"
        v-model="value"
        @on-click="choose"
        :label.sync="label"
        ref="menu"
      ></vue-menu>
      <div>
        <button @click="click">手动设置</button>
        <button @click="click1">手动设置1</button>
      </div>
    </div>
  </div>
</template>

<script>
import VueMenu from "../src/components/VueMenu";
export default {
  components: { VueMenu },
  data() {
    return {
      value: [],
      label: [],
      menu: [
        { name: "home", title: "home" },
        {
          name: "space",
          title: "MY SPACE",
          items: [
            {
              name: "space-1",
              title: "space",
              items: [
                { name: "space-2-1-name", title: "space-2-1" },
                { name: "space-2-2-name", title: "space-2-2" }
              ]
            },
            {
              name: "space-2",
              title: "space2",
              items: [
                { name: "space-2-1-name", title: "space-2-1" },
                { name: "space-2-2-name", title: "space-2-2" }
              ]
            }
          ]
        },
        {
          name: "INFOMATION",
          title: "INFOMATION",
          items: [
            { name: "333", title: "333" },
            {
              name: "444",
              title: "444",
              items: [
                { name: "space-2-1", title: "space-2-1" },
                { name: "space-2-2", title: "space-2-2" }
              ]
            },
            {
              name: "555",
              title: "555",
              items: [
                {
                  name: "space-3-1",
                  title: "space-3-1",
                  items: [
                    { name: "5-5", title: "5-5" },
                    { name: "5-51", title: "5-51" }
                  ]
                },
                { name: "space-3-2", title: "space-3-2" },
                { name: "space-3-3", title: "space-3-2" },
                { name: "space-3-4", title: "space-3-2" }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    click() {
      this.$refs.menu.triggerHover([1, 0]);
    },
    click1() {
      this.$refs.menu.triggerHover([2, 1]);
    },
    choose(...items) {
      console.log(items);
    }
  }
};
</script>
