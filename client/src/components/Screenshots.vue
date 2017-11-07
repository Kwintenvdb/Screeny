<template>
<div>
	<h1 class="text-light text-shadow">Here are your screenshots.</small></h1>
	<div class="section-main">
		<img :src="screenshot" class="img-responsive"/>
	</div>
</div>
</template>

<script>
export default {
	name: "screenshots",
	props: ["buffer"],
	computed: {
		screenshot() {
			if (this.buffer) {
				return URL.createObjectURL(this.buffer);
			}
			return "";
		}
	},
	created() {
		if (!this.buffer) {
			this.$router.replace("/");
		}
	}
};
</script>
