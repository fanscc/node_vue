<template>
  <div class="login">
    <div>注册</div>
    <el-form label-position="left" label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.user"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type='password' v-model="formLabelAlign.passwrod"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="register">注册</el-button>
      </el-form-item>
</el-form>
  </div>
</template>

<script>
import { registerAPi } from '@/assets/api'
export default {
  name: 'register',
  data () {
    return {
      formLabelAlign: {
        user: '',
        passwrod: ''
      }
    }
  },
  methods: {
    register () {
      let params = {
        user: this.formLabelAlign.user,
        passwrod: this.formLabelAlign.passwrod
      }
      registerAPi(params).then(res => {
        let {data} = res
        localStorage.setItem('token', data.token)
        this.$router.push({name: 'home'})
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
