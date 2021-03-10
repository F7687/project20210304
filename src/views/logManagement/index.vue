<template>
	<div>
		<z-header>
         <span class="left_btn" >查询日期</span>
		</z-header>
		<div class="main">
			<div class="m_header">
				<van-row  type="flex" justify="center">
					<van-col span="6">操作时间</van-col>
					<van-col span="14">操作内容</van-col>
					<van-col span="4">操作人员</van-col>
				</van-row>
			</div>
         <div class="m_content">
            <van-row @click="viewDetail" class="m_row"  type="flex" justify="center">
					<van-col span="6">2020-02-20&nbsp;10:20:30</van-col>
					<van-col span="14">打开柜体管理</van-col>
					<van-col span="4">张三</van-col>
				</van-row>
            <van-row @click="viewDetail" class="m_row"  type="flex" justify="center">
					<van-col span="6">2020-02-20&nbsp;10:20:30</van-col>
					<van-col span="14">打开柜体管理</van-col>
					<van-col span="4">张三</van-col>
				</van-row>
            <van-row @click="viewDetail" class="m_row"  type="flex" justify="center">
					<van-col span="6">2020-02-20&nbsp;10:20:30</van-col>
					<van-col span="14">打开柜体管理</van-col>
					<van-col span="4">张三</van-col>
				</van-row>
            <van-row @click="viewDetail" class="m_row"  type="flex" justify="center">
					<van-col span="6">2020-02-20&nbsp;10:20:30</van-col>
					<van-col span="14">打开柜体管理</van-col>
					<van-col span="4">张三</van-col>
				</van-row>
            <van-row @click="viewDetail" class="m_row"  type="flex" justify="center">
					<van-col span="6">2020-02-20&nbsp;10:20:30</van-col>
					<van-col span="14">打开柜体管理</van-col>
					<van-col span="4">张三</van-col>
				</van-row>
            <van-row @click="viewDetail" class="m_row"  type="flex" justify="center">
					<van-col span="6">2020-02-20&nbsp;10:20:30</van-col>
					<van-col span="14">打开柜体管理</van-col>
					<van-col span="4">张三</van-col>
				</van-row>
            <van-row @click="viewDetail" class="m_row"  type="flex" justify="center">
					<van-col span="6">2020-02-20&nbsp;10:20:30</van-col>
					<van-col span="14">打开柜体管理</van-col>
					<van-col span="4">张三</van-col>
				</van-row>
            <van-row @click="viewDetail" class="m_row"  type="flex" justify="center">
					<van-col span="6">2020-02-20&nbsp;10:20:30</van-col>
					<van-col span="14">打开柜体管理</van-col>
					<van-col span="4">张三</van-col>
				</van-row>
         </div>
		</div>
	</div>
</template>

<script>
import zHeader from "@/components/ZHeader.vue";
export default {
	name: 'environmentalMonitoring',
	components: {
		zHeader
	},
	mounted () {
	},
	methods: {
      // 查看日志详情
      viewDetail(){
         this.$router.push({name:'logManagement-logDetail',query:{name:'logManagement'}})
      }
	}
}
</script>

<style lang="less" scoped>

.main {
	height: 310px;
	margin: 10px 15px;
	padding-top: 15px;
	background-color: #0a430c;
	.m_header {
      height: 42px;
      line-height: 42px;
		width: 584px;
		background-color: #0f560b;
      border: 1px dashed #ccc;
      text-align: center;
   }
   .m_content{
       width: 584px;
       height: 258px;
       box-sizing: border-box;
       overflow-y: auto;
      .m_row{
        
         height: 42px;
         line-height: 50px;
         text-align: center;
         border-bottom: 1px solid #3a940a;

      }
   }
}
</style>