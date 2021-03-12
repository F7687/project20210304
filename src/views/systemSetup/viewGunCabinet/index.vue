<template>
	<!-- 查看枪支 -->
	<div class="mybox" style="padding-left:5px;">
		<div class="box">
			<div class="c_box">
				<div class="item_box" v-if="dataSource.length==0">
					<span class="no_cabinet"> 未添加枪支</span>
				</div>

				<div @click="selectedCabinet(item.id)" :class="{'item_box':true,'item_box_active':item.id===currentId}" v-for="item in dataSource" :key="item.id">
					<div class="img_box" :style="{backgroundImage: 'url(' + item.src + ')'}">

					</div>
					<span :class="{not_in:item.status==0}"> {{item.name}}</span>
				</div>

			</div>
		</div>
		<div class="aciton">
			<!-- 枪支信息 -->
			<div>
				<van-row class="a_info" type="flex" justify="space-between">
					<van-col span="5" class="t_center">枪支编号</van-col>
					<van-col span="3" class="t_center">枪支名称</van-col>
					<van-col span="3" class="t_center">拨码位</van-col>
					<van-col span="4" class="t_center">枪位号</van-col>
					<van-col span="5" class="t_center">所属人</van-col>
				</van-row>
				<!-- 没选枪支时候占位用 -->
				<div style="height:18px;" v-show="!acticeDataInfo.code"></div>
				<!-- 没选枪支时候占位用 -->
				<van-row class="a_info_content" type="flex" justify="space-between">
					<van-col span="5" class="t_center">{{acticeDataInfo.code}}</van-col>
					<van-col span="3" class="t_center">{{acticeDataInfo.name}}</van-col>
					<van-col span="3" class="t_center">{{acticeDataInfo.num}}</van-col>
					<van-col span="4" class="t_center">{{acticeDataInfo.gunNo}}</van-col>
					<van-col span="5" class="t_center">{{acticeDataInfo.personnel}}</van-col>
				</van-row>
			</div>
			<!-- 枪支信息 -->

			<!-- 底部按钮 -->
			<div class="footer_action">
				<span @click="addCabinet">添加枪支</span>
				<span @click="editCabinet">编辑枪支</span>
				<span @click="deleteCabinet">删除枪支</span>
				<span @click="$router.push({name:'systemSetup-viewCabinet'})">返回上级</span>
				<span @click="saveCabint">保存枪支</span>
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
								<span>枪支编号</span>
								<input type="text" v-model="cabinetForm.code">
							</div>
							<div class="f_item">
								<span>枪支名称</span>
								<input type="text" v-model="cabinetForm.name">
							</div>
							<div class="f_item">
								<span>拨&nbsp;码&nbsp;位</span>
								<input type="text" v-model="cabinetForm.num">
							</div>
							<div class="f_item">
								<span>抢&nbsp;位&nbsp;号</span>
								<input type="text" v-model="cabinetForm.gunNo">
							</div>
							<div class="f_item">
								<span>所属人员</span>
								<input type="text" v-model="cabinetForm.personnel">
							</div>
							<div class="f_item">
								<span>人员编号</span>
								<input type="text" v-model="cabinetForm.personnelCode">
							</div>
							<div class="f_item" style="align-items: end;">
								<span>人员指纹</span>
								<div class="zw_box">
									<div>
										<img src="../../../assets/img/fingerprint1.png" />
									</div>
								</div>
							</div>
							<div class="f_item">
								<span>枪支类型</span>
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

		<!-- 弹框组件 -->
		<z-modal @handleCancel="handleCancel" @handleSubmit="handleSubmit" :modalConfig="modalConfig"></z-modal>
		<!-- 弹框组件 -->
	</div>
</template>

<script>
import zModal from "@/components/ZModal.vue";
export default {
	name: 'viewGunCabinet',
	components: {
		zModal
	},
	data () {
		return {
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
				code: '12345678',
				name: '01-在位',
				gunName: '95式自动步枪',
				num: 11,
				gunNo: 1,
				personnel: '张三',
				src: require('@/assets/img/guns_in1.png'),
				status: 1,//0在位  1不在位
				checked: false
			},
			{
				id: '2',
				code: '12345678',
				name: '02-不在位',
				gunName: '95式自动步枪',
				num: 11,
				gunNo: 1,
				personnel: '张三',
				src: require('@/assets/img/guns_out2.png'),
				status: 0,
				checked: false
			},
			{
				id: '3',
				code: '12345678',
				name: '03-在位',
				gunName: '95式自动步枪',
				num: 11,
				gunNo: 1,
				personnel: '张三',
				src: require('@/assets/img/guns_in1.png'),
				status: 1,
				checked: false
			},
			{
				id: '4',
				code: '12345678',
				name: '04-不在位',
				gunName: '95式自动步枪',
				num: 11,
				gunNo: 1,
				personnel: '张三',
				src: require('@/assets/img/guns_out1.png'),
				status: 0,
				checked: false
			},
			{
				id: '5',
				code: '12345678',
				name: '05-在位',
				gunName: '95式自动步枪',
				num: 11,
				gunNo: 1,
				personnel: '张三',
				src: require('@/assets/img/guns_in2.png'),
				status: 1,
				checked: false
			},
			{
				id: '6',
				code: '12345678',
				name: '06-不在位',
				gunName: '95式自动步枪',
				num: 11,
				gunNo: 1,
				personnel: '张三',
				src: require('@/assets/img/guns_out1.png'),
				status: 0,
				checked: false
			},
			{
				id: '7',
				code: '12345678',
				name: '06-不在位',
				gunName: '95式自动步枪',
				num: 11,
				gunNo: 1,
				personnel: '张三',
				src: require('@/assets/img/guns_in1.png'),
				status: 1,
				checked: false
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
		}
	},
}
</script>

<style lang="less" scoped>
/deep/.van-checkbox__label {
	color: #fff;
}
.box {
	padding-top: 10px;
	padding-left: 5px;
	// padding-right: 5px;

	height: 230px;
	overflow-y: auto;
	.c_box {
		display: flex;
		flex-wrap: wrap;
		.item_box {
			width: 81px;
			height: 81px;
			box-sizing: border-box;
			border: 1px solid #6b896b;
			margin-right: 4px;
			margin-bottom: 15px;
			.img_box {
				padding: 5px;
				width: 81px;
				height: 52px;
				box-sizing: border-box;
				background-size: calc(100% / 2);
				background-position: center;
				background-repeat: no-repeat;
			}
			span {
				display: inline-block;
				height: 25px;
				width: 100%;
				font-size: 13px;
				line-height: 25px;
				text-align: center;
				background-image: url('../../../assets/img/cation_bot_img.png');
				background-size: 100% 100%;
			}
			.no_cabinet {
				margin-top: 56px;
			}
			.not_in {
				color: #777;
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
		height: 313px;
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
				height: 212px;
				overflow-y: auto;
				.f_item {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 11px;
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
					.zw_box {
						width: 242px;
						height: 115.5px;
						box-sizing: border-box;
						border: 1px solid #618963;
						div {
							width: 90px;
							height: 97px;
							box-sizing: border-box;
							margin: 9px auto;
							background-image: url('../../../assets/img/fingerprint_border.png');
							background-size: 100% 100%;
							border: 1px dashed #ccc;

							img {
								width: 61px;
								height: 61px;
								margin: 18px auto;
								border: 1px dashed #ccc;
							}
						}
					}
				}
				:nth-child(4) {
					margin-bottom: 8px;
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