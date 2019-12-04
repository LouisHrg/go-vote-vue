<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="16">
        <el-card class="clearfix">
          <div>
            <el-tooltip class="item edit-button" effect="dark" content="Edit your profile" placement="left-start">
              <el-button type="primary" icon="el-icon-edit" circle></el-button>
            </el-tooltip>
           </div>
          <div class="clearfix-top">
              <img class="avatar-logo" :src="user.avatar" />
              <h1>{{ user.firstname}} {{user.lastname}}</h1>
              <p class="role"> {{ user.username }} </p>
              <p class="bio"> {{ user.bio }} </p>
          </div>
        </el-card>
        <el-card class="clearfix">
          <h2> Informations </h2>
          <p> Email : {{ user.email }} </p>
          <p> Role : {{ formatedAcl(user.access_level) }} </p>
          <p> Date of birth : {{ formatedBD(user.date_of_birth) }} </p>
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
  .edit-button{
    float: right;
  }
</style>
<script>
import { mapState } from 'vuex';
import dayjs from 'dayjs';

export default {
  name: 'Profile',
  computed: mapState({
    user: state => state.auth.user
  }),
  methods: {
    formatedBD (date) {
      return dayjs(date).format('DD/MM/YYYY');
    },
    formatedAcl (acl) {
      return (acl && 'Admin') || 'User';
    }
  }
};
</script>
