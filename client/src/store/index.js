import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

class Viewport {
	constructor(width, height) {
		this.width = width;
		this.height = height;
		this.selected = false;
		this.name = "Widescreen";
	}
}

export default new Vuex.Store({
	state: {
		viewports: [
			new Viewport(1920, 1080),
			new Viewport(800, 600)
		]
	},
	getters: {
		viewports(state) {
			return state.viewports;
		}
	},
	mutations: {
		setSelected(state, { viewport, selected }) {
			viewport.selected = selected;
		}
	}
});
