<template>
	<div>
		<z-header />
		<div class="main">
			<div class="left_box">
				无图像
			</div>
			<div class="right_box">
				<div class="img_box">请采集人脸</div>
				<div class="action">
					<span>录入人脸</span>
					<span>删除人脸</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import zHeader from "@/components/ZHeader.vue";
export default {
	name: 'inputFace',
	components: {
		zHeader
	},
	data () {
		return {

		}
	},
}
</script>

<style lang="less" scoped>
.main{
	background-color: #0a370a;
	padding: 1px 18px;
	margin: 8px;
	height: 330px;
	display: flex;
	justify-content: space-between;
	.left_box{
		width: 325px;
		height: 240px;
		margin: 48px 0;
		margin-bottom: 0;
		background-color: #000;
		text-align: center;
		line-height: 240px;
	}
	.right_box{
		width: 248px;
		height: 304px;
		line-height: 304px;
		text-align: center;
		border: 1px dashed #ccc;
		margin-top: 12px;
		.img_box{
			width: 182px;
			height:206px;
			line-height: 206px;
			text-align: center;
			background-color: #000;
			margin: 0 auto;
			margin-top: 22px;
		}
		.action{
			display: flex;
			justify-content: space-between;
			padding:0 4px;
			margin-top: 15px;
			span{
				width: 118px;
				height: 40px;
				line-height: 40px;
				text-align: center;
			}
			:nth-child(1){
				background-color: #268118;
			}
			:nth-child(2){
				background-color: #2c78a7;
			}
		}
	}
}
</style>