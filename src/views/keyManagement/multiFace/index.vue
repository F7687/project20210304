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
		</div>
	</div>
</template>

<script>
import zHeader from "@/components/ZHeader.vue";
export default {
	name: 'multiFace',
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
		width: 325px;
		height: 300px;
		box-sizing: border-box;
		margin: 25px auto;
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
			height: 57px;

			// line-height: px;

			text-align: center;
			.tip_item {
				position: relative;
				background-color: #fff;
				width: 50px;
				height: 57px;
				.tip_item_footer {
					position: absolute;
					bottom: 0;
					left: 0;
					width: 100%;
					height: 25px;
               text-align: left;
               box-sizing: border-box;
					background-color: #7f7f7f;
               span{
                  display: block;
                  font-size: 9px;
                  padding: 1px;
                  text-indent: .3em;
                  color: #fff;
                  -webkit-text-size-adjust: none;
               }
				}
			}
		}
	}
}
@media all and (max-width:1100px){
    .content .video_box{
       width: 382px;
    }
    .content .video_box .v_tips .tip_item{
       width: 60px;
      height: 63px;
    }
    .content .video_box .v_tips .tip_item .tip_item_footer {
       height: 33px;
    }
    .content .video_box .v_tips .tip_item .tip_item_footer span{
       padding: 0px; 
       text-indent: 0em;
    }
}
</style>