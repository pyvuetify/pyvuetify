import { createRender } from "@pyvuetify/vuetify";
import VTimelineItem from "./VTimelineItem.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VTimelineItem);
export default { render };