<template>
   <div class="mybox main">
      <!-- 验证人数 -->
      <div>
         <div class="title">验证人数</div>
         <div class="ck_box">
            <van-checkbox class="ck_item" v-for="item in verificationPeopleNum" :key="item.id" label-position="left" v-model="item.checked" checked-color="#278218" shape="square">{{item.name}}</van-checkbox>
         </div>
      </div>

      <!-- 相机配置 -->
      <div class="camera_config">
         <div class="title">相机配置</div>
         <van-checkbox   label-position="left" v-model="checked" checked-color="#278218" shape="square">默认相机切换</van-checkbox>
      </div>
   </div>
</template>

<script>
   export default {
      name:'verifySettings',
      data() {
         return {
            checked:false,
            verificationPeopleNum:[
               {
                  id:1,
                  name:'单人验证',
                  checked:false,
               },
               {
                  id:2,
                  name:'双人验证',
                  checked:false,
               },
               {
                  id:3,
                  name:'三人验证',
                  checked:false,
               },
               {
                  id:4,
                  name:'四人验证',
                  checked:false,
               },
               {
                  id:5,
                  name:'五人验证',
                  checked:false,
               },
               {
                  id:6,
                  name:'六人验证',
                  checked:false,
               },
            ]
            // key: value
         }
      },
   }
</script>

<style lang="less" scoped>
/deep/.van-checkbox__label{
   color:#fff;
   font-size:15px;
}
/deep/.van-icon{
   width:28.5px;
   height:28.5px;
   line-height:28.5px;
}
/deep/.van-checkbox__icon{
   width:28.5px;
   height:28.5px;
   line-height:28.5px;
}
/deep/.van-checkbox__icon--checked .van-icon{
   width:28.5px;
   height:28.5px;
   line-height:28.5px;
}
.title{
   height:37px;
   line-height:37px;
   border-bottom: 1px solid #236e0a;
}
.main{
   padding:0 60px;
   padding-top: 20px;
   font-size:15px;
   .camera_config{
      margin-top:30px;
      .title{
         margin-bottom:11px;
      }
     
   }
}
.ck_box{
   display:flex;
   flex-wrap: wrap;
   justify-content: space-between;
   .ck_item{
      margin-right:47px;
      margin-top:20px;
   }
   :nth-child(3n+0){
       margin-right:0;
   }
}

</style>