<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="16">
        <el-card class="clearfix">
          <el-tooltip v-if="user.access_level === 1" class="item pins admin" effect="dark" content="Admin" placement="left-start">
            <el-button type="success" icon="el-icon-user-solid" circle></el-button>
          </el-tooltip>
          <div class="clearfix-top">
            <Formikax @onSubmit="updateUser" v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit">
                <img class="avatar-logo" :src="tempAvatar" />
                <Field label="Avatar" name="avatar" :value="user.avatar" @input="handleAvatar" />
                <Field label="First Name" name="firstname" :value="user.firstname"/>
                <Field label="Last Name" name="lastname" :value="user.lastname"/>
                <Field label="Birth Date" type="date_of_birth" name="date_of_birth" :value="user.date_of_birth | dateFormatter"/>
                <Field label="Bio" name="bio" as="textarea">{{ user.bio }}</Field>
                <Field label="Email" name="email" :value="user.email"/>
                <Field label="Adress" value="15, rue notre Dame" disabled/>
                <Field label="City" value="Montmorency" disabled/>
                <Field label="Postal Code" value="95160" disabled/>
                <el-button native-type="submit" type="primary">Save</el-button>
              </form>
            </Formikax>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
  .avatar-logo{
    border-radius: 50px;
    height: 150px;
  }
  .role{
    font-weight: 600;
  }
  .bio{
    text-align: justify;
  }
  .clearfix{
    margin-bottom: 20px;
  }
  .clearfix-top{
    margin-top: 50px;
  }
  .pins{
    float: right;
  }
  .admin{
    margin-right: 5px;
  }
</style>
<script>
import { mapState } from 'vuex';
import dayjs from 'dayjs';
import { mapActions } from 'vuex';
export default {
  name: 'UserEdit',
  mounted () {
    this.tempAvatar = this.avatar;
  },
  data: () => ({
    tempAvatar: ''
  }),
  computed: mapState({
    user: state => state.auth.user,
    avatar: state => state.auth.user.avatar

  }),
  filters: {
    dateFormatter: date => {
      return dayjs(date).format('YYYY-MM-DD');
    }
  },
  methods: {
    ...mapActions('users', [
      'patchUser'
    ]),
    handleAvatar (value) {
      this.tempAvatar = value;
    },
    async updateUser ({values} ) {
      var { avatar, firstname, lastname, date_of_birth, bio, email } = values;
      if (avatar==='') {
        this.$message({
          showClose: true,
          message: 'Please specify an avatar.',
          type: 'error'
        });
        return;
      }

      if (firstname==='') {
        this.$message({
          showClose: true,
          message: 'Please enter a First Name',
          type: 'error'
        });
        return;
      }

      if (lastname==='') {
        this.$message({
          showClose: true,
          message: 'Please enter a Last Name.',
          type: 'error'
        });
        return;
      }

      if (date_of_birth==='') {
        this.$message({
          showClose: true,
          message: 'Please enter a Date of Birth.',
          type: 'error'
        });
        return;
      }

      if (bio==='') {
        this.$message({
          showClose: true,
          message: 'Please enter a Bio.',
          type: 'error'
        });
        return;
      }

      if (email==='') {
        this.$message({
          showClose: true,
          message: 'Please enter an Email.',
          type: 'error'
        });
        return;
      }
      date_of_birth = new Date(date_of_birth);
      console.log(firstname);
      try {
        console.log(firstname);
        await this.patchUser(this.user.uuid, { avatar, firstname, lastname, date_of_birth, bio, email } );
        this.$message({
          showClose: true,
          message: 'User updated ! 😂',
          type: 'success'
        });
      } catch (error) {
        this.$message({
          showClose: true,
          message: 'Oupsie ! Something went wrong ^^"' + error,
          type: 'error'
        });
      }
    }
  }
};
</script>
