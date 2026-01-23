import { createRender } from "@pyvuetify/vuetify";
import VCarouselItem from "./VCarouselItem.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VCarouselItem);
export default { render };