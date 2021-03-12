<template>
	<!-- 查看枪支 -->
	<div class="mybox" style="padding-left:5px;">
		<div class="box">
			<div class="c_box">
				<div class="item_box" v-if="dataSource.length==0">
					<div class="i_tips no_cabinet"> 未添加枪支</div>
				</div>
            <div @click.stop="selectedCabinet(item.id)" :class="{'item_box':true,'item_box_active':item.id===currentId&&selectKey===1}" v-for="item in dataSource" :key="item.id">
               <div class="img_box">
                  <img :src="item.src" />
               </div>
					<div :class="{'i_tips':true,'i_tips_active':item.id===currentId&&selectKey===2}" @click.stop="viewCabinet(item.id)">
                  <span>{{item.name}}</span>
                  <span>{{item.code}}</span>
               </div>
				</div>
				

			</div>
		</div>
		<div class="aciton">
			<!-- 枪支信息 -->
			<div v-show="selectKey==1">
				<van-row class="a_info" type="flex" justify="space-between">
					<van-col span="5" class="t_center">弹仓编号</van-col>
					<van-col span="3" class="t_center">拨码位</van-col>
					<van-col span="3" class="t_center">弹仓容量</van-col>
					<van-col span="4" class="t_center">弹仓类型</van-col>
					<van-col span="5" class="t_center">所属柜体</van-col>
				</van-row>
				<!-- 没选枪支时候占位用 -->
				<div style="height:18px;" v-show="!acticeDataInfo.code"></div>
				<!-- 没选枪支时候占位用 -->
				<van-row class="a_info_content" type="flex" justify="space-between">
					<van-col span="5" class="t_center">{{acticeDataInfo.code}}</van-col>
					<van-col span="3" class="t_center">{{acticeDataInfo.num}}</van-col>
					<van-col span="3" class="t_center">{{acticeDataInfo.capacity}}</van-col>
					<van-col span="4" class="t_center">{{acticeDataInfo.type}}</van-col>
					<van-col span="5" style="color:#75FE08" class="t_center">{{acticeDataInfo.belong}}</van-col>
				</van-row>
			</div>
         <div v-show="selectKey==2">
				<van-row class="a_info" type="flex" justify="space-between">
					<van-col span="5" class="t_center">子弹总数量</van-col>
					<van-col span="3" class="t_center">已取</van-col>
					<van-col span="3" class="t_center">未取</van-col>
					<van-col span="4" class="t_center">弹仓容量</van-col>
					<van-col span="5" class="t_center">弹仓类型</van-col>
				</van-row>
				<!-- 没选枪支时候占位用 -->
				<div style="height:18px;" v-show="!acticeDataInfo.code"></div>
				<!-- 没选枪支时候占位用 -->
				<van-row class="a_info_content" type="flex" justify="space-between">
					<van-col span="5" class="t_center">{{acticeDataInfo.total}}</van-col>
					<van-col span="3" style="color:#75FE08" class="t_center">{{acticeDataInfo.taken}}</van-col>
					<van-col span="3" style="color:#0E9C00" class="t_center">{{acticeDataInfo.notTaken}}</van-col>
					<van-col span="4" class="t_center">{{acticeDataInfo.capacity}}</van-col>
					<van-col span="5" style="color:#75FE08" class="t_center">{{acticeDataInfo.type}}</van-col>
				</van-row>
			</div>
			<!-- 枪支信息 -->

			<!-- 底部按钮 -->
			<div class="footer_action">
				<span @click="addCabinet">添加弹仓</span>
				<span @click="editCabinet">编辑弹仓</span>
				<span @click="deleteCabinet">删除枪支</span>
            <span @click="$router.push({name:'systemSetup-tareCalibration'})">去皮校准</span>
				<span @click="$router.push({name:'systemSetup-viewMagazine'})">返回上级</span>
				
			</div>
			<!-- 底部按钮 -->
		</div>

		<!-- 添加弹框 -->
		<van-overlay :show="isAddModal" @click.stop="isAddModal=false">
			<div class="one_wrapper" @click.stop>
				<div class="block">
					<div class="one_title">{{cabinetForm.title}}</div>
					<div class="one_content">
						<div class="form_box">
							<div class="f_item">
								<span>弹仓编号</span>
								<input type="text" v-model="cabinetForm.code">
							</div>
							
							<div class="f_item">
								<span>拨&nbsp;码&nbsp;位</span>
								<input type="text" v-model="cabinetForm.num">
							</div>
							
							<div class="f_item">
								<span>弹仓容量</span>
								<input type="text" v-model="cabinetForm.capacity">
							</div>
							<div class="f_item">
								<span>枪支类型</span>
								<div style="display:flex;width: 240px;justify-content: space-between;">
									<van-checkbox shape="square" v-model="checked" checked-color="#278218">长枪</van-checkbox>
									<van-checkbox shape="square" checked-color="#278218">短枪</van-checkbox>
									<van-checkbox shape="square" checked-color="#278218">榴弹</van-checkbox>
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

		<!-- 弹框组件 -->
		<z-modal @handleCancel="handleCancel" @handleSubmit="handleSubmit" :modalConfig="modalConfig"></z-modal>
		<!-- 弹框组件 -->
	</div>
