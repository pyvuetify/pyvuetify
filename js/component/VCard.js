import { createRender } from "@pyvuetify/vuetify";
import VCard from "./VCard.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VCard);
export default { render };