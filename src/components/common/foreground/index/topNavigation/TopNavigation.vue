<template>
  <div class="top-navigation">
    <div class="top-navigation-body">
      <div>
        <h1 class="logo-body">
          <svg width="1em" height="1em" fill="none" t="1623047708878" class="icon-logo" viewBox="0 0 1024 1024"
               version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="3636">
            <path
              d="M512.92 98.23c-229.21 0-415.03 185.81-415.03 415.03s185.82 415.03 415.03 415.03 415.03-185.81 415.03-415.03S742.13 98.23 512.92 98.23z m0 754.6c-187.54 0-339.57-152.03-339.57-339.57s152.03-339.57 339.57-339.57 339.57 152.03 339.57 339.57-152.03 339.57-339.57 339.57z"
              fill="#ffffff" p-id="3637"></path>
            <path
              d="M637.98 805.67c-1.2 0-2.4-0.06-3.62-0.17-20.74-1.98-35.96-20.39-33.99-41.14 0.04-0.33 3.7-43.28-8.38-90.36-14.7-57.27-45.56-94.63-91.72-111.05-166.65-59.29-165.13-278.38-164.99-287.68 0.33-20.84 17.86-37.48 38.31-37.13 20.82 0.32 37.43 17.44 37.14 38.25-0.03 2.36-0.46 174.45 114.83 215.47 70.97 25.26 119.44 82.58 140.13 165.8 14.76 59.34 10.01 111.65 9.81 113.85-1.86 19.53-18.29 34.16-37.52 34.16z"
              fill="#ffffff" p-id="3638"></path>
            <path
              d="M369.23 798.69c-18.16 0-34.17-13.14-37.19-31.65-0.87-5.31-20.13-130.79 76.29-209.59 16.14-13.18 39.9-10.81 53.09 5.33 13.19 16.13 10.81 39.9-5.33 53.09-63.04 51.53-49.71 138.13-49.58 138.99 3.36 20.57-10.58 39.96-31.14 43.32-2.07 0.34-4.12 0.51-6.14 0.51zM572.22 495.85c-10.99 0-21.88-4.77-29.34-13.98-13.12-16.18-10.62-39.95 5.57-53.07 73.74-59.74 62.27-153.63 62.14-154.57-2.73-20.66 11.8-39.62 32.46-42.35 20.6-2.74 39.62 11.81 42.35 32.46 0.73 5.55 16.76 137.05-89.46 223.1-6.97 5.66-15.37 8.41-23.72 8.41z"
              fill="#ffffff" p-id="3639"></path>
          </svg>
          <span class="dee-art">DeeArt</span>
        </h1>
      </div>
      <div class="body-content">
        <span class="span-a">
          <a href="" @click="this.$router.push('/index')">首页</a>
        </span>
      </div>
      <div class="body-content">
        <span class="span-a">
          <a href="#">发现</a>
        </span>
      </div>
      <div class="body-content">
        <span class="span-a">
          <a @click="showMe">我的</a>
        </span>
      </div>
      <div class="body-content">
        <div class="input-info-body">
          <div class="input-info">
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                 class="input-svg">
              <path
                d="M9.462 3a6.462 6.462 0 015.295 10.168l1.914 1.914a1.124 1.124 0 11-1.59 1.589l-1.913-1.914A6.462 6.462 0 119.462 3zm0 1.686a4.776 4.776 0 100 9.553 4.776 4.776 0 000-9.553z"
                fill="currentColor"></path>
            </svg>
            <input class="select-info" type="text" placeholder="搜索用户"/>
            <span class="_3xZP9tQVNqINtPkT1AxT-B ">NEW</span>
          </div>
        </div>
      </div>
      <div class="_2pOEFSBRHmY5j-cQBqZkuq">
        <div class="_1RUaApTYhUQcrd6kTD3Qai" title="通知">
          <a class="_3-JE7mcQPzz8cgTRkdtcBf" href="#">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                 class="FIUeB7vref7yFty-YoA9h">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M14.842 18.19c-.365 1.278-1.499 2.21-2.842 2.21s-2.477-.932-2.842-2.21h5.684zM12 3.6c.215 0 .55.033 1.006.1 2.686.487 4.778 2.981 4.778 5.99v3.652c0 1.387 1.416 1.782 1.416 3.524H4.8c0-1.735 1.416-2.137 1.416-3.524V9.69c0-3.009 2.092-5.503 4.778-5.99.44-.067.774-.1 1.006-.1z"
                    fill="currentColor"></path>
            </svg>
          </a>
        </div>

        <div class="_1RUaApTYhUQcrd6kTD3Qai" title="设置">
          <a class="_3-JE7mcQPzz8cgTRkdtcBf" href="#">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em"
                 class="FIUeB7vref7yFty-YoA9h">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M10 3.5h4l.566 1.982 1.796 1.036 2-.5 2 3.464-1.434 1.481v2.074l1.433 1.48-2 3.465-1.999-.5-1.796 1.036L14 20.5h-4l-.566-1.982-1.796-1.036-2 .5-2-3.464 1.434-1.481v-2.074L3.639 9.482l2-3.464 1.999.5 1.796-1.036L10 3.5zM12 17a5 5 0 100-10 5 5 0 000 10z"
                    fill="currentColor"></path>
              <circle cx="12" cy="12" r="3" fill="currentColor"></circle>
            </svg>
          </a></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {testAxios} from "@/network";
