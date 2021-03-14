<template>
	<!-- 去皮校准 -->
	<div class="mybox main" style="padding-left:5px;">
		<div class="m_left">
			<input placeholder="输入采集数量" type="text">
			<div class="m_action">
				<span>去皮</span>
				<span>子弹校准</span>
				<span  @click="save">完成校准</span>
				<span>返回上级</span>
			</div>
			<div class="m_tips">
				<p>操作说明</p>
				<p>1、保持空弹仓，点击去皮按钮；</p>
				<p>2、然后输入子弹数并放入相应采
					集子弹数，如：10；</p>
				<p>3、最后点击子弹校准按钮；</p>
				<p>4、此时就能得出单颗子弹重量，
					并显示在右方。</p>
			</div>
		</div>
		<div class="m_right">
         <p>弹仓编号：123456789；</p>
         <p>弹仓类型：03式步枪弹药；</p>
         <p>子弹数量：10000；</p>
         <p>子弹重量：4g；</p>
		</div>
      <!-- 弹框组件 -->
		<z-modal @handleSubmit="handleSubmit" :modalConfig="modalConfig"></z-modal>
		<!-- 弹框组件 -->
	</div>
</template>

<script>
import zModal from "@/components/ZModal.vue";
export default {
   name: 'tareCalibration',
   components: {
		zModal
   },
   data() {
      return {
         // 弹框配置
			modalConfig: {
				isRestore: false,//弹框显示/隐藏
				isShowCancel: false,//是否显示取消按钮
				title: '',
				key: 1,//1保存  2删除
				content: '',//弹框内容
			}
      }
   },
   methods: {
      handleSubmit() {
         this.modalConfig.isRestore=false;
      },
      // 完成校准
      save(){
         this.modalConfig.title='完成校准';
         this.modalConfig.content='子弹校准成功！';
         this.modalConfig.isRestore=true;
      }
   },
}
</script>

<style lang="less" scoped>

.main {
	display: flex;
	.m_left {
		width: 217px;
		padding-left: 23px;
		padding-top: 25px;
		input {
			width: 201px;
			height: 31px;
			text-align: center;
			box-sizing: border-box;
		}
		.m_action {
			margin-top: 17.5px;
			span {
				display: inline-block;
				width: 93px;
				height: 30px;
				line-height: 30px;
				text-align: center;
				font-size: 14px;
				margin-right: 15px;
				// background-color: #316356;
				border: 1px solid #144831;
				box-sizing: border-box;
				background-image: url('../../../assets/img/Storeroom_Checked.png');
				background-size: 100% 100%;
				margin-bottom: 15px;
			}
      }
      .m_tips{
         padding-right: 9px;
         p{
            margin: 0;
            line-height: 20px;
            color: #888;
            margin-top: 4px;
         }
         :nth-child(1){
            margin-top: 0;
         }
      }
	}
	.m_right {
		width: 264px;
		height: 312px;
		box-sizing: border-box;
		padding-left: 10px;
      margin-top: 10px;
      background-image: url('../../../assets/img/Bullet_information_background.png');
      background-size: 100%;
      border-bottom: 1px solid rgb(43, 105, 15);
      p{
         line-height: 20px;
         margin-top: 10px;
         font-size: 14px;
      }
	}
}
</style>