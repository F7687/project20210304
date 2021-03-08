<template>
	<div>
		<z-header></z-header>
		<div class="content">
			<div class="content_item">
				<div class="top">
					<div>
						<img class="icon_dehumidifier" src="@/assets/img/Dehumidifier.png" alt="">
						<span>除湿器</span>
					</div>
				</div>
				<div class="action">
					<div>
						<span class="icon_green"></span>
						<span class="">手动模式</span>
					</div>
					<div>
						<span>开机</span>
						<van-switch style="vertical-align: middle;margin-left:8px;" size="17px" v-model="isBootUp" active-color="#23e87b" inactive-color="#dcdee0" />
					</div>
				</div>
				<div class="range">
					<span>湿度设定范围（%RH）</span>
					<div class="form_box">
						<input type="text" v-model="minRange">
						<span>~</span>
						<input type="text" v-model="maxRange">
					</div>
				</div>
				<div class="description">
					<span class="icon_circle"></span>
					<span class="no_selected">自动模式：</span>
					<p>"自动模式"在开启时，手动模
						式关闭，当湿度在设置的湿度阈值
						外时自动开启除湿机，直到湿度处
						于正常值范围时关闭。"</p>
				</div>
			</div>
			<div class="content_item center">
            <div class="top">
					<div>
						<img class="icon_Air_Conditioner" src="@/assets/img/Air_Conditioner.png" alt="">
						<span>空调</span>
					</div>
				</div>
				<div class="action">
					<div>
						<span class="icon_green"></span>
						<span class="">手动模式</span>
					</div>
					<div>
						<span>开机</span>
						<van-switch style="vertical-align: middle;margin-left:8px;" size="17px" v-model="isBootUp" active-color="#23e87b" inactive-color="#dcdee0" />
					</div>
				</div>
            <div class="ctrl_btn">
               <span class="btn_box">-</span>
               <span style="color:#FFA13E">36.6°C</span>
               <span class="btn_box">+</span>
            </div>
				<div class="range range2" >
					<span>湿度设定范围（%RH）</span>
					<div class="form_box">
						<input type="text" v-model="minRange">
						<span>~</span>
						<input type="text" v-model="maxRange">
					</div>
				</div>
				<div class="description">
					<span class="icon_circle"></span>
					<span class="no_selected">自动模式：</span>
					<p>"自动模式"在开启时，手动模
						式关闭，当湿度在设置的湿度阈值
						外时自动开启除湿机，直到湿度处
						于正常值范围时关闭。"</p>
				</div>
			</div>
			<div class="content_item">
            <div class="top">
					<div>
						<img class="icon_Exhaust_fan" src="@/assets/img/Exhaust_fan.png" alt="">
						<span>排风扇</span>
					</div>
				</div>
            <div class="action" style="color:#57815a">
					<div >
						<span class="icon_green icon_ccc"></span>
						<span class="">手动模式</span>
					</div>
					<div>
						<span>开机</span>
						<van-switch style="vertical-align: middle;margin-left:8px;" size="17px" v-model="isBootUp" active-color="#23e87b" inactive-color="#dcdee0" />
					</div>
				</div>
            <div class="description_three" >
					<span class="icon_circle icon_circle_active"></span>
					<span>自动模式：</span>
					<p class="active">"自动模式"在开启时，手动模
						式关闭，当湿度在设置的湿度阈值
						外时自动开启除湿机，直到湿度处
						于正常值范围时关闭。"</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import zHeader from "@/components/ZHeader.vue";
export default {
	name: 'environmentalMonitoring',
	components: {
		zHeader
	},
	data () {
		return {
			isBootUp: false,//开机
			minRange: 0,
			maxRange: 30
		}
	},
	mounted () {
	},
	methods: {

	}
}
</script>

<style lang="less" scoped>
.icon_dehumidifier{
   width: 12px;
   height: 17px;
}
.icon_Air_Conditioner{
   width: 20px;
   height: 12px;
}
.icon_Exhaust_fan{
   width: 16px;
   height: 16px;
}
.content {
	display: flex;
	// justify-content:
	margin-left: 7px;
	margin-right: 7px;
	margin-top: 10px;
   .center{
      margin: 0 3px;
   }
	.content_item {
      
		width: 211px;
		height: 335px;
		background-color: #055a0a;
		.top {
			text-align: center;
			div {
				height: 22px;
            
				padding-top: 13px;
				// width:45px;
				display: inline-block;
            img{
               display: inline-block;
               margin-right: 4px;
            }
            span{
               vertical-align: text-bottom;
            }
			}
		}
		.action {
			display: flex;
			padding: 0 20px;
			margin-top: 18px;
			justify-content: space-between;
			.icon_green {
				display: inline-block;
				width: 8px;
				height: 8px;
				border-radius: 50%;
				background-color: #23e87b;
            margin-right: 4px;
			}
         .icon_ccc{
            background-color: #055a0a;
            border: 1px solid #57815a;
         }
		}
		.range {
			padding: 0 20px;
			margin-top: 79px;
			.form_box {
				display: flex;
				padding-top: 5px;
				margin: 0;
            text-align: center;
				input {
					width: 57px;
					height: 30px;
					color: #fff;
					background-color: #055a0a;
					outline: none;
					border: 1px solid #36c626;
					text-align: center;
				}
				:focus {
					border: 1px dashed #ccc;
				}
				span {
					display: inline-block;
					width: 12px;
					height: 29px;
					line-height: 29px;
					margin: 0 18px;
					border: 1px dashed #ccc;
				}
			}
		}
		.description {
          padding: 0 20px;
			padding-top: 20px;
         // span{
         //    margin: 0;
         // }
        p{
           margin: 0;
           font-size: 12px;
           color: #6b7621;
        }
		}
	}
	
}
.ctrl_btn{
   padding:20px 20px 0 20px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   .btn_box{
      display: inline-block;
      width: 27px;
      height: 27px;
      font-size: 20px;
      font-weight: 700;
      color: #36c626;
      border: 1px dashed #ccc;
      line-height: 27px;
      text-align: center;
   }

}
.range2{
   margin-top: 31px !important;
}
// #57815a
.description_three{
   padding-top: 155px;
   padding-left: 20px;
   p{font-size: 12px;color: #6b7621;margin: 0;}
   
   .active{
      color: rgb(255, 161, 62);
   }
}
.icon_circle{
      display: inline-block;
      width: 8px;
      height: 8px;
      border: 1px solid #57815a;
      border-radius: 50%;
      margin-right: 4px;
   }
   .icon_circle_active{
      background-color: #23e87b;
      border: none;
   }
.no_selected{
   color:#57815a
}
.selected{
   color: #fff;
}
</style>