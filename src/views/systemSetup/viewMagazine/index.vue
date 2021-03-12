<template>
	<div class="mybox " style="padding-left:5px;">
		<div class="box">
			<div class=" c_box">
				<div @click.stop="viewDetail(item.id)" :class="{box_item:true,active:item.checked&&cabinetKey==1}" v-for="item in dataSource" :key="item.id">
					<div class="item_img">
						<img :src="item.src">
					</div>
					<div :class="{item_check:true,item_check_active:item.checked&&cabinetKey!=1}" @click.stop="viewCabinet(item.id)">
						<span>{{item.name}}</span>
						<span>{{item.code}}</span>
					</div>
				</div>

			</div>
		</div>
		<div class="aciton">
			<!-- 柜体信息 -->
			<div v-if="cabinetKey==1">
				<van-row class="a_info" type="flex" justify="space-between">
					<van-col span="5" class="t_center">柜体编号</van-col>
					<van-col span="3" class="t_center">柜体类型</van-col>
					<van-col span="3" class="t_center">拨码位</van-col>
					<van-col span="4" class="t_center">IP地址</van-col>
					<van-col span="5" class="t_center">所属库室</van-col>
				</van-row>
				<van-row class="a_info_content" type="flex" justify="space-between">
					<van-col span="5" class="t_center">{{acticeDataInfo.code}}</van-col>
					<van-col span="3" class="t_center">{{acticeDataInfo.type}}</van-col>
					<van-col span="3" class="t_center">{{acticeDataInfo.num}}</van-col>
					<van-col span="4" class="t_center">{{acticeDataInfo.ip}}</van-col>
					<van-col span="5" class="t_center" style="color:#75FE08">01军械枪械库</van-col>
				</van-row>
			</div>
			<!-- 柜体信息 -->

			<!-- 枪支信息 -->
			<div v-else>
				<van-row class="a_info" type="flex" justify="space-between">
					<van-col span="5" class="t_center">子弹总数量</van-col>
					<van-col span="3" class="t_center">已取</van-col>
					<van-col span="3" class="t_center">未取</van-col>
					<van-col span="4" class="t_center">IP地址</van-col>
					<van-col span="5" class="t_center">所属库室</van-col>
				</van-row>
				<van-row class="a_info_content" type="flex" justify="space-between">
					<van-col span="5" class="t_center">{{acticeDataInfo.total}}</van-col>
					<van-col span="3" style="color:#75FE08" class="t_center">{{acticeDataInfo.taken}}</van-col>
					<van-col  span="3" style="color:#0E9C00" class="t_center">{{acticeDataInfo.notTaken}}</van-col>
					<van-col  span="4" class="t_center">{{acticeDataInfo.ip}}</van-col>
					<van-col span="5" class="t_center" style="color:#75FE08">01军械弹药库</van-col>
				</van-row>
			</div>
			<!-- 枪支信息 -->
			<!-- 底部按钮 -->
			<div class="footer_action">
				<span @click="addCabinet">添加柜体</span>
				<span @click="editCabinet">编辑柜体</span>
				<span @click="deleteCabinet">删除柜体</span>
				<span @click="viewCabint" :class="{'view_active':!dataSource.some(item=>item.checked)}">查看柜体</span>
				<span @click="$router.push({name:'systemSetup-warehouseSetting'})">返回上级</span>
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
									<span>柜体编号</span>
									<input type="text" v-model="cabinetForm.code">
								</div>
								<div class="f_item">
									<span>柜体名称</span>
									<input type="text" v-model="cabinetForm.name">
								</div>
								<div class="f_item">
									<span>拨&nbsp;码&nbsp;位</span>
									<input type="text" v-model="cabinetForm.num">
								</div>
								<div class="f_item">
									<span>IP地址</span>
									<input type="text" v-model="cabinetForm.ip">
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

		<!-- 保存柜体弹框 -->
		<z-modal 
		@handleCancel="handleCancel"
		@handleSubmit="handleSubmit" :modalConfig="modalConfig"></z-modal>
		<!-- 保存柜体弹框 -->
	</div>

