<template>
	<div>
		<z-header></z-header>
		<div class="content">
			<div class="left_box">
				<div class="video_box">
               无图像
            </div>
            <div class="pwd_box">
               <div class="p_my">
                  <span>密钥：111111111</span>
                  <span @click="getKey">生成密钥</span>
               </div>
               <div class="p_code">设备编号：1234567890</div>
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

      <!-- 生成密钥弹框 -->
      <van-overlay :show="isShowKeyModal" @click.stop="isShowKeyModal=false">
			<div class="one_wrapper" @click.stop>
				<div class="block key_block" >
					<div class="one_title red">设备报警</div>
					<div class="one_content fs_one">
						<p>报警内容：1.温度过高！2.湿度异常！</p>
						<p>报警时间：2021-02-21  星期五  20:21:20</p>
						<div class="one_btns key_fot">
                     <span @click="clearAlarm">解除警报</span>
                  </div>
					</div>
				</div>
			</div>
		</van-overlay>
       <!-- 生成密钥弹框 -->

      <!-- 弹框 -->
      <van-overlay :show="isShowModal" @click.stop="isShowModal=false">
			<div class="one_wrapper" @click.stop>
				<div class="block">
					<div class="one_title ">正在认证</div>
					<div class="one_content">
						<span>正在申请授权开门，请稍后...</span>
						<div class="one_btns ">
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
	name: 'dynamicPwd',
	components: {
		zHeader
	},
   data() {
      return {
         isShowModal: false,
         isShowKeyModal:false,
      }
   },
   methods:{
      cancel(){
         this.isShowModal=false;
      },
      handleOk(){
         this.isShowModal=true;
      },
      // 生成密钥
      getKey(){
         this.isShowKeyModal=true;
      },
      //解除警报
      clearAlarm(){
         this.isShowKeyModal=false;
         this.$router.push({name:'keyManagement-verifyIdentidy',query:{name:'keyManagement-dynamicPwd'}})
      }
   }
}
</script>

<style lang="less" scoped>
.content{
   padding: 29px 63px;
   display: flex;
   justify-content: space-between;
}
.left_box {
	width: 256px;
	height: 303px;
	// border: 1px solid;
	background-image: url('../../../assets/img/fingerprint_db.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
   padding: 1px;
	.video_box{
      height: 192px;
      line-height: 192px;
      text-align: center;
      background-color: #000;
      color: #f7f4f4;
   }
   .pwd_box{
      padding: 0 10px;
      div{
         height: 42.5px;
         text-indent: .3em;
         border-bottom: 1px solid #3a9a11;

      }
      .p_my{
         display: flex;
         justify-content: space-between;
         align-items: flex-end;
         padding-bottom: 5px;
         :nth-child(2){
            width: 62px;
            height: 23px;
            line-height: 23px;
            text-align: center;
            background-color: #d38b42;
         }
      }
      .p_code{
         line-height: 57px;
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
.red{
   background-color: #f54040 !important;
}
.key_block{
   width: 410px !important;
   height: 280px !important;
}
.fs_one{
   font-size: 14px !important;
   padding: 0 !important;
   text-indent: 1em ;
   text-align: left !important;
   height: 220px;
   position: relative;
}
.key_fot{
   position: absolute;
   bottom: 0px;
   padding-top: 10px !important;
   padding-bottom: 10px !important;
   width: 100%;
    text-align: center;
    text-indent: 0;
}
</style>