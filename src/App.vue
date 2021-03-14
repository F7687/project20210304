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
	},
}
</script>
<style lang="less">
@import './assets/css/common.css';
body,
html,p {
	margin: 0;
	padding: 0;
	color: #fff;
}

/deep/.van-checkbox__label{
	color: #fff;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	background-image: url('./assets/img/background.png');
	background-size: 100% 100%;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	color: #fff;
	font-size: 14px;
	box-sizing: border-box;

}


</style>
