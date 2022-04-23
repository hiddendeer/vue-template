<template>
  <div class="contain">
    <el-row :gutter="20" style="height: 100%">
      <el-col :span="10">
        <div class="login_left">
          <div class="account_info">
            <el-row :gutter="20">
              <el-col :span="24" class="view_info">
                <img class="logo_info" />
                <div class="text_info">伟岸纵横</div>
              </el-col>
            </el-row>
            <div class="input_info">
              <q-input
                v-model.trim="account.userName"
                @keyup="trggerValidate"
                label="用户名"
                stack-label
                class="p-4"
                :hide-hint="false"
                :error="validate.hasUserName"
                :error-message="validate.errorUserMes"
              >
                <template v-slot:prepend>
                  <q-icon name="perm_identity" />
                </template>
              </q-input>
              <q-input
                v-model.trim="account.passWord"
                @keyup="trggerValidate"
                type="password"
                label="密码"
                stack-label
                class="p-4"
                :error="validate.hasPassWord"
                :error-message="validate.errorPassWordMes"
              >
                <template v-slot:prepend>
                  <q-icon name="lock_outline" />
                </template>
              </q-input>
              <div class="p-3 mt-4">
                <q-btn
                  @click="onSubmit"
                  color="btn"
                  label="登录"
                  type="submit"
                  style="width: 100%; padding: 10px 0"
                ></q-btn>
              </div>
            </div>
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
import { ref, reactive, toRefs } from "vue";

const jsonObj = reactive({
  account: { userName: "", passWord: "" }, // 账号密码
  validate: {
    // 校验信息
    hasUserName: false,
    errorUserMes: "",
    hasPassWord: false,
    errorPassWordMes: "",
  },
});

const { account } = toRefs(jsonObj);
const { validate } = toRefs(jsonObj);

/**
 * 登录
 */
const onSubmit = () => {
  formValidate();
  if (formValidate()) {
    console.log("success");
  }
};

/**
 * 校验用户名和密码
 */
const formValidate = () => {
  // 用户名校验
  if (account.value.userName === "") {
    validate.value.hasUserName = true;
    validate.value.errorUserMes = "用户名不能为空";
    return false;
  } else {
    validate.value.hasUserName = false;
  }

  // 密码校验
  if (account.value.passWord === "") {
    validate.value.hasPassWord = true;
    validate.value.errorPassWordMes = "密码不能为空";
    return false;
  } else {
    validate.value.hasPassWord = false;
  }

  return true;
};

// 输入内容取消校验提示
const trggerValidate = () => {
  if (account.value.userName !== "") {
    validate.value.hasUserName = false;
  }
  if (account.value.passWord !== "") {
    validate.value.hasPassWord = false;
  }
};
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

.input_padding {
  padding: 20px;
}

.input_info .q-field :deep(.q-field__inner) .q-field__control {
  color: #a27b3e;
}

.text-btn {
  color: #a27b3e;
}
.bg-btn {
  background: #a27b3e;
}
</style>