<template>
   <div>
      <z-header>
         
         <span class="left_btn" v-if="$route.name=='systemDebugging-hardwareTest'" @click="sendMsg()">交付使用</span>
         
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
   // 系统调试
   name:'systemDebugging',
   components:{
      zHeader,ZLeft
   },
   data() {
      return {
         Data:[
            {
               id:1,
               name:'网络设置',
               path:'systemDebugging-netSetting',
               checked:true,
            },
            {
               id:2,
               name:'硬件测试',
               path:'systemDebugging-hardwareTest',
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