<template>
	<div>
		<z-header />
		<div class="main">
			<div class="left_box">
				<div class="info_item">
					<span class="i_label">姓名：</span>
					<span class="i_input">张三（A组）、李四（B组）</span>
				</div>
				<div class="info_item">
					<span class="i_label">编号：</span>
					<span class="i_input">001、002</span>
				</div>
				<div class="info_item">
					<span class="i_label">组别：</span>
					<span class="i_input">001、002</span>
				</div>
				<div class="info_item">
					<span class="i_label">验证：</span>
					<span class="i_input">指纹+密码验证</span>
				</div>
				<div class="info_item">
					<span class="i_label">内容：</span>
					<span class="i_input">指纹+密码验证</span>
				</div>
				<div class="info_item">
					<span class="i_label">时间：</span>
					<span class="i_input">2020-02-20 10:20:30</span>
				</div>
			</div>
			<div class="right_box">
				无图像
			</div>
		</div>
	</div>
</template>

<script>
import zHeader from "@/components/ZHeader.vue";
export default {
	name: 'logDetail',
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
	display: flex;
	justify-content: space-between;
	// border: 1px solid;
	margin: 10px 15px;
	padding-top: 15px;
	padding-right: 15px;
	background-color: #0a430c;
	height: 310px;
	.left_box{
		width: 260px;
		height: 303px;
		margin: 0 auto;
		padding-top: 11px;
		box-sizing: border-box;
		// border: 1px solid;
		.info_item{
			height: 45px;
			line-height: 45px;
			border-bottom: 1px solid #42a409;
			span{
				display: inline-block;
			}
			.i_label{
				text-indent: 1em;
			}
			.i_input{
				text-indent: 1em;
			}
			.i_input_pwd{
				width: 188px;
				height: 32px;
				line-height: 32px;
				border: 1px dashed #ccc;
				margin-left: 1em;
			}
		}
	}
}
.right_box {
		width: 249px;
		height: 303px;
      padding: 3px 0;
		box-sizing: border-box;
		background-color: #000;
		line-height: 303px;
		text-align: center;
     
		
	}
</style>