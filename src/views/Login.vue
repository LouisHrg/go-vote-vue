<template>
    <el-row justify="center" align="middle" type="flex" class="loginContainer">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h2>Awesome Go Vote</h2>
            <h4>Welcome back!</h4>
          </div>
          <div class="login_form">
            <Formikax @onSubmit="submitLogin" v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit">
                <Field name="email" />
                <Field name="password" type="password" />
                <el-button native-type="submit" type="primary" :loading="loading">Connexion</el-button>
              </form>
            </Formikax>
          </div>
        </el-card>
      </el-col>
    </el-row>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      },
      loading: false
    };
  },
  methods: {
    ...mapActions('auth', [
      'fetchUserInfo',
      'login'
    ]),
    async submitLogin ({ values }) {
      const { email, password } = values;
      this.loading = true;

      if (!email) {
        this.$message({
          showClose: true,
          message: 'Please enter your email.',
          type: 'error'
        });
        this.loading = false;
        return;
      }

      if (!password) {
        this.$message({
          showClose: true,
          message: 'Please enter your password.',
          type: 'error'
        });
        this.loading = false;
        return;
      }

      try {
        await this.login({ email, password });
        await this.fetchUserInfo();
        await this.$router.push({ path: '/' });
      } catch (error) {
        this.$message({
          showClose: true,
          message: 'Oops, Bad credentials.',
          type: 'error'
        });
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
  .loginContainer{
    height: 100%;
  }
  .login_form{
    padding: 0 40px;
  }
</style>
