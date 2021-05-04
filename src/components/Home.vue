<template>
  <div>
    Home 组件
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      // 清空token
      window.sessionStorage.clear()
      // 跳转到登录页面
      this.$router.push('/login')
    },
  },
}
</script>

<style lang="less" scoped>
</style>