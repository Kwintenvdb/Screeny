<template>
<div class="grid-lg container">
	<header class="navbar">
		<section class="navbar-section">
			<a href="/" class="navbar-brand">Screeny</a>
		</section>
		<section class="navbar-section"></section>
	</header>

	<div class="section-main">
		<h1 class="text-primary">Grab screenshots</h1>
		<div class="section-form">
			<div class="input-group">
				<input v-model="url" type="text" class="form-input input-lg" placeholder="Website URL">
				<button
					@click="onSubmit"
					class="btn btn-primary input-group-btn btn-lg"
					:class="loadingScreenshots ? 'loading' : ''">Grab screenshots</button>
			</div>
		</div>

		<div class="columns">
			<div
				class="column"
				v-for="(vp, index) in viewports"
				:key="index">
				<viewport-toggle :viewport="vp"/>
			</div>
		</div>
	</div>
</div>

</template>

<script>
import ViewportToggle from "./ViewportToggle";
import { mapGetters, mapMutations } from "vuex";
import axios from "axios";

export default {
	name: "main",
	components: {
		ViewportToggle
	},
	data() {
		return {
			url: ""
		};
	},
	computed: {
		...mapGetters(["viewports", "selectedViewports", "loadingScreenshots"]),
	},
	methods: {
		...mapMutations(["setLoadingScreenshots"]),
		async onSubmit() {
			if (!this.loadingScreenshots) {
				this.setLoadingScreenshots(true);
				const config = {
					responseType: "blob"
				};
				const res = await axios.post("/api/screenshots", {
					url: this.url,
					viewports: this.selectedViewports
				}, config);
				this.$router.push({ name: "Screenshots", params: { buffer: res.data } });
				this.setLoadingScreenshots(false);
			}
		}
	}
};
</script>

<style lang="scss">
@import "../screeny";

.navbar {
	position: absolute;
	top: 0;
}

.section-form {
	margin-bottom: .8rem;
}

.section-main {
	border-width: 1px;
	border-style: dashed;
	// border-radius: 10px;
	border-radius: $border-radius;
	border-color: $border-color-dark;
	padding: 70px;
}
</style>
