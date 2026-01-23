import { createRender } from "@pyvuetify/vuetify";
import VCarousel from "./VCarousel.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VCarousel);
export default { render };