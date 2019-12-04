<template>
    <el-row justify="center" align="middle" type="flex" class="el-row loginContainer">
      <el-col :span="6">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <h2>Go Vue Vote</h2>
            <h4>Welcome back!</h4>
          </div>
          <div>
            <el-form @submit.prevent.native=submitLogin>
              <label for="email">Nom d'utilisateur</label>
              <el-input id="email" ref="email" class="m-5" v-model="form.email"></el-input>
              <label for="password">Mot de passe</label>
              <el-input id="password" ref="password" class="m-5" v-model="form.password" show-password></el-input>
              <el-button native-type="submit" type="primary" :loading="loading">Connexion</el-button>
            </el-form>
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
  mounted () {
    this.$nextTick(() => this.$refs.email.focus());
  },
  methods: {
    ...mapActions('auth', [
      'fetchUserInfo',
      'login'
    ]),
    async submitLogin () {
      const { email, password } = this.form;
      this.loading = true;

      if (!email) {
        this.$message({
          showClose: true,
          message: 'Please enter your email.',
          type: 'error'
        });
        this.$refs.email.focus();
        this.loading = false;
        return;
      }

      if (!password) {
        this.$message({
          showClose: true,
          message: 'Please enter your password.',
          type: 'error'
        });
        this.$refs.password.focus();
        this.loading = false;
        return;
      }

      try {
        await this.login({ email, password });
        await this.fetchUserInfo();
        await this.$router.push({ path: '/' });
      } catch (error) {
        console.log(error);
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
</style>
