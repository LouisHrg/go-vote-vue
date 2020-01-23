<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="16">
        <el-card class="clearfix">
          <el-tooltip v-if="user.access_level === 1" class="item pins admin" effect="dark" content="Admin" placement="left-start">
            <el-button type="success" icon="el-icon-user-solid" circle></el-button>
          </el-tooltip>
          <div class="clearfix-top">
            <Formikax @onSubmit="submitSurvey" v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit">
                <img class="avatar-logo" :src="tempAvatar" />
                <Field label="Avatar" name="avatar" :value="user.avatar" @input="handleAvatar" />
                <Field label="First Name" name="firstName" :value="user.firstname"/>
                <Field label="Last Name" name="lastName" :value="user.lastname"/>
                <Field label="Birth Date" type="date" name="date_of_birth" :value="user.date_of_birth | dateFormatter"/>
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
    handleAvatar (value) {
      this.tempAvatar = value;
    }
  }
};
</script>