</template>

<script>
import ZModal from "@/components/ZModal.vue";
import { EventBus } from "@/utils/eventBus";
export default {
	name:'viewMagazine',
	components: {
		ZModal
	},
	data () {
		return {
			isAddModal:false,
			// 新增，编辑表单
			cabinetForm:{
				title:'添加柜体',
				code:'12345678',
				name:'01弹柜',
				num:11,
				ip:'192.168.1.111',
			},
			cabinetKey: 1,//为1时候显示柜体信息，为2时候显示枪支信息
			// 数据源
			dataSource: [
				{
					id: '1',
					src: require('@/assets/img/Bullet_cabinet_icon.png'),
					name: '01弹柜',
					code: '这是柜体编号',
					ip: '192.168.1.111',
					num: '11',//拨码位
					type: '弹柜',//类型
					total:10000,//枪支总数
					taken:9000,//已取
					notTaken:1000,//未取
					checked: false //是否选中
				},
				{
					id: '2',
					src: require('@/assets/img/Bullet_cabinet_icon.png'),
					name: '01弹柜',
					code: '12345678',
					ip: '192.168.1.111',
					num: '11',
					type: '弹柜',
					checked: false,
					total:10000,//枪支总数
					taken:9000,//已取
					notTaken:1000,//未取
				},
				{
					id: '3',
					src: require('@/assets/img/Bullet_cabinet_icon.png'),
					name: '01弹柜',
					code: '12345678',
					ip: '192.168.1.111',
					num: '11',
					type: '弹柜',
					checked: false,
					total:10000,//枪支总数
					taken:9000,//已取
					notTaken:1000,//未取
				},
				{
					id: '4',
					src: require('@/assets/img/Bullet_cabinet_icon.png'),
					name: '01弹柜',
					code: '12345678',
					ip: '192.168.1.111',
					num: '11',
					type: '弹柜',
					checked: false,
					total:10000,//枪支总数
					taken:9000,//已取
					notTaken:1000,//未取
				},
				{
					id: '5',
					src: require('@/assets/img/Bullet_cabinet_icon.png'),
					name: '01弹柜',
					code: '12345678',
					ip: '192.168.1.111',
					num: '11',
					type: '弹柜',
					checked: false,
					total:10000,//枪支总数
					taken:9000,//已取
					notTaken:1000,//未取
				},
				{
					id: '6',
					src: require('@/assets/img/Bullet_cabinet_icon.png'),
					name: '01弹柜',
					code: '12345678',
					ip: '192.168.1.111',
					num: '11',
					type: '弹柜',
					checked: false,
					total:10000,//枪支总数
					taken:9000,//已取
					notTaken:1000,//未取
				},
				{
					id: '7',
					src: require('@/assets/img/Bullet_cabinet_icon.png'),
					name: '01弹柜',
					code: '12345678',
					ip: '192.168.1.111',
					num: '11',
					type: '弹柜',
					checked: false,
					total:10000,//枪支总数
					taken:9000,//已取
					notTaken:1000,//未取
				},
				{
					id: '8',
					src: require('@/assets/img/Bullet_cabinet_icon.png'),
					name: '01弹柜',
					code: '12345678',
					ip: '192.168.1.111',
					num: '11',
					type: '弹柜',
					checked: false,
					total:10000,//枪支总数
					taken:9000,//已取
					notTaken:1000,//未取
				},
				{
					id: '9',
					src: require('@/assets/img/Bullet_cabinet_icon.png'),
					name: '01弹柜',
					code: '12345678',
					ip: '192.168.1.111',
					num: '11',
					type: '弹柜',
					checked: false,
					total:10000,//枪支总数
					taken:9000,//已取
					notTaken:1000,//未取
				},
			],
			// 弹框配置
			modalConfig: {
				isRestore: false,//弹框显示/隐藏
				isShowCancel: false,//是否显示取消按钮
				title: '保存柜体',
				key:1,//1保存  2删除
				content: '已经成功上传柜体！'////弹框内容
			}
		}
	},
	computed: {
		acticeDataInfo () {
			return this.dataSource.filter(item => item.checked)[0] || {}
		},
		
	},
	beforeDestroy () {
		EventBus.$off('leftBtnClick')
	},

	mounted () {
		console.log('??/')
		// 监听保存头部保存按钮事件
		EventBus.$on("leftBtnClick", () => {
			this.modalConfig={
				isRestore: true,//弹框显示/隐藏
				isShowCancel: false,//是否显示取消按钮
				title: '保存柜体',
				key:1,//1保存 2删除
				content: '已经成功上传柜体！'
			}
		});
	},

	methods: {
		// 弹框确定按钮
		handleSubmit () {
			// 1保存
			if(this.modalConfig.key==1){
				//----------
			}else {//删除
				//-----
			}
			this.modalConfig.isRestore = false;
			
		},
		// 弹框取消按钮
		handleCancel(){
			this.modalConfig.isRestore = false;
		},
		// 查看柜体信息
		viewDetail (id) {
			this.cabinetKey=1;
			for (let i = 0; i < this.dataSource.length; i++) {
				let item = this.dataSource[i];
				if (item.id == id) {
					item.checked = true;
				} else item.checked = false;
			}
		},
		// 查看枪支信息
		viewCabinet (id) {
			this.cabinetKey=2;
			for (let i = 0; i < this.dataSource.length; i++) {
				let item = this.dataSource[i];
				if (item.id == id) {
					item.checked = true;
				} else item.checked = false;
			}
		},
		// 删除柜体
		deleteCabinet(){
			this.modalConfig={
				isRestore: true,//弹框显示/隐藏
				isShowCancel: true,//是否显示取消按钮
				title: '删除柜体',
				key:2,//1保存 2删除
				content: '确定删除该柜体？'
			}
		},
		// 添加柜体
		addCabinet(){
			console.log('this.cabinetForm',this.cabinetForm)
			for(let key in this.cabinetForm){
				console.log('key',key)
				this.cabinetForm[key]=''
			}
			this.cabinetForm.title="添加柜体"
			this.isAddModal=true;
		},
		//编辑柜体
		editCabinet(){
			console.log('this.编辑柜体',this.cabinetForm)
			this.cabinetForm={
				title:'编辑柜体',
				code:'12345678',
				name:'01弹柜',
				num:11,
				ip:'192.168.1.111',
			}
			this.isAddModal=true
		},
		// 查看柜体
		viewCabint(){
			this.$router.push({name:'systemSetup-viewMagazineCabinet'})
		}
	}
}
</script>