</template>

<script>
import zModal from "@/components/ZModal.vue";
import { EventBus } from "@/utils/eventBus";
export default {
	name: 'viewMagazineCabinet',
	components: {
		zModal
	},
	
	data () {
		return {
         selectKey:1,
			currentId: '',//当前选中的id
			isAddModal: false,
			checked: true,
			dataSource: [

			],
			// 新增，编辑弹框表单
			cabinetForm: {
				title: '添加枪支',
				code: '',
				name: '',
				num: '',
				gunNo: '',//
				personnel: '',
				personnelCode: '',
			},
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
	mounted () {
		// 监听保存头部保存按钮事件
		EventBus.$on("leftBtnClick", () => {
			this.modalConfig={
				isRestore: true,//弹框显示/隐藏
				isShowCancel: false,//是否显示取消按钮
				title: '保存弹仓',
				content: '已经成功上传弹仓！'
			}
		});
	},
	beforeDestroy () {
		EventBus.$off('leftBtnClick')
	},
	computed: {
		acticeDataInfo () {
			return this.dataSource.filter(item => item.id == this.currentId)[0] || {}
		},

	},
	methods: {
		// 添加
		addCabinet () {
			this.dataSource = [{
				id: '1',
				code: '这是弹仓编号',//编码
				name: '01弹仓',//名称
				num: 11,//拨号位
            capacity:10000,//弹仓容量
            type:'长枪',//弹仓类型
            belong:'01弹柜',//所属
				src: require('@/assets/img/zd.png'),//图片路径
            total:10000,//子弹总数
            taken:9000,//已取
            notTaken:1000,//未取
           
			},
			{
				id: '2',
				code: '12345678',
				name: '02弹仓',
				capacity:10000,
            type:'长枪',
            belong:'01弹柜',
				num: 11,
				src: require('@/assets/img/zd.png'),
				total:10000,
            taken:9000,
            notTaken:1000,
			},
			{
				id: '3',
				code: '12345678',
				name: '03弹仓',
				num: 11,
				src: require('@/assets/img/zd.png'),
				capacity:10000,
            type:'长枪',
            belong:'01弹柜',
            total:10000,
            taken:9000,
            notTaken:1000,
			},
			{
				id: '4',
				code: '12345678',
				name: '04弹仓',
				num: 11,
				src: require('@/assets/img/zd.png'),
				capacity:10000,
            type:'长枪',
            belong:'01弹柜',
            total:10000,
            taken:9000,
            notTaken:1000,
			},
			{
				id: '5',
				code: '12345678',
				name: '05弹仓',
				num: 11,
				src: require('@/assets/img/zd.png'),
				capacity:10000,
            type:'长枪',
            belong:'01弹柜',
            total:10000,
            taken:9000,
            notTaken:1000,
			},
			{
				id: '6',
				name: '06弹仓',
				code: '12345678',
				num: 11,
				src: require('@/assets/img/zd.png'),
				capacity:10000,
            type:'长枪',
            belong:'01弹柜',
            total:10000,
            taken:9000,
            notTaken:1000,
			},
			{
				id: '7',
				code: '12345678',
				name: '07弹仓',
				num: 11,
				src: require('@/assets/img/zd.png'),
				capacity:10000,
            type:'长枪',
            belong:'01弹柜',
            total:10000,
            taken:9000,
            notTaken:1000,
			},]
			this.isAddModal = true;
		},
		// 编辑
		editCabinet () {
			this.cabinetForm.title = '编辑枪支';
			this.isAddModal = true;
		},
		// 删除
		deleteCabinet () {
			this.modalConfig = {
				isRestore: true,//弹框显示/隐藏
				isShowCancel: true,//是否显示取消按钮
				title: '删除枪支',
				key: 2,//1保存  2删除
				content: '确定删除该枪支？',//弹框内容
			}
		},
		// 查看
		saveCabint () {
			this.modalConfig = {
				isRestore: true,//弹框显示/隐藏
				isShowCancel: false,//是否显示取消按钮
				title: '保存枪支',
				mask: true,//点遮罩关闭弹框
				key: 1,//1保存  2删除
				content: '已成功上传枪支！',//弹框内容
			}
		},
		// 弹框组件确定
		handleSubmit () {
			this.modalConfig.isRestore = false;
			if (this.modalConfig.key == 2) {
				this.modalConfig.content = '删除01枪支成功！';
				this.modalConfig.isRestore = true;
				this.modalConfig.isShowCancel = false;
				this.modalConfig.key = 3;
			}
		},
		// 弹框组件取消
		handleCancel () {
			this.modalConfig.isRestore = false;
		},
		// 选中枪支
		selectedCabinet (id) {
         this.currentId = id;
         this.selectKey=1;
      },
      // 选择弹仓
      viewCabinet(id){
         this.currentId = id;
         this.selectKey=2;
      }
	},
}
</script>

<style lang="less" scoped>
/deep/.van-checkbox__label {
	color: #fff;
}
.box {
	padding: 10px 58px 0 58px;
	
	// padding-right: 5px;

	height: 230px;
	overflow-y: auto;
	.c_box {
		display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
		.item_box {
			width: 108px;
			height: 108px;
			box-sizing: border-box;
			border: 1px solid #6b896b;
			margin-right: 4px;
			margin-bottom: 7px;
         .i_tips{
            background-image: url('../../../assets/img/cation_bot_img.png');
            background-size: 100% 100%;
             height: 34px;
             
             text-align: center;
            span {
               display: inline-block;
              
               width: 100%;
               font-size: 12px;
               
               
   }
         }
         .i_tips_active{
            background-image:none;
            background-color:#0e9c00;
         }
         .img_box{
            img{
               display: block;
               width:49.5px;
               height:53.5px;
               margin: auto;
               padding: 9px 0;
            }
         }
			.no_cabinet {
            line-height: 34px;
				margin-top: 72px;
			}
			
      }
      
		.item_box_active {
         
			border: 1px solid #6ce513;
		}
	}
}
.aciton {
	// padding-left: 17px;
	margin-top: 3px;
	.a_info {
		.t_center {
			text-align: center;
		}
	}
	.a_info_content {
		padding: 4px 0;
		.t_center {
			text-align: center;
		}
	}
	.footer_action {
		display: flex;
		align-items: center;
		margin-top: 2px;
		padding-left: 17px;
		span {
			display: inline-block;
			width: 93px;
			height: 30px;
			line-height: 30px;
			text-align: center;
			font-size: 14px;
			margin-right: 5px;
			// background-color: #316356;
			border: 1px solid #144831;
			box-sizing: border-box;
			background-image: url('../../../assets/img/Storeroom_Checked.png');
			background-size: 100% 100%;
		}
		.view_active {
			background-image: none;
			background-color: #1e4e32;
			color: #777;
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
		height: 280px;
		background-color: #256028;
		box-sizing: border-box;
		border: 1px solid #52b816;
		.one_title {
			height: 44px;
			line-height: 44px;
			text-align: center;
			border-bottom: 1px solid #52b816;
			// margin-bottom:10px;
		}
		.one_content {
			padding: 8px 50px 10px 50px;
			text-align: center;
			.form_box {
				// 
				overflow-y: auto;
				.f_item {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 15px;
					span {
						// width: 100px;
					}
					input {
						width: 236px;
						height: 28px;
						border: 1px solid #618963;
						line-height: 28px;
						text-indent: 0.5em;
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