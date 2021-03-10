<template>
	<div class="home">
		<div id="nav">
			<div class="nav_left">
				<div @click="$router.push({name:'keyManagement'})">
					<span class="n_icon icon_temperature"></span>
					温度：-26.6°C
				</div>
				<div>
					<span class="n_icon icon_humidity"></span>
					湿度：36%
				</div>
			</div>
			<div class="nav_center">
				<h1>智能兵器室综合管理平台</h1>
			</div>
			<div class="nav_right">
				<div class="r_time">
					<span>11:11:20</span>
					<span>2020-07-20</span>
				</div>
				<div class="r_icon">
					<img src="../assets/img/electric_content.png" alt="">
					<img src="../assets/img/net_close.png" alt="">
					<img src="../assets/img/server_connected.png" alt="">
				</div>
			</div>
		</div>
		<div class="content">
			<div class="title">
				<strong>中国人民解放军-7321</strong>
			</div>
			<div class="action">
				<div class="action_item" v-for="(item,index) in actionConfig" :key="index" >

					<router-link :to="{name:item.path}">
						<div class="img_box">
							<img :src="item.imgSrc" alt="">
						</div>
						{{item.name}}
					</router-link>
				</div>

			</div>
		</div>
		<footer>
			<span>承制单位：中国人民解放军第七三二一工厂</span>
			<span>技术支持：0871-68306134</span>
		</footer>
	</div>
</template>

<script>
// @ is an alias to /src
export default {
	name: "Home",

	data () {
		return {
			actionConfig: [
				{
					path: 'netVideo',
					imgSrc: require('../assets/img/netVideo.png'),
					name: '网路视频'
				},
				{
					path: 'warehouseManagement-index',
					imgSrc: require('../assets/img/Warehouse_management.png'),
					name: '库室管理'
				},
				{
					path: 'peopleManagement',
					imgSrc: require('../assets/img/People_Management.png'),
					name: '人员管理'
				},
				{
					path: 'logManagement',
					imgSrc: require('../assets/img/Log_management.png'),
					name: '日志管理'
				},
				{
					path: 'environmentalMonitoring',
					imgSrc: require('../assets/img/Environmental_monitoring.png'),
					name: '环境检测'
				},
				{
					path: 'systemSetup-baseInfo',
					imgSrc: require('../assets/img/System_setup.png'),
					name: '系统设置'
				},
			]
		}
	},
	methods: {
		
	}
};
</script>
<style scoped lang="less">
#nav {
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-image: url('../assets/img/nav.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	padding: 0 5px;
	border-bottom: 1px dashed;
	box-sizing: border-box;
	width: 100%;
	height: 50px;
	.nav_left {
		display: flex;
		flex: 1;
		flex-direction: column;
		div {
			display: flex;
			align-items: center;
		}
		div .n_icon {
			display: inline-block;
			background-size: 50%;
			background-repeat: no-repeat;
			background-position: center;
			font-size: 14px;
			height: 20px;
			width: 21px;
			margin-right: 10px;
		}
		div .icon_temperature {
			background-image: url('../assets/img/Temperature.png');
		}
		div .icon_humidity {
			background-image: url('../assets/img/Humidity.png');
		}
	}
	.nav_center {
		flex: 2;
		text-align: center;
		h1 {
			font-size: 18px;
			font-weight: 400;
		}
	}
	.nav_right {
		display: flex;
		flex: 1;
		justify-content: space-between;
		.r_time {
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: space-around;
			flex: 1;
		}
		.r_icon {
			flex: 1;
			text-align: right;
			display: flex;
			align-items: center;
			justify-content: space-around;
			img {
				width: 22px;
				height: 22px;
				vertical-align: middle;
			}
		}
	}
}
.title {
	padding: 40px 0;
	text-align: center;
	strong {
		display: inline-block;
		font-size: 18px;
		line-height: 26px;
		height: 26px;
		font-weight: 500;
	}
}
.content {
	.action {
		display: flex;
		justify-content: space-around;
		padding: 0 49px;
		.action_item {
			text-align: center;
      /deep/a{
        color: #FFFFFF;
      }
			.img_box {
				width: 78px;
				height: 78px;
				border: 1px solid #47dc31;
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 10px;
				img {
					display: inline-block;
					width: 34px;
					height: 34px;
				}
			}
		}
	}
}
footer {
	position: fixed;
	bottom: 7px;
	width: 100%;
	height: 40px;
	line-height: 40px;
	border-top: 1px dashed #ccc;
	:nth-child(1) {
		padding-left: 10px;
		padding-right: 36px;
	}
}
</style>
