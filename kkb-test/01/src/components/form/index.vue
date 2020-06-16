<template>
  <div>
    <KForm :model="userInfo" :rules="rules" ref="form">
      <!-- 用户名 -->
      <KFormItem label="用户名" prop="username">
        <KInput v-model="userInfo.username" placeholder="请填写用户名" />
      </KFormItem>
      <!-- 密码 -->
      <KFormItem label="密码" prop="password">
        <KInput type="password" v-model="userInfo.password" placeholder="请填写密码" />
      </KFormItem>
      <KFormItem>
        <button @click="login">登陆</button>
      </KFormItem>
    </KForm>
  </div>
</template>

<script>
import KInput from "@/components/form/KInput.vue";
import KFormItem from "@/components/form/KFormItem.vue";
import KForm from "@/components/form/KForm.vue";
// import Notice from "@/components/comps/notice.vue";

export default {
  data() {
    return {
      userInfo: {
        username: "tom",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请填写用户名" }],
        password: [{ required: true, message: "请填写密码" }]
      }
    };
  },
  components: {
    KInput,
    KFormItem,
    KForm
  },
  methods: {
    login() {
      this.$refs.form.validate(valid => {
        this.$notice({
          title: "标题",
          message: valid ? "请求登录!" : "校验失败!",
          duration: 1000
        }).show();

        // this.$create(Notice, {
        //   title: "标题",
        //   message: valid ? "请求登录!" : "校验失败!",
        //   duration: 1000
        // }).show();

        // if (valid) {
        //   console.log("submit");
        // } else {
        //   console.log("error submit");
        //   return false;
        // }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>