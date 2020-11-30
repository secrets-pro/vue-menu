import VueMenu from "./components/VueMenu";
import "./style/index.less";
const components = {
  VueMenu
};
function install(Vue) {
  Object.keys(components).forEach(key => {
    components[key].install && components[key].install(Vue);
  });
}
if (window && window.Vue) install(window.Vue);
export { VueMenu };
export default {
  ...components,
  install
};
