<template>
   <div>
      <z-header></z-header>
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
export default {
   name:'environmentalMonitoring',
   components:{
      zHeader,ZLeft
   },
   data() {
      return {
         Data:[
            {
               id:1,
               name:'延时设置',
               path:'systemSetup-delaySetting',
               checked:true,
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
            // --------------
           {
               id:5,
               name:'关于系统',
               path:'systemSetup-aboutSystem',
               checked:false,
            },
            {
               id:6,
               name:'关于系统',
               path:'systemSetup-aboutSystem',
               checked:false,
            },
            {
               id:7,
               name:'关于系统',
               path:'systemSetup-aboutSystem',
               checked:false,
            },
            {
               id:8,
               name:'关于系统',
               path:'systemSetup-aboutSystem',
               checked:false,
            },
            {
               id:9,
               name:'关于系统',
               path:'systemSetup-aboutSystem',
               checked:false,
            },
            {
               id:10,
               name:'关于系统',
               path:'systemSetup-aboutSystem',
               checked:false,
            },
            {
               id:11,
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