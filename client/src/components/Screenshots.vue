<template>
<div class="section-main">
	<p class="h1">Here are your screenshots</p>
	<img :src="screenshot" class="img-responsive"/>
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
