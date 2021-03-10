<template>
	<div class="mybox ">
		<div class="main">
			<div class="main_box">
				<!-- 表格头部 -->
				<van-row class="m_tb m_header" type="flex" justify="center">
					<van-col span="5">库室编号</van-col>
					<van-col span="5">库室名称</van-col>
					<van-col span="5">设备ID</van-col>
					<van-col span="5">库室类型</van-col>
					<van-col span="4">选择</van-col>
				</van-row>
				<!-- 表格头部 -->

				<!-- 列表数据 -->
				<div class="m_body">
					<van-row v-if="false" class="m_tb m_tb_content" type="flex" justify="center">
					<van-col span="5">001</van-col>
					<van-col span="5">测试名称</van-col>
					<van-col span="5">Id001</van-col>
					<van-col span="5">Stirng</van-col>
					<van-col span="4"></van-col>
				</van-row>
				<van-row v-else style="textAlign:left;text-indent: 1em;" class="m_tb m_tb_content" type="flex" >
					未添加库室信息。
				</van-row>
				
				</div>
				
				<!-- 列表数据 -->
			</div>

			<!-- 底部按钮 -->
			<div class="footer_action">
				<span>添加库室</span>
				<span>编辑库室</span>
				<span>删除库室</span>
				<span>查看库室</span>
				<span>保存库室</span>
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

			<!-- <z-modal @handleSubmit="handleSubmit" @handleCancel="handleCancel"  :modalConfig="modalConfig"></z-modal> -->
		</div>

	</div>
</template>

<script>
// import zModal from "@/components/ZModal.vue";
export default {
	name: 'warehouseSetting',
	components: {
		// zModal
	},
	data () {
		return {
			isShowModal: false,
			// 重置弹框配置
			// modalConfig:{
			//    isRestore:false,
			//    isShowCancel:true,
			// 	title: '重置设置',
			//    key:1,
			// 	content: '是否重置设置？'
			// }
		}
	},
	methods: {
		// 保存按钮
		save () {
			this.isShowModal = true;
		},
		// 打开重置弹框
		openResetModal () {
			this.modalConfig.isRestore = true;
		},
		handleSubmit () {
			this.modalConfig.isRestore = false;
		},
		handleCancel () {
			this.modalConfig.isRestore = false;
		}

	},
}
</script>

<style lang="less" scoped>
.main {
	padding: 0 15px;
	height: 310px;
	box-sizing: border-box;
	// margin-top: 15px;
	.main_box {
		
		// padding-top: 10px;
		.m_body{
			height: 245px;
			overflow-y: auto;
			.m_tb_content{
			border-bottom: 1px solid #41a20a;
		}
		}
		.m_tb{
			height: 40px;
			line-height: 40px;
			text-align: center;
		}
		.m_header {
			
		}
		
	}
	.footer_action {
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin-top: 5px;
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
		border: 1px solid #52b816;
		.one_title {
			height: 43px;
			line-height: 43px;
			text-align: center;
			border-bottom: 1px solid #52b816;
		}
		.one_content {
			padding-top: 25px;
			text-align: center;
			.one_btns {
				padding: 20px 0;
				margin-top: 10px;
				span {
					display: inline-block;
					width: 121px;
					height: 36px;
					line-height: 36px;
					text-align: center;
				}
				:last-child {
					background-color: #f54040;
					margin-left: 16px;
				}
				:first-child {
					background-color: #2b7fad;
				}
			}
		}
	}
}
</style>