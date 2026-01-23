import { createRender } from "@pyvuetify/vuetify";
import VBannerText from "./VBannerText.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VBannerText);
export default { render };