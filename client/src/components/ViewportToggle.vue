<template>
<div class="card c-hand" @click="onToggle" :class="this.cardClass">
	<div class="card-header">
		<div class="card-title h5">{{viewport.name}}</div>
		<div class="card-subtitle">{{viewport.width}}x{{viewport.height}}</div>
	</div>
</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
	name: "viewportToggle",
	props: ["viewport"],
	computed: {
		cardClass() {
			return this.viewport.selected ? "bg-primary text-light viewport-border" : "";
		}
	},
	methods: {
		...mapMutations(["setSelected"]),
		onToggle() {
			this.setSelected({
				viewport: this.viewport,
				selected: !this.viewport.selected
			});
		}
	}
};
</script>

<style scoped lang="scss">
@import "../screeny";

.viewport-border {
	@include control-transition();
	border-color: $primary-color;
	
	&:hover {
		border-color: $primary-color;
		background-color: darken($primary-color, 2%);
	}
}
</style>