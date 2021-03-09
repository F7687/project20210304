<template>
<!--  -->
	<div id="app">
		
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
	</div>
</template>
<script>
export default {
	mounted () {
		// console.log('路由：', this.$route);
	},
}
</script>
<style lang="less">
@import './assets/css/common.css';
body,
html {
	margin: 0;
	padding: 0;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	background-image: url('./assets/img/background.png');
	background-size: 100% 100%;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	color: #f4f8f4;
	font-size: 14px;
	box-sizing: border-box;

}


</style>
