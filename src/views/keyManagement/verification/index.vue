<template>
	<div>
		<z-header></z-header>
      <div class="main">
         <!-- 多人人脸验证 -->
         <router-link :to="{name:'keyManagement-multiFace',query:{name:'keyManagement-verification'}}">
         <div class="m_item" >
            <img src="../../../assets/img/Verification1.png" alt="">
         </div>
         </router-link>
         <!-- 多人人脸验证 -->

         <!-- 人脸+指纹验证 -->
         <router-link :to="{name:'keyManagement-multiFaceFingerprint',query:{name:'keyManagement-verification'}}">
         <div class="m_item">
            <img src="../../../assets/img/Verification2.png" alt="">

         </div>
         </router-link>
         <!-- 人脸+指纹验证 -->

         <!-- 人脸+密码验证 -->
         <router-link :to="{name:'keyManagement-facePwd',query:{name:'keyManagement-verification'}}">
         <div class="m_item">
            <img src="../../../assets/img/Verification3.png" alt="">

         </div>
         </router-link>
         <!-- 人脸+密码验证 -->

         <!-- 指纹+密码验证 -->
         <router-link :to="{name:'keyManagement-fingerprintPwd',query:{name:'keyManagement-verification'}}">
         <div class="m_item m_item_active">
            <img src="../../../assets/img/Verification4.png" alt="">

         </div>
         </router-link>
         <!-- 指纹+密码验证 -->
      </div>
	</div>
</template>

<script>
import zHeader from "@/components/ZHeader.vue";
export default {
	name: 'verification',
	components: {
		zHeader
	},
}
</script>

<style lang="less" scoped>
.main{
   padding: 0 59px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   .m_item{
      width: 244px;
      height: 139px;
      // border: 1px solid ;
      margin-top: 12px;
      
      background-size: 100% 100%;
      background-repeat: no-repeat;
   }
   .m_item_active{
      background-image: url('../../../assets/img/Verification_checked.png')
   }
   img{
      width: 100%;
      height: 100%;
   }
}
</style>