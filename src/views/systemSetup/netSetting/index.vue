<template>
	<div class="mybox ">
		<div class="main">
			<div class="main_box">
				<div class="m_item">
					本机IP：192.168.1.249
				</div>
				<div class="m_item">
					服务器IP：192.168.1.249
				</div>
				<div class="m_item">
					服务器端口号：6666
				</div>
            <div class="m_item">
					通话服务器IP：192.168.1.249
				</div>
            <div class="m_item">
					通话账号：6666
				</div>
			</div>

         <!-- 底部按钮 -->
			<div class="footer_action">
				<span @click="save">保存</span>
				<span @click="openResetModal">重置</span>
			</div>
			<!-- 底部按钮 -->

         <!-- 保存成功弹框 -->
			<van-overlay :show="isShowModal" @click.stop="isShowModal=false">
			<div class="one_wrapper" @click.stop>
				<div class="block">
					<div class="one_title">保存设置</div>
					<div class="one_content">
						<span>保存成功！</span>
						<div class="one_btns">
                     <span @click="isShowModal=false">确定</span>
                     <!-- <span @click="isShowModal=false">取消</span> -->
                  </div>
					</div>
				</div>
			</div>
		</van-overlay>
       <!-- 保存成功弹框 -->

       <z-modal @handleSubmit="handleSubmit" @handleCancel="handleCancel"  :modalConfig="modalConfig"></z-modal>
		</div>
		
	</div>
</template>

<script>
import zModal from "@/components/ZModal.vue";
export default {
	name: 'netSetting',
	components: {
      zModal
	},
	data () {
		return {
         isShowModal:false,
         // 重置弹框配置
         modalConfig:{
            isRestore:false,
            isShowCancel:true,
				title: '重置设置',
            key:1,
				content: '是否重置设置？'
         }
		}
	},
	methods: {
      // 保存按钮
		save(){
         this.isShowModal=true;
      },
      // 打开重置弹框
      openResetModal(){
         this.modalConfig.isRestore=true;
      },
      handleSubmit(){
         this.modalConfig.isRestore=false;
      },
      handleCancel(){
         this.modalConfig.isRestore=false;
      }

	},
}
</script>

<style lang="less" scoped>
.main {
	padding: 0 90px;
   height: 310px;
	box-sizing: border-box;
	// margin-top: 15px;
	.main_box {
      padding-bottom: 50px;
      padding-top: 10px;
		.m_item {
			font-size: 15px;
			height: 42.5px;
			line-height: 55px;
			border-bottom: 1px solid #348b09;
			text-indent: 0.5em;
		}
   }
   .footer_action {
		display: flex;
		justify-content: center;
		align-items: center;
		span {
			display: inline-block;
			width: 93px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			font-size: 14px;
			// background-color: #316356;
			border: 1px solid #144831;
			box-sizing: border-box;
			background-image: url('../../../assets/img/Storeroom_Checked.png');
			background-size: 100% 100%;
      }
      :nth-child(1){
         margin-right: 20px;
      }
      :nth-child(2){
         margin-left: 20px;
      }
	}

}
.one_wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
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
            }
            :last-child{
               background-color: #f54040;
               margin-left: 16px;
            }
            :first-child{
               background-color: #2b7fad;
            }
         }
      }
	}
}
</style>