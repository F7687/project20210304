<template>
	<div>
		<z-header></z-header>
		<div class="content">
			<div class="video_box">
				<div class="v_main">无图像</div>
				<div class="v_tips">
					<span>等待对方接听（30秒）</span>
					<img src="../../assets/img/Hang_up.png" alt="挂断">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import zHeader from "@/components/ZHeader.vue";
export default {
	name: 'environmentalMonitoring',
	components: {
		zHeader
	},
	mounted () {
	},
	methods: {

	}
}
</script>

<style lang="less" scoped>
.content {
	.video_box {
		// display: inline-block;
      
		text-align: center;
		width: 323px;
		height: 297px;
		box-sizing: border-box;
		margin: 25px auto;
		background-image: url('../../assets/img/Video_call.png');
		background-size: 100% 100%;
		padding: 1px;
		.v_main {
			display: flex;
			justify-content: center;
			align-items: center;
			height: 240px;
			background-color: #000;
		}
		.v_tips {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 57px;
			line-height: 57px;

			text-align: center;

			img {
				width: 64px;
				height: 24px;
			}
		}
	}
}
</style>