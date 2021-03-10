<template>
	<div>
		<z-header />
		<div class="main">
			<div class="left_box">
				<div class="info_item">
					<span class="i_label">姓名：</span>
					<span class="i_input">张三</span>
				</div>
				<div class="info_item">
					<span class="i_label">编号：</span>
					<span class="i_input">10001</span>
				</div>
				<div class="info_item">
					<span class="i_label">组别：</span>
					<span class="i_input">A组</span>
				</div>
				<div class="info_item">
					<span class="i_label">角色：</span>
					<span class="i_input">部长</span>
				</div>
				<div class="info_item">
					<span class="i_label">权限：</span>
					<span class="i_input">超级管理员</span>
				</div>
				<div class="info_item">
					<span class="i_label">密码：</span>
					<span class="i_input i_input_pwd">******</span>
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
				<div class="btns">
					<span>录入密码</span>
					<span>删除密码</span>
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
		background-image: url('../../../assets/img/fingerprint_db.png');
		background-size: 100% 100%;
		background-repeat: no-repeat;
      .psw_box{
         width: 210px;
         height: 34px;
         line-height: 34px;
         margin: auto;
         box-sizing: border-box;
         background-color: #054812;
         outline: none;
         border: 1px solid #3a9a11;
         margin-bottom: 5px;
         text-indent: 1em;
         font-size: 15px;
			color: #fff;
			box-sizing: border-box;
      }
      .num_box{
         display: flex;
         flex-wrap: wrap;
			margin: 0 20px;
         .num_item{
            display: inline-block;
            justify-content: space-around;
            width: 65px;
            height: 49px;
            line-height: 49px;
            text-align: center;
            border: 1px dashed #999;
            margin-right: 4px;
            margin: auto;
            color: #fff;
            font-size: 17px;
            margin-bottom: 2px;
         }
		}
		.btns{
				padding: 5px;
				display: flex;
				justify-content: space-between;
				span{
					display: inline-block;
					width: 117px;
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
</style>