<template>
   <div>
      <van-overlay :show="modalConfig.isRestore" @click.stop="modalConfig.isRestore=false">
			<div class="one_wrapper" @click.stop>
				<div class="block">
					<div class="one_title">{{modalConfig.title}}</div>
					<div class="one_content">
						<span>{{modalConfig.content}}</span>
						<div class="one_btns">
                     <span @click.stop="handleSubmit">确定</span>
                     <span @click.stop="handleCancel">取消</span>
                  </div>
					</div>
				</div>
			</div>
		</van-overlay>
   </div>
</template>

<script>
   export default {
      name:'aboutSystem-modal',
      props:{
         
         modalConfig:{
            type:Object,
            default:()=>{
               return {}
            }
            
         }
      },
      data() {
         return {
            
         }
      },
      methods:{
         clickMask(){
            this.isRestore=false;
         },
         handleSubmit(){
            this.$emit('handleSubmit',this.modalConfig.key)
         },
         handleCancel(){
            this.$emit('handleCancel',this.modalConfig.key)
         }
      }
   }
</script>

<style lang="less" scoped>
.one_wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	.block {
		width: 298px;
		height: 162px;
		background-color: #256028;
      box-sizing: border-box;
      border:1px solid #52b816;
      .one_title{
         
         height: 43px;
         line-height: 43px;
         text-align: center;
         border-bottom: 1px solid #52b816;
      }
      .one_content{
         padding-top: 25px;
         text-align: center;
         .one_btns{
            padding: 20px 0;
            margin-top: 10px;
            span{
               display: inline-block;
               width: 121px;
               height: 36px;;
               line-height: 36px;
               text-align: center;
            }
            :last-child{
               background-color: #f54040;
               margin-left: 16px;
            }
            :first-child{
               background-color: #2b7fad;
            }
         }
      }
	}
}
</style>