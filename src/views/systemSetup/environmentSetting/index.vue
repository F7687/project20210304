<template>
  <div class="mybox">
    <div class="main">
      <div class="range-range">
        <div class="range-range1">
          <span>湿度报警设定（℃）</span>
          <div class="form_box">
            <input type="text"
                   v-model="minRange">

            <span>~</span>

            <input type="text"
                   v-model="maxRange">
          </div>
        </div>
        <div class="range range2">
          <span>湿度报警设定（%RH）</span>
          <div class="form_box">
            <input type="text"
                   v-model="minRange">
            <span>~</span>
            <input type="text"
                   v-model="maxRange">
          </div>
        </div>
      </div>

      <div class="footer_action">
        <span>保存</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'environmentSetting',
  data () {
    return {
      // key: value
      minRange: 0,
      maxRange: 30
    }
  },
}
</script>

<style lang="less" scoped>
.main {
  position: relative;
  padding: 0 169px;
  height: 100%;
  padding-top: 50px;
  overflow: hidden;

  .range-range1 {
    padding-bottom: 30px;
  }
  .form_box {
    display: flex;
    padding-top: 15px;
    margin: 0;
    text-align: center;
    input {
      width: 75px;
      height: 43px;
      color: #fff;
      background-color: #0b3d0c;
      outline: none;
      border: 1px solid #36c626;
      text-align: center;
    }
    :focus {
      border: 1px dashed #ccc;
    }
    span {
      display: inline-block;
      width: 14px;
      height: 36px;
      line-height: 36px;
      margin: 5px 18px;
    }
  }
  .footer_action {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 45px;
    span {
      display: inline-block;
      width: 93px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 14px;
      border: 1px solid #144831;
      box-sizing: border-box;
      background-image: url("../../../assets/img/Storeroom_Checked.png");
      background-size: 100% 100%;
    }
  }
}
</style>