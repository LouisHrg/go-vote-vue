<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="16">
        <el-card class="clearfix">
          <el-tooltip class="item pins edit" effect="dark" content="Edit your profile" placement="bottom-start">
            <el-button type="primary" icon="el-icon-edit" circle></el-button>
          </el-tooltip>
          <el-tooltip v-if="user.access_level === 1" class="item pins admin" effect="dark" content="Admin" placement="left-start">
            <el-button type="success" icon="el-icon-user-solid" circle></el-button>
          </el-tooltip>
          <div class="clearfix-top">
              <img class="avatar-logo" :src="user.avatar" />
              <h1>{{user.firstname }} {{ user.lastname }}</h1>
              <p class="role"> {{ user.date_of_birth | dateFormatter }} </p>
              <p class="bio"> {{ user.bio }} </p>
          </div>
        </el-card>
        <el-card class="clearfix">
          <h2> Informations </h2>
          <p> Email : {{ user.email }} </p>
          <p> Address : 15 rue notre Dame </p>
          <p> City : Montmorency </p>
          <p> Postal Code : 95160 </p>
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
  name: 'Profile',
  computed: mapState({
    user: state => state.auth.user
  }),
  filters: {
    dateFormatter: date => {
      return dayjs(date).format('DD/MM/YYYY');
    }
  }
};
</script>
