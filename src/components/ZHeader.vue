<template>
   <div class="z_header">
      <div 
         @click="handleClick"     
         @mousedown="handleDown"       
         @mouseup="handleUp"   
         :class="{'back_icon':true,'active':isAvtive}"></div>
      <strong>{{this.$route.meta.title}}</strong>
      <slot></slot>
   </div>
</template>

<script>
   export default {
      name:'header',
      data() {
         return {
            isAvtive: false,
            routerName:''
         }
      },
      mounted(){
         console.log(this.$route);
         this.routerName= this.$route.query.name||undefined
      },
      methods:{
         handleClick(){
            if(this.routerName){
               this.$router.push({name:this.routerName})
            }else this.$router.replace({name:'Home'})
            // let routers=['netVideo','warehouseManagement','peopleManagement','logManagement','environmentalMonitoring','systemSetup']
            // if(routers.includes(this.$route.name)){
            //    return this.$router({name:'Home'})
            // }
            // this.$emit('headerBack');
         },
         handleDown(){
            
            this.isAvtive=true;
            console.log('handleDown',this.isAvtive);
         },
         handleUp(){
            setTimeout(() => {
               this.isAvtive=false;
            }, 450);
         }
      }
   }
</script>

<style lang="less" scoped>
.z_header{
   height: 50px;
   background-image: url('../assets/img/nav.png');
	background-size: 100% 100%;
	background-repeat: no-repeat;
   line-height: 50px;
   text-align: center;
   border-bottom: 1px dashed #ccc;
   .back_icon{
      position: absolute;
      width: 48.5px;
      height: 37px;
      background-image: url('../assets/img/back_btn.png');
      background-size: 100% 100%;
      
      margin-left: 14.5px;
      margin-top: 8px;
      
      z-index: 1;
      
   }
   .active{
       background-image: url('../assets/img/back_btn_active.png') !important;
   }
   
   strong{
      font-size: 18px;
      font-weight: 300;
      
      
   }
}
</style>