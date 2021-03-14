<template>
        <div class="box">
           <div class="c_box">
           <div class="box_item">
              <div class="item_img">
                 <img src="../../../assets/img/Bullet_cabinet_icon.png">
              </div>
              <div class="item_check">
                 <span></span>
                 <van-checkbox v-model="tChecked" label-position="left" checked-color="#278218" shape="square">01枪柜</van-checkbox>
              </div>
           </div>
           <div class="box_item">
              <div class="item_img">
                 <img src="../../../assets/img/Bullet_cabinet_icon.png">
              </div>
              <div class="item_check">
                 <span></span>
                 <van-checkbox label-position="left" checked-color="#278218" shape="square">01枪柜</van-checkbox>
              </div>
           </div>
           <div class="box_item">
              <div class="item_img">
                 <img src="../../../assets/img/Bullet_cabinet_icon.png">
              </div>
              <div class="item_check">
                 <span></span>
                 <van-checkbox label-position="left" checked-color="#278218" shape="square">01枪柜</van-checkbox>
              </div>
           </div>
         </div>
         <div class="c_box">
           <div class="box_item">
              <div class="item_img">
                 <img src="../../../assets/img/Bullet_cabinet_icon.png">
              </div>
              <div class="item_check">
                 <span></span>
                 <van-checkbox label-position="left" checked-color="#278218" shape="square">01枪柜</van-checkbox>
              </div>
           </div>
           <div class="box_item">
              <div class="item_img">
                 <img src="../../../assets/img/Bullet_cabinet_icon.png">
              </div>
              <div class="item_check">
                 <span></span>
                 <van-checkbox label-position="left" checked-color="#278218" shape="square">01枪柜</van-checkbox>
              </div>
           </div>
           <div class="box_item">
              <div class="item_img">
                 <img src="../../../assets/img/Bullet_cabinet_icon.png">
              </div>
              <div class="item_check">
                 <span></span>
                 <van-checkbox label-position="left" checked-color="#278218" shape="square">01枪柜</van-checkbox>
              </div>
           </div>
         </div>
         <div class="action">
           <div class="action_checkbox">
              <van-checkbox v-model="checked" checked-color="#278218" shape="square">处突</van-checkbox>
           <van-checkbox v-model="checked1" checked-color="#278218" shape="square">检查</van-checkbox>
           <van-checkbox v-model="checked2" checked-color="#278218" shape="square">巡逻</van-checkbox>
           <van-checkbox v-model="checked3" checked-color="#278218" shape="square">保养</van-checkbox>
           <van-checkbox v-model="checked4" checked-color="#278218" shape="square">训练</van-checkbox>
           <van-checkbox v-model="checked5" checked-color="#278218" shape="square">归还</van-checkbox>
           </div>
           <div class="action_btns">
              <span>打开枪柜</span>
              <span @click="viewBulletCabinet">查看弹柜</span>
              <span>一键开启</span>
           </div>
           <div class="action_tips">
              <span>总容量：1000</span>
              <span>在位：200</span>
              <span>不在位：800</span>
              <span>柜体编号：HNZK2020220</span>
           </div>
        </div>

        </div>
        
     
</template>

<script>
export default {
//    name:'environmentalMonitoring',
   components:{
   },
   data(){
      return {
         Data:[
            {
               id:1,
               name:'01机械库',
               checked:true,
            },
            {
               id:2,
               name:'01弹药库',
               checked:false,
            },
            {
               id:3,
               name:'02枪械库',
               checked:false,
            },
            {
               id:4,
               name:'02弹药库',
               checked:false,
            },
            {
               id:5,
               name:'03枪械库',
               checked:false,
            },
            {
               id:6,
               name:'03弹药库',
               checked:false,
            },
         ],
         tChecked:true,
         checked:true,
         checked1:false,
         checked2:false,
         checked3:false,
         checked4:false,
         checked5:false,
      }
   },
   mounted(){
   },
   methods:{
      viewBulletCabinet(){
          this.$router.push({name:'warehouseManagement-viewBulletCabinet'})
        //   this.$router.push({path: '/login?url=' + this.$route.path});
      }
   }
}
</script>

<style lang="less" scoped>
   
   .box{
      padding-top:12px;
      padding-left: 7px;
      margin-right: 7px;
      .c_box{
      display:flex;
      justify-content: space-around;
      width: 100%;
      margin-bottom:10px;
      // padding-left:48px;
      // padding-right:48px;
      
      flex-wrap: wrap;
      .box_item{
         display:inline-block;
         width:106px;
         height:87px;
         border:1px solid #ccc;
         padding-bottom:0.5px;
         .item_img{
            height:58px;
            text-align:center;
            // padding:1px 0;
            img{
               width:67px;
               height:56px;
            }
         }
         .item_check{
            background-color:#1C481A;
            height:28px;
            line-height:28px;
            text-align:center;
            padding-left:9px;
            /deep/.van-checkbox__icon{
               height:28px;
            }
            /deep/.van-checkbox__icon .van-icon{
               width:28px;
               height:28px;
               line-height:28px;
            }
            /deep/.van-checkbox{
               display: flex;
               justify-content: space-between;
               align-items: center;
               height: 100%;
            }
            /deep/.van-checkbox__label{
               font-size: 15px;
            }
         }
      }
   }
   .action{
      
      width:100%;
      border-top:1px dashed #ccc;
      padding-top:9px;
      .action_checkbox{
         display:flex;
      justify-content: space-around;
      }
      .action_btns{
         width:100%;
         padding:9px 37px;
         padding-left:33px;
         span{
            display:inline-block;
            width:142px;
            height:38px;
            line-height:38px;
            text-align:center;
            color:#fff;
            font-size:18px;
            margin-left:13px;
         }
         :nth-child(1){
            background-color:#1e722e;
            margin-left:0;
         }
         :nth-child(2){
            background-color:#2c78a7;
         }
         :nth-child(3){
            background-color:#d38b42;
         }
      }
      .action_tips{
         display:flex;
         justify-content: space-between;
         height:28px;
         line-height:25px;
         padding:0 8px;
         
         border-top:1px solid #2e770f;
         
      }
   }
   }
/deep/.van-checkbox__label{
         color:#ccc;
         font-size: 19px;
      }
</style>