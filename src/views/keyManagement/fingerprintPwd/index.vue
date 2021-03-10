<template>
	<div>
		<z-header></z-header>
		<div class="content">
			<div class="left_box">
				<div class="img_box">
					<img src="../../../assets/img/fingerprint1.png" alt="">
				</div>
            <div class="info_box">
               <div class="i_item">姓名：张三</div>
               <div class="i_item">角色：超级管理员</div>
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
      <!-- 弹框 -->
      <van-overlay :show="isShowModal" @click.stop="isShowModal=false">
			<div class="one_wrapper" @click.stop>
				<div class="block">
					<div class="one_title">正在认证</div>
					<div class="one_content">
						<span>正在申请授权开门，请稍后...</span>
						<div class="one_btns">
                     <span @click="cancel">取消</span>
                  </div>
					</div>
				</div>
			</div>
		</van-overlay>
       <!-- 弹框 -->
	</div>
</template>

<script>
import zHeader from "@/components/ZHeader.vue";
export default {
	name: 'fingerprintPwd',
	components: {
		zHeader
	},
   data() {
      return {
         isShowModal: true,
      }
   },
   methods:{
      cancel(){
         this.isShowModal=false;
      },
      handleOk(){
         this.isShowModal=true;
      }
   }
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
		margin: 26px auto;
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
   .info_box{
      padding: 0 8px;
      .i_item{
         height: 42.5px;
         line-height: 60px;
         text-indent: .3em;
         border-bottom: 1px solid #3a9a11;
         color: #fff;
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
.one_wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
   font-size: 15px;
	.block {
		width: 298px;
		height: 162px;
		background-color: #256028;
      box-sizing: border-box;
      border:1px solid #52b816;
      .one_title{
         
         height: 43px;
         line-height: 43px;
         text-align: center;
         border-bottom: 1px solid #52b816;
      }
      .one_content{
         padding-top: 25px;
         text-align: center;
         .one_btns{
            padding: 20px 0;
            margin-top: 10px;
            span{
               display: inline-block;
               width: 121px;
               height: 36px;;
               line-height: 36px;
               text-align: center;
               background-color: #f54040;
            }
            // :last-child{
            //    background-color: #f54040;
            //    margin-left: 16px;
            // }
            // :first-child{
            //    background-color: #2b7fad;
            // }
         }
      }
	}
}
</style>