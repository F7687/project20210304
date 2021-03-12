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
					<div v-if="dataSource.length!=0">
						<van-row @click="selectedData(item.id)" v-for="item in dataSource" :key="item.id" class="m_tb m_tb_content" type="flex" justify="center">
						<van-col span="5">{{item.code}}</van-col>
						<van-col span="5">{{item.name}}</van-col>
						<van-col span="5">{{item.cardId}}</van-col>
						<van-col span="5">{{item.type}}</van-col>
						<van-col span="4" style="display:flex;justify-content: center;">
							<van-checkbox shape="square" v-model="item.checked" checked-color="#278218"></van-checkbox>

						</van-col>
					</van-row>
					</div>
					
					<van-row v-else style="textAlign:left;text-indent: 1em;" class="m_tb m_tb_content" type="flex">
						未添加库室信息。
					</van-row>

				</div>

				<!-- 列表数据 -->
			</div>

			<!-- 底部按钮 -->
			<div class="footer_action">
				<span @click="openAddModal">添加库室</span>
				<span>编辑库室</span>
				<span>删除库室</span>
				<span @click="viewCation">查看库室</span>
				<span>保存库室</span>
			</div>
			<!-- 底部按钮 -->

			<!-- 添加弹框 -->
			<van-overlay :show="isAddModal" @click.stop="isAddModal=false">
				<div class="one_wrapper" @click.stop>
					<div class="block">
						<div class="one_title">添加库室</div>
						<div class="one_content">
							<div class="form_box">
								<div class="f_item">
									<span>库室编号</span>
									<input type="text">
								</div>
								<div class="f_item">
									<span>库室名称</span>
									<input type="text">
								</div>
								<div class="f_item">
									<span>设&nbsp;备&nbsp;ID</span>
									<input type="text">
								</div>
								<div class="f_item">
									<span>库室类型</span>
									<div style="display:flex;width: 240px;justify-content: space-between;">
										<van-checkbox shape="square" v-model="checked" checked-color="#278218">枪室</van-checkbox>
									<van-checkbox shape="square" checked-color="#278218">弹库</van-checkbox>
									<van-checkbox shape="square" checked-color="#278218">枪室</van-checkbox>
									</div>
								</div>
							</div>
							<div class="one_btns">
								<span @click="isAddModal=false">确定</span>
								<span @click="isAddModal=false">取消</span>
							</div>
						</div>
					</div>
				</div>
			</van-overlay>
			<!-- 添加弹框 -->

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
			isAddModal: false,
			checked:true,
			// 数据源
			dataSource:[
				
			]
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
		// 打开添加柜体弹框
		openAddModal () {
			this.dataSource=[
				{
					id:'1',
					code:'12345678',
					name:'01军械库',
					cardId:'1',
					type:'枪库',
					checked:false
				},
				{
					id:'2',
					code:'12345678',
					name:'02弹药库',
					cardId:'1',
					type:'弹库',
					checked:true
				},
			]
			this.isAddModal = true
		},
		// 选择
		selectedData(id){
			for(let i=0;i<this.dataSource.length;i++){
				let item=this.dataSource[i];
				if(item.id===id){
					item.checked=true;
				}else item.checked=false;
			}
		},
		// 跳转查看柜体
		viewCation(){
			let data=this.dataSource.filter(item=>item.checked)[0];
			// 判断是跳转枪库还是跳转弹库
			if(data.type=='枪库'){
				this.$router.push({
				name:'systemSetup-viewCabinet',
				query:{name:'systemSetup-warehouseSetting'}
			})
			}else {
				this.$router.push({name:'systemSetup-viewMagazine'})
			}
			
		},
		

	},
}
</script>

<style lang="less" scoped>
/deep/.van-checkbox__label{
	color:#fff;
}
.main {
	padding: 0 15px;
	height: 310px;
	box-sizing: border-box;
	// margin-top: 15px;
	.main_box {
		// padding-top: 10px;
		.m_body {
			height: 245px;
			overflow-y: auto;
			.m_tb_content {
				border-bottom: 1px solid #41a20a;
			}
		}
		.m_tb {
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
		width: 410px;
		height: 279.5px;
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
			padding-top: 5px;
			padding: 8px 50px 10px 50px;
			text-align: center;
			.form_box{
				.f_item{
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 16px;
					span{
						// width: 100px;
					}
					input{
						width: 236px;
						height: 28px;
						border: 1px solid #618963;
						line-height: 28px;
						text-indent: .5em;
						background-color: #256028;
						
					}
				}
			}
			.one_btns {
				// padding: 20px 0;
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
					background-color: #268118;
				}
			}
		}
	}
}
</style>