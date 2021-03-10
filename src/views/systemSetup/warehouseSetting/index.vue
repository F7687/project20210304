<template>
   <div class="mybox">
      <div class="main">
         库室设置
      </div>
   </div>
</template>

<script>
   export default {
      name:'warehouseSetting',
      data() {
         return {
            // key: value
         }
      },
   }
</script>

<style lang="less" scoped>
.main{
   position: relative;
   padding:0 100px;
   height: 100%;
   padding-top: 30px;
   overflow: hidden;
   .m_item{
      height:58px;
      line-height:88px;
      border-bottom:1px solid #236d0a;
      text-indent:0.5em;
      font-size: 15px;
   }
     
   .footer{
      position: absolute;
      bottom: 45px;
      left: calc(50% - 108px);
      text-align: center;
      span{
         display: inline-block;
         width: 93px;
         height: 30px;
         line-height: 30px;
         font-size: 14px;
         background-image: url('../../../assets/img/Storeroom_Checked.png');
			background-size: 100% 100%;

      }
      :first-child{
         margin-right: 15px;
      }
      :last-child{
         margin-left: 15px;
      }
   }
}
</style>