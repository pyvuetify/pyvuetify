import { createRender } from "@pyvuetify/vuetify";
import VPullToRefresh from "./VPullToRefresh.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VPullToRefresh);
export default { render };