<style lang="less" scoped>

.box {
	padding-top: 8px;
	padding-left: 56px;
	padding-right: 56px;
	height: 230px;
	overflow-y: auto;
	.c_box {
		display: flex;
		justify-content: space-between;
		width: 100%;
		margin-bottom: 5px;
		// padding-left:48px;
		// padding-right:48px;

		flex-wrap: wrap;
		.box_item {
			display: inline-block;
			width: 106px;
			height: 108px;
			border: 1px solid #829a82;
			margin-bottom: 5px;

			.item_img {
				height: 70px;
				text-align: center;
				padding-top: 3px;
				// padding:1px 0;
				img {
					width: 50px;
					height: 65px;
				}
			}
			.item_check {
				display: flex;
				align-items: center;
				flex-direction: column;
				background-color: #1c481a;
				background-image: url('../../../assets/img/cation_bot_img.png');
				background-size: 100% 100%;
				height: 35px;
				width: 100%;
				font-size: 12px;
				text-align: center;
				padding: 2px;
				box-sizing: border-box;
			}
			.item_check_active{
				background-color:#0e9c00;

			}
		}
		.active {
			border-color: #69e908;
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
		margin-top: 5px;
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
		.view_active{
			background-image:none;
			background-color:#1e4e32;
			color:#777;
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
				:nth-child(4){
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
/deep/.van-checkbox__label {
	font-size: 19px;
}
</style>