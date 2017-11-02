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
		<viewport-toggle class="column"/>
		<viewport-toggle class="column"/>
		<viewport-toggle class="column"/>
	</div>
</div>

</template>

<script>
import ViewportToggle from "./ViewportToggle";
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
	methods: {
		async onSubmit() {
			console.log("Url: " + this.url);

			// axios({
			// 	method: "POST",
			// 	data: {
			// 		viewport: {
			// 			w: 1920,
			// 			h: 1080
			// 		}
			// 	}
			// });
			const res = await axios.post("/api/screenshots", {
				viewport: {
					w: 1920,
					h: 1080
				}
			});
			console.log(res);
			// const res = await fetch("/api/screenshots");
			// const blob = await res.blob();
			this.$router.push({ name: "Screenshots", params: { buffer: res.data } });
			// console.log(blob);
		}
	}
};
</script>
