<template>
  <div class="contain">
    <el-row :gutter="20" style="height: 100%;">
      <el-col :span="10">
        <div class="login_left">
          <div class="account_info">
            <el-row :gutter="20">
              <el-col :span="24" class="view_info">
                <img class="logo_info" />
                <div class="text_info">伟岸纵横</div>
              </el-col>
            </el-row>
            <div class="input_info">22</div>
          </div>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="login_right"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.contain {
  height: 100%;
  background-color: #f5f5f5;
}
.login_right {
  height: 100%;
  background: url("@/assets/images/login_right.png");
}
.login_left {
  height: 100%;
  padding: 5rem;
  .account_info {
    height: 100%;
    .view_info {
      margin: 60px 0 60px 0;
      line-height: 2.5rem;
      letter-spacing: normal;
      .logo_info {
        width: 252px;
        height: 55px;
        margin: auto;
        image-rendering: -webkit-optimize-contrast;
        content: url("@/assets/images/v3logo.png");
      }
      .text_info {
        text-align: center;
        height: 25px;
        font-size: 18px;
        font-weight: 500;
        color: #9f9b94;
        line-height: 30px;
        letter-spacing: 12px;
      }
    }
  }
}
</style>