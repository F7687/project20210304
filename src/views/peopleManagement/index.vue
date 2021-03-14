<template>
	<div>
		<z-header>
         <span class="left_btn" @click="handleSynchronize"></span>
		</z-header>
		<div class="main">
         <!-- 头部 -->
			<div class="m_header">
				<van-row>
					<van-col span="3">编号</van-col>
					<van-col span="6">姓名</van-col>
					<van-col span="3">职务</van-col>
					<van-col span="6">角色</van-col>
					<van-col span="6">录入</van-col>
				</van-row>
			</div>
         <!-- 头部 -->

         <!-- 人员列表 -->
         <div class="m_body">
            <van-row class="row_item">
					<van-col span="3">001</van-col>
					<van-col span="6">张三(A组)</van-col>
					<van-col span="3">师长</van-col>
					<van-col span="6">超级管理员</van-col>
					<van-col span="6" class="img_box">
                  <img @click="inputFace" src="../../assets/img/face_icon_active.png" alt="">
                  <img @click="inputFingerprint" src="../../assets/img/zw_icon_active.png" alt="">
                  <img @click="inputPwd" src="../../assets/img/pwd_icon_active.png" alt="">
               </van-col>
				</van-row>
            <van-row class="row_item">
					<van-col span="3">002</van-col>
					<van-col span="6">李四(B组)</van-col>
					<van-col span="3">士兵</van-col>
					<van-col span="6">普通管理员</van-col>
					<van-col span="6" class="img_box">
                  <img @click="inputFace" src="../../assets/img/face_icon_active.png" alt="">
                  <img  @click="inputFingerprint" src="../../assets/img/zw_icon_active.png" alt="">
                  <img @click="inputPwd" src="../../assets/img/pwd_icon_active.png" alt="">
               </van-col>
				</van-row>
            <van-row class="row_item">
					<van-col span="3">003</van-col>
					<van-col span="6">吴六六(B组)</van-col>
					<van-col span="3">士兵</van-col>
					<van-col span="6">普通管理员</van-col>
					<van-col span="6" class="img_box">
                  <img @click="inputFace" src="../../assets/img/face_icon_active.png" alt="">
                  <img  @click="inputFingerprint" src="../../assets/img/zw_icon.png" alt="">
                  <img @click="inputPwd" src="../../assets/img/pwd_icon.png" alt="">
               </van-col>
				</van-row>
            <van-row class="row_item">
					<van-col span="3">004</van-col>
					<van-col span="6">吴六六(B组)</van-col>
					<van-col span="3">士兵</van-col>
					<van-col span="6">普通管理员</van-col>
					<van-col span="6" class="img_box">
                  <img @click="inputFace" src="../../assets/img/face_icon_active.png" alt="">
                  <img @click="inputFingerprint" src="../../assets/img/zw_icon_active.png" alt="">
                  <img  @click="inputPwd" src="../../assets/img/pwd_icon.png" alt="">
               </van-col>
				</van-row>
            <van-row class="row_item">
					<van-col span="3">005</van-col>
					<van-col span="6">吴六六(B组)</van-col>
					<van-col span="3">士兵</van-col>
					<van-col span="6">普通管理员</van-col>
					<van-col span="6" class="img_box">
                  <img @click="inputFace" src="../../assets/img/face_icon.png" alt="">
                  <img @click="inputFingerprint" src="../../assets/img/zw_icon.png" alt="">
                  <img @click="inputPwd" src="../../assets/img/pwd_icon.png" alt="">
               </van-col>
				</van-row>
            <van-row class="row_item">
					<van-col span="3">006</van-col>
					<van-col span="6">吴六六(B组)</van-col>
					<van-col span="3">士兵</van-col>
					<van-col span="6">普通管理员</van-col>
					<van-col span="6" class="img_box">
                  <img @click="inputFace" src="../../assets/img/face_icon.png" alt="">
                  <img @click="inputFingerprint" src="../../assets/img/zw_icon.png" alt="">
                  <img @click="inputPwd" src="../../assets/img/pwd_icon.png" alt="">
               </van-col>
				</van-row>
         </div>
          <!-- 人员列表 -->
		</div>

      <!-- 同步人员弹框 -->
         <van-overlay :show="isSynchronize" @click.stop="isSynchronize=false">
			<div class="one_wrapper" @click.stop>
				<div class="block">
					<div class="one_title">同步人员</div>
					<div class="one_content">
						<span>同步人员成功！</span>
						<div class="one_btns">
                     <span @click="isSynchronize=false">确定</span>
                     
                  </div>
					</div>
				</div>
			</div>
		</van-overlay>
      <!-- 同步人员弹框 -->
	</div>
</template>

<script>
import zHeader from "@/components/ZHeader.vue";
export default {
	name: 'environmentalMonitoring',
	components: {
		zHeader
	},
   data() {
      return {
         isSynchronize: false
      }
   },
	mounted () {
      
	},
	methods: {
      //同步人员
      handleSynchronize(){
         this.isSynchronize=true;
      },
      // 录入人脸
      inputFace(){
         this.$router.push({name:'peopleManagement-inputFace',query:{name:'peopleManagement'}});
      },
      //录入指纹
      inputFingerprint(){
         this.$router.push({name:'peopleManagement-inputFingerprint',query:{name:'peopleManagement'}});
      },
      // 录入密码
      inputPwd(){
         this.$router.push({name:'peopleManagement-inputPwd',query:{name:'peopleManagement'}});
      }
	}
}
// 
</script>

<style lang="less" scoped>
.main {
	background-color: #0a370a;
	padding: 1px 28px;
	margin: 8px;
	height: 330px;
	.m_header {
		width: 100%;
		height: 42px;
		line-height: 42px;
      text-align: center;
      border: 1px dashed #ccc;
      background-color: #0f560b;
	}
   .m_body{
      .row_item{
         height: 47px;
         border-bottom: 1px solid #75FE08;
         line-height: 47px;
         text-align: center;
         .img_box{
            img{
               width: 30px;
               height: 30px;
               vertical-align: middle;
               margin-right: 8px;
            }

         }
      }
   }
}
.left_btn{
   position: absolute;
   right: 20px;
   top: 10px;
   width: 93px;
   height: 30px;
   background-image: url('../../assets/img/Synchronize_btn.png');
   background-size: 100% 100%;
   
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