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
	background-image: linear-gradient(to bottom, #0acffe 0%, #495aff 100%);
	// background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
	// background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);
	// background-image: linear-gradient(to bottom, #00c6fb 0%, #005bea 100%);
	// background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);
	// background-image: radial-gradient(circle 300px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);
	// background-image: linear-gradient(to top, #0fd850 0%, #D9F948 100%);
	// background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);
	// background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
	// background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
	// background-image: linear-gradient(-45deg, #20E2D7 0%, #F9FEA5 100%);
	// background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);
	// background-image: linear-gradient(to bottom, #9be15d 0%, #00e3ae 100%);
	// background-image: linear-gradient(to top, #209cff 0%, #68e0cf 100%);
	// background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);
	// background-image: linear-gradient(to bottom, #37ecba 0%, #72afd3 100%);
	// background-image: linear-gradient(to bottom, #4facfe 0%, #00f2fe 100%);
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