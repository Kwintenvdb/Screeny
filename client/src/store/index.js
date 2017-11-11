import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

class Viewport {
	constructor(width, height, name) {
		this.width = width;
		this.height = height;
		this.selected = false;
		this.name = name;
	}
}

const defaultViewports = [
	new Viewport(800, 600, "Small"),
	new Viewport(1280, 720, "Medium"),
	new Viewport(1920, 1080, "Full HD")
];
defaultViewports[0].selected = true;

export default new Vuex.Store({
	state: {
		viewports: defaultViewports,
		loadingScreenshots: false
	},
	getters: {
		viewports(state) {
			return state.viewports;
		},
		selectedViewports(state) {
			return state.viewports.filter(v => v.selected);
		},
		loadingScreenshots(state) {
			return state.loadingScreenshots;
		}
	},
	mutations: {
		setSelected(state, { viewport, selected }) {
			viewport.selected = selected;
		},
		setLoadingScreenshots(state, loadingScreenshots) {
			state.loadingScreenshots = loadingScreenshots;
		}
	}
});
