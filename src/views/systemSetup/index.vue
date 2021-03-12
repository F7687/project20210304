<template>
   <div>
      <z-header>
         <span class="left_btn" v-if="$route.name=='systemSetup-viewCabinet'||$route.name=='systemSetup-viewMagazine'" @click="sendMsg()">保存柜体</span>
         <span class="left_btn" v-if="$route.name=='systemSetup-viewMagazineCabinet'" @click="sendMsg()">保存弹仓</span>
         
      </z-header>
      <div class="content">
         <z-left 
          @leftClick="leftClick"
          :Data="Data"></z-left>
         <router-view ></router-view>
      </div>
   </div>
</template>

<script>
import zHeader from "@/components/ZHeader.vue";
import ZLeft from "@/components/ZLeft.vue";
import { EventBus } from "@/utils/eventBus";
export default {
   name:'environmentalMonitoring',
   components:{
      zHeader,ZLeft
   },
   data() {
      return {
         Data:[
            {
               id:20,
               name:'基本信息',
               path:'systemSetup-baseInfo',
               checked:true,
            },
            {
               id:21,
               name:'网路设置',
               path:'systemSetup-netSetting',
               checked:false,
            },
            {
               id:22,
               name:'库室设置',
               path:'systemSetup-warehouseSetting',
               checked:false,
            },
            {
               id:23,
               name:'报警设置',
               path:'systemSetup-callPoliceSetting',
               checked:false,
            },
            {
               id:24,
               name:'环境设置',
               path:'systemSetup-environmentSetting',
               checked:false,
            },
            {
               id:25,
               name:'验证设置',
               path:'systemSetup-verifySettings',
               checked:false,
            },
            // -----------
            {
               id:1,
               name:'延时设置',
               path:'systemSetup-delaySetting',
               checked:false,
            },
            {
               id:2,
               name:'密码设置',
               path:'systemSetup-passwordSetting',
               checked:false,
            },
            {
               id:3,
               name:'时间设置',
               path:'systemSetup-timeSetting',
               checked:false,
            },
            {
               id:4,
               name:'关于系统',
               path:'systemSetup-aboutSystem',
               checked:false,
            },
           
         ],

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
      },
      sendMsg(){
          EventBus.$emit("leftBtnClick");
      }
   }
}
</script>

<style lang="less" scoped>
.content{
   // background-color: red;
   display:flex;
   height: 349px;
   width: 640px;
   box-sizing: border-box;
   margin: 0;
   padding: 10px 10px;
   background-image: url('../../assets/img/Bottom_Plate.png');
   background-size: 100% 100%;
   overflow: hidden;
}
</style>