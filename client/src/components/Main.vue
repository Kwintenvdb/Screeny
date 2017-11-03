<template>
<div>
	<h1>Grab screenshots</h1>
	<div class="section-form">
		<div class="input-group">
			<input v-model="url" type="text" class="form-input" placeholder="Website URL">
			<button @click="onSubmit" class="btn btn-primary input-group-btn">Submit</button>
		</div>
	</div>

	<div class="columns">
		<viewport-toggle
			v-for="(vp, index) in viewports"
			:viewport="vp"
			:key="index"/>
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
		...mapGetters(["viewports"])
	},
	methods: {
		async onSubmit() {
			const config = {
				responseType: "blob"
			};
			const res = await axios.post("/api/screenshots", {
				viewport: {
					w: 800,
					h: 600
				}
			}, config);
			this.$router.push({ name: "Screenshots", params: { buffer: res.data } });
		}
	}
};
</script>
