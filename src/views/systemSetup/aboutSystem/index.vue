<template>
	<div class="mybox ">
		<div class="main">
			<div class="main_box">
				<div class="m_item">
					软件版本:13.3.1
				</div>
				<div class="m_item">
					型号名称:钥匙柜
				</div>
				<div class="m_item">
					型号号码:MT222CH/A
				</div>
			</div>

			<!-- 底部按钮 -->
			<div class="footer_action">
				<span @click="handleRestore">恢复设置</span>
				<span @click="handleReboot">重启设备</span>
				<span @click="checkUpdates">检查更新</span>
				<span @click="handleDebugging">系统调试</span>
			</div>
			<!-- 底部按钮 -->
		</div>
		<!-- 恢复设置弹框 -->
		<!-- <van-overlay :show="isRestore" @click.stop="isRestore=false">
			<div class="one_wrapper" @click.stop>
				<div class="block">
					<div class="one_title">恢复设置</div>
					<div class="one_content">
						<span>是否确定恢复设置?</span>
						<div class="one_btns">
                     <span @click="isRestore=false">确定</span>
                     <span @click="isRestore=false">取消</span>
                  </div>
					</div>
				</div>
			</div>
		</van-overlay> -->
		<z-modal @handleSubmit="handleSubmit" @handleCancel="handleCancel"  :modalConfig="modalConfig"></z-modal>
		<!-- 恢复设置弹框 -->
	</div>
</template>

<script>
import zModal from "./modal.vue";
export default {
	name: 'aboutSystem',
	components: {
		zModal
	},
	data () {
		return {
			isRestore: false,
			modalConfig: {
            isRestore:false,//弹框显示/隐藏
            isShowCancel:true,//是否显示取消按钮
				title: '恢复设置',
            key:1,
				content: '是否确定恢复设置？'
			}
		}
	},
	methods: {
		handleSubmit (key) {
			
         if(key==3){
            if(this.modalConfig.isShowCancel==false){
					this.modalConfig.isRestore = false;
					return
            }
            this.modalConfig.content='正在更新系统：80%'
            setTimeout(() => {
					this.modalConfig.isShowCancel=false;
					this.modalConfig.content='系统更新完成，请重启设备'
               // this.modalConfig.isRestore = false;
            }, 2000);
            return
         }
         this.modalConfig.isRestore = false;
		},
		handleCancel () {
			this.modalConfig.isRestore = false;
		},
		handleRestore () {
         this.modalConfig={
				isRestore:false,
				isShowCancel:true,
				title: '恢复设置',
            key:1,
				content: '是否确定恢复设置？'
         }
			this.modalConfig.isRestore = true;
		},

		handleReboot () {
         this.modalConfig={
				isRestore:false,
				isShowCancel:true,
				title: '重启设备',
            key:2,
				content: '是否确定重启设备？'
         }
			this.modalConfig.isRestore = true;
		},
		checkUpdates () {
         this.modalConfig={
				isRestore:false,
				isShowCancel:true,
				title: '检查更新',
            key:3,
				content: '正在检查更新，请稍后...'
         }
			this.modalConfig.isRestore = true;
         setTimeout(() => {
            this.modalConfig.content='发现新版本14.0，是否立即更新？'
         }, 1000);
         
		},
		handleDebugging () {
         this.$router.push({name:'systemDebugging-netSetting',query:{name:'systemSetup-aboutSystem'}})
		},
	},
}
</script>

<style lang="less" scoped>
.main {
	padding: 0 60px;
	height: 310px;
	box-sizing: border-box;
	margin-top: 15px;
	.main_box {
		padding-bottom: 130px;
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
		justify-content: space-between;
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
	}
}
</style>