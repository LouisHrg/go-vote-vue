<template>
  <el-container class="container">
    <el-main class="main">
      <router-view />
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'LayoutModal'
};
</script>

<style scoped>
  .container, .main {
    height: 100vh;
  }

  .container {
    background: url("../assets/sick.png") repeat, linear-gradient(to right, #0f2027, #203a43, #2c5364) no-repeat;
    background-size: 100px, 100%;
    animation: moveFromBottomLeftToTopRight 75s linear infinite;
  }

  @keyframes moveFromBottomLeftToTopRight {
    from {background-position: bottom left;}
    to {background-position: top right;}
  }
</style>
