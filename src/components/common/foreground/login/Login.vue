<template>
  <div class="main-table">
    <div class="content">
      <div class="form sign-in">
        <h2 id="deeart-title">DeeArt</h2>
        <label>
          <span>账号</span>
          <input type="email" placeholder="" ref="input1" @blur="changeName(userInfo.username)"
                 v-model="userInfo.username"
                 key="username"/>
        </label>
        <label>
          <span>密码</span>
          <input type="password" placeholder="" ref="input2" @blur="changePwd(userInfo.pwd)" v-model="userInfo.pwd"
                 key="pwd"/>
        </label>

        <p class="forgot-pass"><a href="javascript:">忘记密码？</a></p>
        <button type="button" class="submit" @click="login">登 录</button>
        <button type="button" class="fb-btn">使用 <span>facebook</span>帐号登录</button>
      </div>
      <div class="sub-cont">
        <div class="img">
          <div class="img__text m--up">
            <h2>还未注册？</h2>
            <p>立即注册，发现大量机会！</p>
          </div>
          <div class="img__text m--in">
            <h2>已有帐号？</h2>
            <p>有帐号就登录吧，好久不见了！</p>
          </div>
          <div class="img__btn" @click="clearInfo">
            <span class="m--up">注 册</span>
            <span class="m--in">登 录</span>
          </div>
        </div>
        <div class="form sign-up">
          <h2>立即注册</h2>
          <label>
            <span id="input3">用户名</span>
            <input type="text" placeholder="" ref="input3"
                   @blur="regularExpression(userInfo.username,
                   /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,'用户名','input3')"
                   v-model="userInfo.username" key="reg_username"/>
          </label>
          <label>
            <span id="input4">邮箱</span>
            <input type="email" v-model="userInfo.email" key="reg_email" ref="input4"
                   @blur="regularExpression(userInfo.email,
                   /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,'邮箱','input4')"/>
          </label>
          <label>
            <span id="input5">密码</span>
            <input type="password" v-model="userInfo.pwd" key="reg_pwd"
                   ref="input5"
                   @blur="regularExpression(userInfo.pwd,/^[a-zA-Z]\w{5,17}$/,'密码','input5')"/>
          </label>
          <button type="button" class="submit" @click="register">注 册</button>
          <button type="button" class="fb-btn">使用 <span>facebook</span> 帐号注册</button>
        </div>
      </div>
    </div>
  </div>
  <!--  <button @click="test">测试</button>-->
  <LoginBg></LoginBg>
</template>

<script>
import LoginBg from "@/components/common/foreground/login/LoginBg";
import axios from "axios";
import $ from 'jquery';
import {mapMutations} from "vuex";
import {testAxios} from "@/network";

export default {
  name: "login",
  components: {LoginBg},
  data() {
    return {
      userInfo: {
        userName: '',
        userPassword: '',
        email: '',
        userToken: ''
      },
      isUserNamePass: false,
      isPWDPass: false,
      isEmailPass: false,
      isPass: false,
      indexData: {},
      test: 1
    }
  },
  methods: {

    ...mapMutations(['changeLogin', 'changeIndexData']),
    login() {
      let _this = this;
      if (this.userInfo.username === '' || this.userInfo.username === null
        || this.userInfo.pwd === '' || this.userInfo.pwd === null) {
        alert('账号或密码不能为空');
      } else {
        testAxios('login', 'post', {
          userName: _this.userInfo.username,
          userPassword: _this.userInfo.pwd
        }).then(res => {
          if (res.data.code === 200 && res.data.success === true) {

            console.log(res.data);
            _this.userInfo.userToken = res.data.userToken;
            alert(_this.userInfo.userToken)
            alert(localStorage.getItem('Authorization'))
            // 将用户token保存到vuex中
            _this.changeLogin({Authorization: res.data.userToken});
            let __this = _this
            if (localStorage.getItem('Authorization') !== null
              || localStorage.getItem('Authorization') !== '') {
              console.log(res.data);
              alert('登陆成功');
              __this.changeIndexData(res.data)
              __this.$router.push('/index');
            }
          }

        }).catch(error => {
          alert(error.data.message);
        });
      }
    },
    /**
     * 注册
     * */
    register() {
      if (this.isPass === true) {
        axios.get('#', {
          params: {
            data: this.userInfo
          }
        }).then((res) => {
          console.log(res);
        }).catch((error) => {
          console.log(error)
        })
      } else {
        alert('请填写正确信息')
      }

    },
    clearInfo() {
      this.userInfo = {
        username: '',
        pwd: '',
        email: '',
        token: ''
      }
      this.isUserNamePass = false
      this.isPWDPass = false
      this.isEmailPass = false
      this.isPass = false
    },
    /**
     * 用户名的失去光标判断
     * */
    changeName(userName) {
      let name = userName;
      if (name === '' || name === undefined || name === null) {
        // 用户名为空时，input框获得焦点
        this.$refs.input1.placeholder = "账号不能为空"
      } else {
      }
    },
    /**
     * 密码框失去光标判断
     * */
    changePwd(pass) {
      if (pass === '' || pass === undefined || pass === null) {
        // 密码为空时，input框获得焦点
        // this.$refs.input1.focus();
        this.$refs.input2.placeholder = "密码不能为空"
      } else {
      }
    },
    /**
     * 判断输入框是否全部通过验证
     * */
    isPassAll: function (error, boolean) {
      if ('用户名' === error) {
        this.isUserNamePass = boolean
      } else if ('邮箱' === error) {
        this.isEmailPass = boolean
      } else {
        this.isPWDPass = boolean
      }
      if (this.isUserNamePass === true && this.isPWDPass === true && this.isEmailPass === true) {
        this.isPass = true
      } else {
        this.isPass = false
      }
    },
    /**
     * 正则验证
     * */
    regularExpression(obj, rule, error, id) {
      if (!rule.test(obj)) {
        this.isPassAll(error, false)
        $('#' + id).html(error + '格式有误')
        this.$refs[id].placeholder = '请输入' + error
      } else {
        $('#' + id).html(error)
        this.$refs[id].placeholder = ''
        this.isPassAll(error, true)
      }
    },


  },
  computed: {}
}

