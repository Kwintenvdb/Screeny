<template>
<div class="grid-lg container">
	<div class="section-main">
		<p class="h1">Grab screenshots</p>
		<!-- <h1 class="text-primary">Grab screenshots</h1> -->
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

.section-form {
	margin-bottom: .8rem;
}

.section-main {
	background-color: $bg-color;
	// border-width: 2px;
	// border-style: dashed;
	// border-radius: 1rem;
	border-radius: $border-radius;
	// border-color: $secondary-color;
	border-color: $border-color-dark;
	box-shadow: $shadow;
	padding: 70px;
}
</style>
