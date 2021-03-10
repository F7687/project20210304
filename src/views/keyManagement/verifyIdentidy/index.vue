<template>
	<div>
      <z-header></z-header>
		<div class="content">
			<div class="left_box">
				<div class="img_box">
					<img src="../../../assets/img/fingerprint1.png" alt="">
				</div>
            <div class="tips_box">
               <p>提示：指纹验证失败</p>
               <p>提示：密码验证失败</p>
            </div>
			</div>
			<div class="right_box">
				<div class="psw_box">
					*********
				</div>
				<div class="num_box">
					<span class="num_item">1</span>
					<span class="num_item">2</span>
					<span class="num_item">3</span>
					<span class="num_item">4</span>
					<span class="num_item">5</span>
					<span class="num_item">6</span>
					<span class="num_item">7</span>
					<span class="num_item">8</span>
					<span class="num_item">9</span>
					<span class="num_item">删除</span>
					<span class="num_item">0</span>
					<span class="num_item" @click="handleOk">确定</span>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import zHeader from "@/components/ZHeader.vue";
export default {
	name: 'verifyIdentidy',
   components: {
		zHeader
	},
	data () {
		return {

		}
	},
	methods: {

	},
}
</script>

<style lang="less" scoped>
.content{
   padding: 29px 68px;
   display: flex;
   justify-content: space-between;
}
.left_box {
	width: 245px;
	height: 303px;
	// border: 1px solid;
	background-image: url('../../../assets/img/fingerprint_db.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	.img_box {
		width: 147px;
		height: 158px;
		margin: 57px auto;
      margin-bottom: 5px;
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
			// border: 1px dashed #ccc;
		}
      
	}
   .tips_box{
      text-align: center;
      padding-top: 10px;
      p{
         margin:0;
         font-size: 12px;
         color: red;
         line-height: 20px;
         
      }
   }
}

.right_box {
	width: 245px;
	height: 303px;
	padding: 10px;
	box-sizing: border-box;
	background-image: url('../../../assets/img/fingerprint_db.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	.psw_box {
		width: 218px;
		height: 34px;
		line-height: 34px;
		margin: auto;
		box-sizing: border-box;
		background-color: #054812;
		outline: none;
		border: 1px solid #3a9a11;
		margin-bottom: 10px;
		text-indent: 1em;
		font-size: 15px;
		color: #fff;
	}
	.num_box {
		display: flex;
		flex-wrap: wrap;

		.num_item {
			display: inline-block;
			justify-content: space-around;
			width: 67px;
			height: 57px;
			line-height: 57px;
			text-align: center;
			border: 1px dashed #999;
			margin-right: 4px;
			margin: auto;
			color: #fff;
			font-size: 17px;
		}
	}
}
</style>