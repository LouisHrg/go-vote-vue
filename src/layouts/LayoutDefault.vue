<template>
<el-container>
  <el-aside width="200px">
    <el-menu :router=true class="app-container">
    <div class="sidebar-header">
      <p class="sidebar-sitename">Go vote</p>
      <p>Best app on earth</p>
    </div>
    <el-menu-item route="/"  index="1">
      Home
    </el-menu-item>
    <el-menu-item route="/surveys" index="2">
      Surveys
    </el-menu-item>
    <el-menu-item route="/surveys"  index="3">
      My Surveys
    </el-menu-item>
    </el-menu>
  </el-aside>
  <el-container>
    <el-header>
      <el-menu :router=true class="el-menu-demo" mode="horizontal">
        <el-submenu index="6" class="right-menu-el">
          <template slot="title">
            <img class="navbar-avatar" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Placeholder_no_text.svg/1024px-Placeholder_no_text.svg.png"  :alt="`${user.username}'s avatar`"/>
            {{ user.username }}
          </template>
          <el-menu-item index="1-1" route="/profile">Profile</el-menu-item>
          <el-menu-item index="settings">Settings</el-menu-item>
          <el-menu-item route="logout" index="1-3">Logout</el-menu-item>
        </el-submenu>
        <el-menu-item index="1-0" class="right-menu-el">
            <el-badge is-dot class="item badge-icon"/>
            <BellIcon />
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</el-container>
</template>

<script>
import BellIcon from 'vue-material-design-icons/Bell.vue';
import { mapState } from 'vuex';
export default {
  name: 'LayoutDefault',
  components: {
    BellIcon
  },
  computed: mapState({
    user: state => state.auth.user
  })
};
</script>

<style scoped>
  .right-menu-el{
    float: right !important;
  }
  .sidebar-header{
    margin: 20px;
  }
  .sidebar-logo{
    width: 60px;
  }
  .sidebar-sitename{
    margin-top: 0px;
    font-weight: 600;
  }
  .badge-icon{
    position: absolute;
    right: 10px;
    top: -10px;
  }
  .navbar-avatar{
    width: 30px;
    border-radius: 50px;
  }
  .el-menu {
    background-color: var(--bg-color);
  }
</style>
