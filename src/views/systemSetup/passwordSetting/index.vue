<template>
   <div class="mybox" style="position: relative;">
      <div class="main">
         <div class="m_itme">
            <span>管理员姓名：</span>
            <input v-model="info.name" />
         </div>
         <div class="m_itme">
            <span>输入旧密码：</span>
            <input type="password" v-model="info.oldPassword" />
         </div>
         <div class="m_itme">
            <span>输入新密码：</span>
            <input  type="password" v-model="info.password" />
         </div>
         <div class="m_itme">
            <span>确认新密码：</span>
            <input  type="password" v-model="info.secondPassword" />
         </div>
         <div class="footer">
         <span class="mybtn">保存</span>
      </div>
      </div>
      
   </div>
</template>

<script>
   export default {
      name:'passwordSetting',
      data() {
         return {
            info:{
               name:'张三丰',
               oldPassword:'123456789',
               password:'123456',
               secondPassword:'123456'
            }
         }
      },
   }
</script>

<style lang="less" scoped>
.main{
   padding:0 120px;
   margin-top: 30px;
   .m_itme{
      display:flex;
      align-items: center;
      padding-top: 19px;
      span{
         flex: 1;
         font-size: 15px;
      }
      input{
         outline: none;
         border: 1px solid #085c07;
         width: 233px;
         height: 30px;
         box-sizing: border-box;
         background-color: #0a430c;
         flex: 1;
         text-indent: 1em;
      }
   }
   
}
.footer{
      text-align: center;
      padding-top: 62px;
   }
</style>