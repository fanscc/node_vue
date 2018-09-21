<template>
  <div class="login">
    <div style="color: red;margin-bottom:20px">这是一个神奇的网站,如你还没账户,去注册吧等你来战！！</div>
    <div style="margin-bottom:20px">登陆</div>
    <el-form label-position="left" label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.user"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type='password' v-model="formLabelAlign.passwrod"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登陆</el-button>
        <el-button @click="goRegister">前往注册</el-button>
      </el-form-item>
</el-form>
  </div>
</template>

<script>
import { loginAPi } from '@/assets/api'
export default {
  name: 'login',
  data () {
    return {
      formLabelAlign: {
        user: '',
        passwrod: ''
      }
    }
  },
  methods: {
    submitForm () {
      let condition = {
        user: this.formLabelAlign.user,
        passwrod: this.formLabelAlign.passwrod
      }
      loginAPi(condition).then(res => {
        let {data} = res
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', data.user)
        localStorage.setItem('headImg', data.headImg)
        this.$router.push({name: 'home'})
      })
    },
    goRegister () {
      this.$router.push({name: 'register'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
