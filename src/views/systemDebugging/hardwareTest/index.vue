<template>
   <div class="mybox main">
      <div class="left_box">
         <div class="l_item_box">
            <span class="active">读取锁状态</span>
            <span>报警</span>
            <span>读取门状态</span>
            <span>布防</span>
            <span>读取枪状态</span>
            <span>撤防</span>
            <span>读取温湿度</span>
            <span>灯光控制</span>
            <span>读取供电</span>
            <span>指纹测试</span>
            <span>开启枪柜</span>
            <span>录入指纹</span>
            <span>一键开启</span>
            <span>验证指纹</span>
            <span>开启弹柜</span>
            <span>清空指纹</span>
         </div>
         <div class="test_btn">一键测试</div>
      </div>
      <div class="right_box">
         <p>读取锁状态：上锁。</p>
         <p>读取枪状态：1在位，2离位，3在位， 4在位，5离位，6在位，7在位，8在位。</p>
         <p>读取温湿度：<span class="red">60°C，80%RH。</span> </p>
         <p>一键开启：枪柜已全部开启。 </p>
      </div>
   </div>
</template>

<script>
   export default {
      name:'hardwareTest',
      data() {
         return {
            
         }
      },
      methods: {
         
      },
   }
</script>

<style lang="less" scoped>
.red{
   color: #F54040;
}
.main{
   display: flex;
   justify-content: space-between;
   padding: 0 40px;
   
   .left_box{
      width: 173px;
      padding-top: 29px;
      .l_item_box{
         display: flex;
         justify-content: space-between;
         flex-wrap: wrap;
         span{
            display: inline-block;
            width: 80px;
            height: 27px;
            line-height: 27px;
            text-align: center;
            margin-bottom: 3px;
            background-color: #186408;
         }
         .active{
            border: 1px dashed #ccc;
         }
      }
      .test_btn{
         height: 29px;
         line-height: 29px;
         font-size: 16px;
         text-align: center;
         background-color: #d38b42;
      }
   }
   .right_box{
      width: 254px;
      height: 284px;
      box-sizing: border-box;
      border: 1px solid #64a63a;
      margin-top: 22px;
      padding: 7px 0 7px 10px ;
      
      p{

         line-height: 19px;
         margin-bottom: 9px;
      }
   }
}
</style>