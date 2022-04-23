<template>
  <div class="h-full bg-f5-gray">
    <el-row :gutter="20" class="h-full">
      <el-col :span="10">
        <div class="h-full p-20">
          <div class="h-full">
            <el-row :gutter="20">
              <el-col :span="24" class="mt-14 mb-14 leading-10 tracking-normal">
                <img class="logo_info m-auto" />
                <div
                  class="text-center h-6 text-lg font-medium leading-9"
                  style="letter-spacing: 12px; color: #9f9b94"
                >
                  伟岸纵横
                </div>
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
                  icon-right="send"
                  class="btn_style"
                >
                </q-btn>
              </div>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="14">
        <div class="h-full login_right"></div>
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
.logo_info {
  width: 252px;
  height: 55px;
  image-rendering: -webkit-optimize-contrast;
  content: url("@/assets/images/v3logo.png");
}

.login_right {
  background: url("@/assets/images/login_right.png");
}

.btn_style {
  width: 100%;
  padding: 10px 0
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