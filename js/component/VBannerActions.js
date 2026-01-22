import { createRender } from "@pyvuetify/vuetify";
import VBannerActions from "./VBannerActions.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VBannerActions);
export default { render };