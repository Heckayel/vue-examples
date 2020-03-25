import Vue from 'vue';
import VueRouter from 'vue-router';
import PageToggle from "../pages/PageToggle";
import ModelInModel from "../pages/ModelInModel";

Vue.use(VueRouter);

const routes = [
    { path: '/toggle', component: PageToggle },
    { path: '/model-in-model', component: ModelInModel }
];

export default new VueRouter({
    routes // short for `routes: routes`
});
