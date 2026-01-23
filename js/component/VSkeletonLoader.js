import { createRender } from "@pyvuetify/vuetify";
import VSkeletonLoader from "./VSkeletonLoader.vue";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

const render = createRender(VSkeletonLoader);
export default { render };