import store from "@/store/index"

export default {
  name: "topNavigation",
  data() {
    return {
      isLogin: false
    }
  },
  methods: {
    showMe() {
      this.$router.push('/profile')

      // testAxios('profile', 'post', {}).then(res => {
      //
      //   this.$router.push('/profile')
      //
      // }).catch(error => {
      //   console.log(error);
      // })

    }
  }
}
</script>

<style scoped>

.top-navigation {
  height: 64px;
  background-color: #444;
  display: flex;
  justify-content: center;
  width: 100vw;
  box-sizing: border-box;
}

.top-navigation-body {
  min-width: 1200px;
  height: 64px;
  display: flex;
  justify-content: center;
  float: left;
}

.span-a {
  position: relative;
  display: block;
}

.span-a a {
  color: #999999;
  cursor: pointer;
  transition-property: color;
  transition-duration: 300ms;
  transition-timing-function: ease;
}

a:visited {
  text-decoration: none;
}

a:hover {
  color: #e5e1e1;
}

a:active {
  color: #f5f1f1;
}

.input-info {

}

.select-info {
  float: left;
  box-sizing: border-box;
  width: 192px;
  height: 32px;
  padding: 6px 0;
  line-height: 20px;
  font-weight: bold;
  border: 0;
  background: transparent;
  outline: none;
}

.body-content {
  min-width: 80px;
  height: 100%;
  float: left;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.25;
  line-height: 64px;
  text-align: center;
}

.input-info-body {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 232px;
  height: 32px;
  border-radius: 16px;
  background: #ffffff;
}

.input-svg {
  float: left;
  margin: 6px 4px 0 12px;
  font-size: 20px;
  color: #CCCCCC;
}

.icon-logo {
  width: 60px;
  height: 35px;
  color: #ffffff;
}

.logo-body {
  float: left;
  margin-right: 32px;
  margin-top: 14px;
  display: flex;
  justify-content: center;
}

.dee-art {
  font-size: 25px;
  width: 102px;
  height: 32px;
  color: #ffffff;
  margin-top: 4px;


}

._3xZP9tQVNqINtPkT1AxT-B {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 44px;
  height: 24px;
  border-radius: 12px;
  font-size: 12px;
  line-height: 1.429;
  line-height: 24px;
  text-align: center;
  color: #999999;
  font-weight: bold;
  background: #E6E6E6;
}

._2pOEFSBRHmY5j-cQBqZkuq {
  margin-top: 20px;
  float: right;
}

._1RUaApTYhUQcrd6kTD3Qai {
  position: relative;
  min-width: 56px;
  height: 100%;
  float: left;
  font-size: 14px;
  text-align: center;
}

._3-JE7mcQPzz8cgTRkdtcBf {
  color: #999999;
  cursor: pointer;
  transition-property: color;
  transition-duration: 300ms;
  transition-timing-function: ease;
}

.FIUeB7vref7yFty-YoA9h {
  display: inline-block;
  vertical-align: middle;
  font-size: 24px;
}

input::-webkit-input-placeholder {
  font-size: 15px;
}
</style>
