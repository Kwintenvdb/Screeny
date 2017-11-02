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
		<div class="card column">
			<div class="card-header">
				<div class="card-title h5">Square</div>
				<div class="card-subtitle text-gray">1000x1000</div>
			</div>
		</div>

		<div class="card column">
			<div class="card-header">
				<div class="card-title h5">Large</div>
				<div class="card-subtitle text-gray">1920x1080</div>
			</div>
		</div>
		
		<div class="card column">
			<div class="card-header">
				<div class="card-title h5">Large</div>
				<div class="card-subtitle text-gray">1920x1080</div>
			</div>
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
