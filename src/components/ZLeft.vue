<template>
   <div class="z_left">
      <span :class="{active:item.checked}" v-for="item in Data" :key="item.id">{{item.name}}</span>
   </div>
</template>

<script>
export default {
   name:'ZLeft',
   props:{
       Data:{
           type:Array,
           defalut:()=>{
               return []
           }
       }
   },
   mounted(){
   },
   methods:{
      
   }
}
</script>

<style lang="less" scoped>
.z_left{
    width:93px;
    height:100%;
    
    padding:10px 0;
    .active{
        background-image: url('../assets/img/Storeroom_Checked.png');
        background-size:100% 100%;
    }
    span{
        display: inline-block;
        height:55px;
        border:1px solid #3a900a;
        border-top:none;
        width:93px;
        line-height:55px;
        text-align:center;
    }
    :first-child{
         border:1px solid #3a900a;
    }
    :last-child{
       height:47px; 
    }
}
</style>