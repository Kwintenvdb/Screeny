<template>
<div class="card c-hand" @click="onToggle" :class="this.class">
	<div class="card-header">
		<div class="card-title h5">Large</div>
		<div class="card-subtitle">{{width}}x{{height}}</div>
	</div>
</div>
</template>

<script>
export default {
	name: "viewportToggle",
	data() {
		return {
			width: 1920,
			height: 1080,
			selected: false
		};
	},
	computed: {
		class() {
			return this.selected ? "bg-primary text-light" : "";
		}
	},
	methods: {
		onToggle() {
			this.selected = !this.selected;
		}
	}
};
</script>