<template>
   <div class="main">
     <div class="main_center">
         <div class="c_item">
             <div class="img_box">
                 <img src="" />
             </div>
             <span class="fot">01-在位</span>
         </div>
         <div class="c_item">
             <div class="img_box">
                 <img src="" />
             </div>
             <span class="fot">01-在位</span>
         </div>
         <div class="c_item">
             <div class="img_box">
                 <img src="" />
             </div>
             <span class="fot">01-在位</span>
         </div>
         <div class="c_item">
             <div class="img_box">
                 <img src="" />
             </div>
             <span class="fot">01-在位</span>
         </div>
         <div class="c_item">
             <div class="img_box">
                 <img src="" />
             </div>
             <span class="fot">01-在位</span>
         </div>
         <div class="c_item">
             <div class="img_box">
                 <img src="" />
             </div>
             <span class="fot">01-在位</span>
         </div>
         <div class="c_item">
             <div class="img_box">
                 <img src="" />
             </div>
             <span class="fot">01-在位</span>
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
              
              <span @click="$router.go(-1)">返回上级</span>
           </div>
           <div class="action_tips">
              <span>姓名：</span>
              <span>编号：</span>
              <span>不在位：30</span>
              <span>柜体编号：HNZK2020220</span>
           </div>
        </div>
   </div>
</template>

<script>
export default {
   name:'viewGunCabinet',
   components:{
   },
   data(){
       return{
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
      
   }
}
</script>

<style lang="less" scoped>
.main{
    width:520px;
    padding:10px;
    padding-right:0;
    .main_center{
        display:flex;
        flex-wrap: wrap;
        padding-top:7.5px;
        .c_item{
            margin:7.5px 0 7.5px 4px;
            border:1px solid #ccc;
            width:81px;
            height:81px;
            box-sizing: border-box;
            .img_box{
                height:55px;
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                    width:46.5px;
                    height:28.1px;
                }
            }
            .fot{
                display:inline-block;
                width:100%;
                height:24px;
                line-height:24px;
                text-align:center;

            }
        }
    }
    .action{
      
      width:100%;
      border-top:1px dashed #ccc;
      padding-top:11px;
      .action_checkbox{
         display:flex;
      justify-content: space-around;
      }
      .action_btns{

         padding:12px 110px;
        //  padding-left:33px;
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
            background-color:#d38b42;
         }
         
      }
      .action_tips{
         display:flex;
         justify-content: space-between;
         height:30px;
         line-height:30px;
         padding:0 8px;
         
         border-top:1px solid #2e770f;
         
      }
   }
}

</style>