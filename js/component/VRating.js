import { createRender } from "@pyvuetify/vuetify";
import VRating from "./VRating.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VRating);
export default { render };