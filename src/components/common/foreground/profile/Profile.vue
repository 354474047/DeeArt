<template>
  <div class="profile">
    <div class="left">
      <div class="m-img">
        <!-- <a class="hdimg img" href="">
                <img src="../assets/img/1.jpg" alt=""/>
            </a> -->
        <img src="~assets/img/profile/1.jpg" alt=""/>
      </div>
      <h1 class="ttl">
        <a href="">用户名</a>
      </h1>
    </div>

    <div class="right">
      <div class="btn">
        <a href="" @click="reBackIndex">
          <em>返回首页</em>
        </a>
      </div>
      <div class="page">
        <a href="#" class="top">▲</a>
      </div>
      <div class="main">
        <div class="box">
          <h2><a>从简约中领悟品质的真谛</a></h2>
          <a href=""
          ><img class="box-img" src="~assets/img/profile/2.jpg" alt=""
          /></a>
          <div class="text"><p>专注从deeart开始</p></div>
          <div class="info-box">
            <img src="~assets/img/profile/time.png" alt=""/>
            <a href="">2012-03-14</a>
            <img src="~assets/img/profile/like.png" alt=""/>
            <a href="">792</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  methods: {
    reBackIndex() {
      this.$router.push('/index')
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

body {
  background-color: rgba(172, 160, 160, 0.2);
}

.left {
  position: fixed;
  float: left;
  flex-direction: column;
  padding: 44px 30px;
  text-align: center;
  width: 200px;
  height: 100%;
  background-color: #666666;
}

.m-img img {
  border: 2px solid #95a153;
  padding: 5px;
  width: 128px;
  height: 128px;
  vertical-align: middle;
  border-radius: 50%;
  margin: 0 0 30px;
  vertical-align: middle;
  margin-bottom: 30px;
}

.left a {
  color: #fff;
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 30px;
}

.right {
  width: 82%;
  margin-left: 260px;
  float: left;
}

.btn {
  position: fixed;
  top: 10px;
  right: 5px;
  height: 23px;
  margin: 0 5px 0 0;

}

.btn em {
  background-color: rgb(107, 102, 102);
  font: 13px/200% "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", tahoma,
  arial, simsun, "宋体";
  bottom: 5px;
  border: solid 1px white;
  border-radius: 5px;
  color: rgba(250, 250, 250, 1.0);
  padding: 3px;
  box-shadow: 5px rgba(133, 90, 90, 0.3);
}

.main {
  display: flex;
  flex-direction: column;
}

.box {
  background: rgba(219, 219, 219, 0.5);
  box-shadow: 5px 5px 5px rgba(133, 90, 90, 0.3);
  width: 555px;
  min-width: 555px;
  padding: 20px 30px;
  border-radius: 5px;
  margin-top: 20px;
  margin-left: 100px;
  border: 2px dashed rgba(170, 133, 133, 0.2);
}

.box a {
  color: #95a153;
  bottom: 20px;
}

.box-img {
  border-radius: 5px;
  box-shadow: 5px 5px 5px rgba(133, 90, 90, 0.3);
}

.text {
  font: 12px/200% "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", tahoma,
  arial, simsun, "宋体";
  color: #666;
}

.info-box {
  box-shadow: rgba(238, 238, 238, 0.5);
  background: rgba(219, 219, 219, 0.5);
  padding: 10px 20px;
}

.info-box img {
  height: 15px;
  margin-right: 5px;
}

.info-box a {
  margin-right: 15px;
}

.page {
  display: flex;
  position: fixed;
  right: 50px;
  bottom: 50px;
  box-shadow: 10px rgba(138, 121, 121, 0.6);
  width: 55px;
  height: 55px;
  border-radius: 50%;
  background-color: rgb(250, 244, 244);
}

.page a {

  padding: 16px 18px;
  color: #95a153;
  font-size: 20px;
}
</style>
