<template>
	<div>
		<z-header></z-header>
		<div class="main">
			<div class="m_box">
				<router-link :to="{name:'keyManagement-verification'}">
					<span>
						<strong>1</strong>
						打开上层
					</span>
				</router-link>

				<span>
					<strong>2</strong>
					打开下层
				</span>
			</div>
		</div>
	</div>
</template>

<script>
import zHeader from "@/components/ZHeader.vue";
export default {
	name: 'keyManagement',
	components: {
		zHeader
	},
	methods: {
		openUpperLayer () {
			this.$router.push({ name: 'keyManagement-verification' })
		}
	},
}
</script>

<style lang="less" scoped>
.main {
	.m_box {
		width: 337px;
		height: 256px;
		box-sizing: border-box;
		margin: 48px auto;
		background-color: #0a3b0b;
		padding-top: 6px;
		a{
			color: #ccc;
		}
		span {
			display: block;
			width: 240px;
			height: 98px;
			line-height: 98px;
			text-align: center;
			font-size: 28px;
			background-color: #0e6422;
			margin: 16px auto;
			strong {
				display: inline-block;
				width: 37px;
				height: 37px;
				line-height: 37px;
				border-radius: 50%;
				background-color: #218a08;
			}
		}
	}
}
</style>