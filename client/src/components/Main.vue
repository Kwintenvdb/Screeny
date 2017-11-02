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
			const res = await fetch("/api/screenshots");
			const json = await res.json();
			console.log(json);
		}
	}
};
</script>
