<template>
	<div>
		<z-header></z-header>
		<div class="content">
			<div class="video_box">
				<div class="v_main">无图像</div>
				<div class="v_tips">
					<div class="tip_item">
						<span class="tip_item_footer">
							<span>张三</span>
							<span>超级管理员</span>
						</span>
					</div>
					<div class="tip_item">
						<span class="tip_item_footer">
							<span>张三</span>
							<span>超级管理员</span>
						</span>
					</div>
					<div class="tip_item">
						<span class="tip_item_footer">
							<span>张三</span>
							<span>超级管理员</span>
						</span>
					</div>
					<div class="tip_item">
						<span class="tip_item_footer">
							<span>张三</span>
							<span>超级管理员</span>
						</span>
					</div>
					<div class="tip_item">
						<span class="tip_item_footer">
							<span>张三</span>
							<span>超级管理员</span>
						</span>
					</div>
					<div class="tip_item">
						<span class="tip_item_footer">
							<span>张三</span>
							<span>超级管理员</span>
						</span>
					</div>
				</div>
			</div>
			<div class="right_box">
				<div class="psw_box"   >
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
               <span class="num_item">确定</span>
            </div>

			</div>
		</div>
	</div>
</template>

<script>
import zHeader from "@/components/ZHeader.vue";
export default {
	name: 'facePwd',
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
	display: flex;
	justify-content: space-between;
	margin: 25px;
	.video_box {
		// display: inline-block;

		text-align: center;
		width: 325px;
		height: 303px;
		box-sizing: border-box;

		background-image: url('../../../assets/img/Video_call.png');
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
			justify-content: space-between;
			height: 63px;

			// line-height: px;

			text-align: center;
			.tip_item {
				position: relative;
				background-color: #fff;
				width: 50px;
				height: 60px;
				margin-bottom: 3px;
				.tip_item_footer {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					height: 30px;
					text-align: left;
					box-sizing: border-box;
					background-color: #7f7f7f;

					span {
						display: block;
						font-size: 9px;
						padding: 1px;
						text-indent: 0.3em;
						color: #fff;
						-webkit-text-size-adjust: none;
					}
				}
			}
		}
	}
	.right_box {
		width: 240px;
		height: 303px;
      padding: 10px;
      box-sizing: border-box;
		background-image: url('../../../assets/img/fingerprint_db.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
      .psw_box{
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
      .num_box{
         display: flex;
         flex-wrap: wrap;

         .num_item{
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
}
@media all and (max-width: 1100px) {
	.content .video_box .v_tips .tip_item .tip_item_footer span {
		padding: 0px;
		text-indent: 0em;
		-webkit-transform-origin-x: 0;
		-webkit-transform: scale(0.8);
		white-space: nowrap;
	}
}
</style>