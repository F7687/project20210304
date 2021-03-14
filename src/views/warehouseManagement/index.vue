<template>
   <div>
      <z-header></z-header>
     <div class="content">
        <z-left @leftClick="leftClick" :Data="Data"></z-left>
        <div class="mybox">
           <router-view ></router-view>
        </div>
        <!-- <div class="box">
           <div class="c_box">
           <div class="box_item">
              <div class="item_img">
                 <img src="../../assets/img/Gun_Cabinet.png">
              </div>
              <div class="item_check">
                 <span></span>
                 <van-checkbox v-model="tChecked" label-position="left" checked-color="#278218" shape="square">01枪柜</van-checkbox>
              </div>
           </div>
           <div class="box_item">
              <div class="item_img">
                 <img src="../../assets/img/Gun_Cabinet.png">
              </div>
              <div class="item_check">
                 <span></span>
                 <van-checkbox label-position="left" checked-color="#278218" shape="square">01枪柜</van-checkbox>
              </div>
           </div>
           <div class="box_item">
              <div class="item_img">
                 <img src="../../assets/img/Gun_Cabinet.png">
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
                 <img src="../../assets/img/Gun_Cabinet.png">
              </div>
              <div class="item_check">
                 <span></span>
                 <van-checkbox label-position="left" checked-color="#278218" shape="square">01枪柜</van-checkbox>
              </div>
           </div>
           <div class="box_item">
              <div class="item_img">
                 <img src="../../assets/img/Gun_Cabinet.png">
              </div>
              <div class="item_check">
                 <span></span>
                 <van-checkbox label-position="left" checked-color="#278218" shape="square">01枪柜</van-checkbox>
              </div>
           </div>
           <div class="box_item">
              <div class="item_img">
                 <img src="../../assets/img/Gun_Cabinet.png">
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
              <span>查看枪柜</span>
              <span>一键开启</span>
           </div>
           <div class="action_tips">
              <span>总容量：1000</span>
              <span>在位：200</span>
              <span>不在位：800</span>
              <span>柜体编号：HNZK2020220</span>
           </div>
        </div>

        </div> -->
        
     </div>
     
   </div>
</template>

<script>
import zHeader from "@/components/ZHeader.vue";
import ZLeft from "@/components/ZLeft.vue";
export default {
   name:'environmentalMonitoring',
   components:{
      zHeader,ZLeft
   },
   data(){
      return {
         Data:[
            {
               id:1,
               name:'01机械库',
               path:'warehouseManagement-index',
               checked:true,
            },
            {
               id:2,
               name:'01弹药库',
               path:'warehouseManagement-ammunitionDepot',
               checked:false,
            },
            {
               id:3,
               name:'02枪械库',
               path:'warehouseManagement-index',
               checked:false,
            },
            {
               id:4,
               name:'02弹药库',
               path:'warehouseManagement-ammunitionDepot',
               checked:false,
            },
            {
               id:5,
               name:'03枪械库',
               path:'warehouseManagement-index',
               checked:false,
            },
            {
               id:6,
               name:'03弹药库',
               path:'warehouseManagement-ammunitionDepot',
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
      leftClick(id){
         for(let i=0;i<this.Data.length;i++){
            if(id==this.Data[i].id&&this.Data[i].checked)return
            if(id==this.Data[i].id){
               this.Data[i].checked=true;
               this.$router.push({name:this.Data[i].path})
            }else this.Data[i].checked=false;
         }
      }
   }
}
</script>

<style lang="less" scoped>

.content{
   display: flex;
    height: 54.53125vw;
    width: 100vw;
    box-sizing: border-box;
    margin: 0;
    padding: 10px 10px;
    background-image: url('../../assets/img/Bottom_Plate.png');
    background-size: 100% 100%;
    overflow: hidden;
}
/deep/.van-checkbox__label{
         color:#ccc;
         font-size: 19px;
      }
</style>