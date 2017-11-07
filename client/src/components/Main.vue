<template>
<div class="grid-lg container">
	<h1 class="text-light text-shadow">Screeny is an automatic webpage screenshot tool.<br><small>Take screenshots of multiple sizes with ease.</small></h1>
	<div class="section-main">
		<!-- <p class="h1">Grab screenshots</p> -->
		<p class="h5">Enter the page you would like to screengrab</p>
		
		<div class="section-form">
			<form>
				<div class="input-group">
					<input v-model="url" type="text" class="form-input input-lg" placeholder="Website URL">
					<button
						@click="onSubmit"
						class="btn btn-primary input-group-btn btn-lg"
						:class="loadingScreenshots ? 'loading' : ''">Grab screenshots</button>
				</div>
			</form>
			
		</div>

		<p class="h5">Select viewport sizes</p>

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
import getScreenshots from "../getScreenshots";

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
				const screenshots = await getScreenshots(this.url, this.selectedViewports);
				this.$router.push({ name: "Screenshots", params: { buffer: screenshots } });
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
