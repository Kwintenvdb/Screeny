<template>
<div id="app" class="app">
	<router-view/>
</div>
</template>

<script>
export default {
	name: "app"
};
</script>

<style scoped>
.app {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;

	background-color: #f6f6f6;
	text-align: center;
}
</style>