window.onload = function () {
  document.querySelector('.img__btn').addEventListener('click', function () {
    document.querySelector('.content').classList.toggle('s--signup')
  })
}

</script>

<style scoped>
input::-webkit-input-placeholder {
  color: #d74444;
}

input::-ms-input-placeholder {
  color: #ccc;
}

#deeart-title {

  font-size: 60px;
}

.main-table {
  z-index: 2;
  position: absolute;
  margin-left: 50%;
  margin-top: 28%;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  background: #ededed;
}

input, button {
  border: none;
  outline: none;
  background: none;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}

.tip {
  font-size: 20px;
  margin: 40px auto 50px;
  text-align: center;
}

.content {
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  width: 900px;
  height: 480px;
  margin: -300px 0 0 -450px;
  border-radius: 20px;
  background: rgb(255, 255, 255);
}

.form {
  position: relative;
  width: 640px;
  height: 100%;
  transition: -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
  padding: 50px 30px 0;
}

.sub-cont {
  overflow: hidden;
  position: absolute;
  left: 640px;
  top: 0;
  width: 900px;
  height: 100%;
  padding-left: 260px;
  background: #fff;
  transition: -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
}

.content.s--signup .sub-cont {
  -webkit-transform: translate3d(-640px, 0, 0);
  transform: translate3d(-640px, 0, 0);
}

button {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 36px;
  border-radius: 30px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
}

.img {
  overflow: hidden;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 260px;
  height: 100%;
  padding-top: 360px;
}

.img:before {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  width: 900px;
  height: 100%;
  background-image: url('~assets/img/login/bg.jpg');
  background-size: cover;
  transition: -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
}

.img:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.content.s--signup .img:before {
  -webkit-transform: translate3d(640px, 0, 0);
  transform: translate3d(640px, 0, 0);
}

.img__text {
  z-index: 2;
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  padding: 0 20px;
  text-align: center;
  color: #fff;
  transition: -webkit-transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out;
  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
}

.img__text h2 {
  margin-bottom: 10px;
  font-weight: normal;
}

.img__text p {
  font-size: 15px;
  line-height: 1.5;
}

.content.s--signup .img__text.m--up {
  -webkit-transform: translateX(520px);
  transform: translateX(520px);
}

.img__text.m--in {
  -webkit-transform: translateX(-520px);
  transform: translateX(-520px);
}

.content.s--signup .img__text.m--in {
  -webkit-transform: translateX(0);
  transform: translateX(0);
}

.img__btn {
  overflow: hidden;
  z-index: 2;
  position: relative;
  width: 100px;
  height: 36px;
  margin: 0 auto;
  background: transparent;
  color: #fff;
  text-transform: uppercase;
  font-size: 20px;
  cursor: pointer;
}

.img__btn:after {
  content: '';
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  border-radius: 30px;
}

.img__btn span {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: -webkit-transform 0.6s;
  transition: transform 0.6s;
  transition: transform 0.6s, -webkit-transform 0.6s;
}

.img__btn span.m--in {
  -webkit-transform: translateY(-72px);
  transform: translateY(-72px);
}

.content.s--signup .img__btn span.m--in {
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.content.s--signup .img__btn span.m--up {
  -webkit-transform: translateY(72px);
  transform: translateY(72px);
}

h2 {
  width: 100%;
  font-size: 26px;
  text-align: center;
}

label {
  display: block;
  width: 260px;
  margin: 25px auto 0;
  text-align: center;
}

label span {
  font-size: 15px;
  color: #909399;
  text-transform: uppercase;
}

input {
  display: block;
  width: 100%;
  margin-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  text-align: center;
}

.forgot-pass {
  margin-top: 15px;
  text-align: center;
  font-size: 15px;
  color: #cfcfcf;
}

.forgot-pass a {
  color: #cfcfcf;
}

.submit {
  margin-top: 40px;
  margin-bottom: 20px;
  background: #d4af7a;
  text-transform: uppercase;
}

.fb-btn {
  border: 2px solid #d3dae9;
  color: #8fa1c7;
}

.fb-btn span {
  font-weight: bold;
  color: #455a81;
}

.sign-in {
  transition-timing-function: ease-out;
}

.content.s--signup .sign-in {
  transition-timing-function: ease-in-out;
  transition-duration: 0.6s;
  -webkit-transform: translate3d(640px, 0, 0);
  transform: translate3d(640px, 0, 0);
}

.sign-up {
  -webkit-transform: translate3d(-900px, 0, 0);
  transform: translate3d(-900px, 0, 0);
}

.content.s--signup .sign-up {
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
</style>
