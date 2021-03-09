<template>
	<div class="mybox">
		<div class="main">
         <!-- 屏保轮播时间 -->
			<div class="m_item">
				<h3>屏保轮播时间</h3>
				<div class="action_box">
					<div class="progress">
						<span class="progress_bar"></span>
						<span class="progress_bar"></span>
						<span class="progress_bar"></span>
						<span class="progress_bar"></span>
						<span class="progress_bar"></span>
						<strong class="circle"></strong>
					</div>
					<div class="progress_text">
						<span>0</span>
						<span>5分钟</span>
						<span>10分钟</span>
						<span>15分钟</span>
						<span>20分钟</span>
						<span>25分钟</span>
					</div>
				</div>
			</div>
         <!-- 屏保轮播时间 -->

         <!-- 延时自动上锁时间 -->
         <div class="m_item">
				<h3>延时自动上锁时间</h3>
				<div class="action_box">
					<div class="progress">
						<span class="progress_bar progress_active"></span>
						<span class="progress_bar progress_active"></span>
						<span class="progress_bar"></span>
						<span class="progress_bar"></span>
						<span class="progress_bar"></span>
						<strong class="circle"></strong>
                  <div class="skill"></div>
					</div>
               
					<div class="progress_text">
						<span>0</span>
						<span>5分钟</span>
						<span>10分钟</span>
						<span>15分钟</span>
						<span>20分钟</span>
						<span>25分钟</span>
					</div>
				</div>
			</div>
         <!-- 延时自动上锁时间 -->


         <!-- 无操作自动退出时间 -->
         <div class="m_item">
				<h3>无操作自动退出时间</h3>
				<div class="action_box">
					<div class="progress">
						<span class="progress_bar progress_active"></span>
						<span class="progress_bar progress_active"></span>
						<span class="progress_bar"></span>
						<span class="progress_bar"></span>
						<span class="progress_bar"></span>
						<strong class="circle"></strong>
                  <div class="skill"></div>
					</div>
					<div class="progress_text">
						<span>0</span>
						<span>5分钟</span>
						<span>10分钟</span>
						<span>15分钟</span>
						<span>20分钟</span>
						<span>25分钟</span>
					</div>
				</div>
			</div>
         <!-- 无操作自动退出时间 -->
		</div>

	</div>
</template>

<script>
export default {
	data () {
		return {
			// key: value
		}
	},
}
</script>

<style lang="less" scoped>
.progress_active{
   background-color: #75fe08 !important;
}
.skill{
   width: 40%;
   height: 5px;
   background-color: #75fe08;
}
.main {
	padding: 0 115px;
	.m_item {
		h3 {
			font-weight: normal;
		}
		.action_box {
			position: relative;

			// .progress
			.progress_bar {
				position: absolute;
				bottom: 2;
				top: -4px;
				z-index: 99;
				// display: inline-block;
				// background-image: url('../../../assets/img/Progress bar.png');
				// background-size: 100% 100%;
				width: 5px;
				height: 12px;
				background-color: #749075;

				// bottom: 5;
			}
			.progress {
				position: relative;
				height: 5px;
				background-color: #749075;
				.circle {
					position: absolute;
					left: 38%;
					display: inline-block;
					height: 2.8125vw;
					width: 2.8125vw;
					border-radius: 50%;
					background-color: #75fe08;
					top: -6px;
					z-index: 100;
				}
				:nth-child(1) {
					left: 20%;
				}
				:nth-child(2) {
					left: 40%;
				}
				:nth-child(3) {
					left: 60%;
				}
				:nth-child(4) {
					left: 80%;
				}
				:nth-child(5) {
					left: 100%;
				}
			}
			.progress_text {
				position: relative;
				width: 100%;
				height: 21px;
				padding-top: 10px;
				span {
					position: absolute;
					font-size: 13px;
				}
				:nth-child(1) {
					left: 0;
				}
				:nth-child(2) {
					left: 13%;
				}
				:nth-child(3) {
					left: 33%;
				}
				:nth-child(4) {
					left: 53%;
				}
				:nth-child(5) {
					left: 73%;
				}
				:nth-child(6) {
					left: 94%;
					width: 50px;
				}
			}
		}
	}
}
</style>