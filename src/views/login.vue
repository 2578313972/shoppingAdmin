<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        UNI-ADMIN
      </div>
      <el-form
        :model="userInfo"
        status-icon
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            v-model="userInfo.username"
            placeholder="请输入用户名"
            autocomplete="off"
          ></el-input>
          <!-- <el-input v-model="formLabelAlign.name"></el-input> -->
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="userInfo.password"
            placeholder="请输入密码"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >立即登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 4,
            max: 16,
            message: "用户名长度在 4-16 之间",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 4, max: 16, message: "密码长度在 4-16 之间", trigger: "blur" }
        ]
      }
    };
  },
  props: {},
  create() {},
  mounted() {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$http.login
            .login({
              username: this.userInfo.username,
              password: this.userInfo.password
            })
            .then(res => {
              console.log(res);
            });
        }
      });
    }
  },
  filters: {}
};
</script>

<style lang="scss" scoped>
$topic-color: #339999;
.login {
  .box-card {
    width: 40%;
    min-width: 450px;
    margin: auto;
    margin-top: 100px;
  }
  .clearfix {
    text-align: center;
    font-weight: 600;
    font-size: 26px;
    color: #757d85;
  }
  .el-button--primary {
    width: 100%;
    background-color: $topic-color;
  }
}
</style>
