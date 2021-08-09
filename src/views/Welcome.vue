<template>
  <div class="welcome">
    <div class="content">
      <div class="sub-title">欢迎体验</div>
      <div class="title">牛牛的通用后台管理系统</div>
      <div class="desc">-Vue3.0+ElememtPlus+Node+Mongo打造通用后台管理系统</div>
    </div>
    <div class="img"></div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
};
</script>

<style lang='scss' scoped>
.welcome {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  .content {
    position: relative;
    bottom: 40px;
    .sub-title {
      font-size: 30px;
      line-height: 42px;
      color: #333;
    }
    .title {
      font-size: 40px;
      line-height: 62px;
      color: #4091ff;
    }
    .desc {
      text-align: right;
      font-size: 14px;
      color: #999;
    }
  }
  .img {
    margin-left: 105px;
    width: 229px;
    height: 249px;
    background-image: url("./../assets/imgs/welcome.png");
    background-size: 100% 100%;
    -moz-background-size: cover; /* 老版本的 Firefox */
    background-repeat: no-repeat;
  }
}
</style>
