<template>
<div class="grid-lg container">
	<header class="navbar">
		<section class="navbar-section">
			<a href="/" class="navbar-brand">Screeny</a>
		</section>
		<section class="navbar-section"></section>
	</header>

	<h1>Grab screenshots</h1>
	<div class="section-form">
		<div class="input-group">
			<input v-model="url" type="text" class="form-input" placeholder="Website URL">
			<button @click="onSubmit" class="btn btn-primary input-group-btn">Submit</button>
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

</template>

<script>
import ViewportToggle from "./ViewportToggle";
import { mapGetters } from "vuex";
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
		...mapGetters(["viewports", "selectedViewports"])
	},
	methods: {
		async onSubmit() {
			const config = {
				responseType: "blob"
			};
			const res = await axios.post("/api/screenshots", {
				viewports: this.selectedViewports
			}, config);
			this.$router.push({ name: "Screenshots", params: { buffer: res.data } });
		}
	}
};
</script>

<style scoped>
.navbar {
	position: absolute;
	top: 0;
}

.section-form {
	margin-bottom: .8rem;
}
</style>
