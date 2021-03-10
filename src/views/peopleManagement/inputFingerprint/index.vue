<template>
	<div>
		<z-header />
		<div class="main">
			<div class="left_box">
				<div class="l_header">
					<van-row type="flex">
						<van-col span="5">序号</van-col>
						<van-col span="14">指纹编号</van-col>
						<van-col span="5">
							选择
						</van-col>
					</van-row>
				</div>
				<div class="l_body">
					<van-row type="flex" class="body_row">
						<van-col span="5">1</van-col>
						<van-col span="14">001</van-col>
						<van-col span="5" class="l_flex">
							<van-checkbox checked-color="#278218" v-model="checked" shape="square"></van-checkbox>
						</van-col>
					</van-row>
					<van-row type="flex" class="body_row">
						<van-col span="5">2</van-col>
						<van-col span="14">002</van-col>
						<van-col span="5" class="l_flex">
							<van-checkbox checked-color="#278218" v-model="checked2" shape="square"></van-checkbox>
						</van-col>
					</van-row>
					
				</div>
			</div>
			<div class="right_box">
				<div class="img_box">
					<img src="../../../assets/img/fingerprint1.png" alt="">
				</div>
				<div class="action">
					<span>录入指纹</span>
					<span>删除指纹</span>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
import zHeader from "@/components/ZHeader.vue";
export default {
	name: 'inputFingerprint',
	components: {
		zHeader
	},
	data () {
		return {
			checked: false,
			checked2: false,
		}
	},
}
</script>

<style lang="less" scoped>
.main {
	background-color: #0a370a;
	padding: 10px 15px;
	margin: 8px;
	height: 330px;
	display: flex;
	justify-content: space-between;
	.left_box {
		width: 334px;
		height: 303px;
		// border: 1px solid #38920a;

		.l_header {
			text-align: center;
			height: 41px;
			line-height: 41px;
			border: 1px dashed #777;
			background-color: #0f560b;
		}
		.l_body {
			text-align: center;
			.body_row {
				height: 41px;
				line-height: 41px;
				border-bottom: 1px solid #38920a;
				.l_flex {
					display: flex;
					justify-content: center;
				}
			}
		}
	}
	.right_box {
		width: 248px;
		height: 303px;
		background-image: url('../../../assets/img/fingerprint_db.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
		.img_box {
			width: 147px;
			height: 158px;
			margin: 38px auto;
			background-image: url('../../../assets/img/fingerprint_border.png');
			background-size: 100% 100%;
			background-repeat: no-repeat;
			padding-top: 29px;
			box-sizing: border-box;
			img {
				display: block;
				width: 100px;
				height: 100px;
				margin: auto;
				border: 1px dashed #ccc;
			}
		}
		.action {
			display: flex;
			justify-content: space-between;
			padding: 0 4px;
			margin-top: 15px;
			span {
				width: 118px;
				height: 40px;
				line-height: 40px;
				text-align: center;
			}
			:nth-child(1) {
				background-color: #268118;
			}
			:nth-child(2) {
				background-color: #2c78a7;
			}
		}
	}
}
</style>