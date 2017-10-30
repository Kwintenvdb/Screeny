<template>
<div class="grid-sm container">
	<h1>Grab screenshots</h1>
	<div class="input-group">
		<input v-model="url" type="text" class="form-input" placeholder="Website URL">
		<button @click="onSubmit" class="btn btn-primary input-group-btn">Submit</button>
	</div>
</div>
</template>

<script>
export default {
	name: "main",
	data() {
		return {
			url: ""
		};
	},
	methods: {
		onSubmit() {
			console.log(this.url);
		}
	}
};
</script>