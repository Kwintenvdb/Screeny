<template>
<div class="section-form">
	<h1>Grab screenshots</h1>
	<div class="input-group">
		<input v-model="url" type="text" class="form-input" placeholder="Website URL">
		<button @click="onSubmit" class="btn btn-primary input-group-btn">Submit</button>
	</div>

	<div class="card">
		<div class="card-header">
			<div class="card-title h5">Standard</div>
			<div class="card-subtitle text-gray">1000x1000</div>
		</div>
	</div>

	<div class="card">
		<div class="card-header">
			<div class="card-title h5">Large</div>
			<div class="card-subtitle text-gray">1920x1080</div>
		</div>
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
