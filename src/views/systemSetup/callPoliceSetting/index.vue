<template>
  <div class="mybox">
    <div class="main">
      <div class="main-left">
        <div class="left-item"
             v-for="item in left"
             :key="item.id">
          <span>{{item.text}}</span>
          <van-switch style="vertical-align: middle;margin-left:12px;"
                      
                      v-model="item.checked"
                      active-color="#23e87b"
                      inactive-color="#dcdee0" />
        </div>
      </div>
      <div class="main-right">
        <div class="right-item"
             v-for="item in rigth"
             :key="item.id">
          <span>{{item.text}}</span>
          <van-switch style="vertical-align: middle;margin-left:12px;"
                      
                      v-model="item.checked"
                      active-color="#23e87b"
                      inactive-color="#dcdee0" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'callPoliceSetting',
  data () {
    return {
      // key: value

      left: [
        { id: 1, text: "温度报警", checked: false, },
        { id: 2, text: "烟雾报警", checked: true },
        { id: 3, text: "声光报警" },
        { id: 4, text: "防盗网报警" },
        { id: 5, text: "震动柜门报警" },
        { id: 6, text: "非法开门报警" }
      ],
      rigth: [
        { id: 7, text: "温度报警", },
        { id: 8, text: "红外报警", },
        { id: 9, text: "一键防撤" },
        { id: 10, text: "网络断开报警" },
        { id: 11, text: "玻璃破碎报警" },
      ]
    }
  },
}
</script>

<style lang="less" scoped>
/deep/.van-switch{
   width:48px;
   height:20px;
}
/deep/.van-switch__node{
   width:20px;
   height:20px;
}
.main {
  display: flex;

  flex-wrap: wrap;
  position: relative;
  padding: 0 80px;
  height: 100%;
  padding-top: 30px;
  overflow: hidden;
  .main-left {
   
    display: flex;
    align-items: flex-end;
    margin-right: 30px;
    flex-direction: column;
    font-size:15px;
    // justify-content: space-evenly;
    line-height: 40px;
    .left-item{
       span{
          width:180px;
          text-align:right;
       }
    }
  }
  .main-right {
    flex: 1;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    // justify-content: space-evenly;
    line-height: 40px;
  }
}
</style>