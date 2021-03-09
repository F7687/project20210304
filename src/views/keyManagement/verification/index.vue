<template>
	<div>
		<z-header></z-header>
      <div class="main">
         <div class="m_item">
            <img src="../../../assets/img/Verification1.png" alt="">
         </div>
         <div class="m_item">
            <img src="../../../assets/img/Verification2.png" alt="">

         </div>
         <div class="m_item">
            <img src="../../../assets/img/Verification3.png" alt="">

         </div>
         <div class="m_item m_item_active">
            <img src="../../../assets/img/Verification4.png" alt="">

         </div>
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