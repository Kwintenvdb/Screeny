import Vue from "vue";
import Router from "vue-router";
import Main from "@/components/Main";
import Screenshots from "@/components/Screenshots";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			component: Main
		},
		{
			path: "/screenshots",
			name: "Screenshots",
			component: Screenshots,
			props: true
		}
	]
});
