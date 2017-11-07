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
	background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
	// background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
	// background-image: linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%);
	// background-image: linear-gradient(to top, #50cc7f 0%, #f5d100 100%);
	// background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
	// background-image: linear-gradient(to top, #9be15d 0%, #00e3ae 100%);
	// background-image: linear-gradient(to top, #209cff 0%, #68e0cf 100%);
	// background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
	// background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
	// background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
	// background: linear-gradient(to bottom right, #2191FB, #2A2A9E);
}

// .page-divider {
// 	position: absolute;
// 	width: 100%;
// 	height: 50%;
// 	top: 0;
// 	background-color: $primary-color;
// }
</style>