<template>
<div id="app" class="app">
		<div class="page-divider"></div>
	<div class="page">
		<router-view/>
	</div>
</div>
</template>

<script>
export default {
	name: "app"
};
</script>

<style lang="scss">
@import "screeny";

.page {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;

	// background-color: #f6f6f6;
	text-align: center;
	background: linear-gradient(to bottom right, #2191FB, #2A2A9E);
}

// .page-divider {
// 	position: absolute;
// 	width: 100%;
// 	height: 50%;
// 	top: 0;
// 	background-color: $primary-color;
// }
</style>