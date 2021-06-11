<template>
  <div class="top">
    <!--  导航栏  -->
    <top-navigation></top-navigation>
  </div>
  <div class="user-upload">
    <!--  用户上传操作  -->
    <user-upload></user-upload>
  </div>
  <div class="user-upload-content">
    <router-view></router-view>
  </div>
  <div class="user-content" v-for="count in count">
    <div class="user-content-body">
      <!--   用户发布的图片   -->
      <user-opus #opus-content>
        <!--        <video id="video" autoplay="autoplay" controls="controls" style="width:450px;height: 250px;">-->
        <!--          <source src="../../../../assets/video/login/vlogin01.mp3" type="video/ogg">-->
        <!--          <source src="../../../../assets/video/login/vlogin01.mp3" type="video/mp3">-->
        <!--          Your browser does not support the video tag.-->
        <!--        </video>-->
        <img src="../../../../assets/img/works/DeeaArt01.jpg" class="opus-img" title="查看大图"/>
        <!--        <audio controls>-->
        <!--          <source src="../../../../assets/mp3/001.mp3" type="audio/ogg">-->
        <!--          <source src="../../../../assets/mp3/001.mp3" type="audio/mpeg">-->
        <!--          您的浏览器不支持 audio 元素。-->
        <!--        </audio>-->
        <!--        <span class="opus-img-content">发表的文字内容</span>-->
      </user-opus>
    </div>
  </div>
</template>

<script>
import TopNavigation from "@/components/common/foreground/index/topNavigation/TopNavigation";
import UserOpus from "@/components/common/foreground/index/userOpus/UserOpus";
import UserUpload from "@/components/common/foreground/index/userUpload/UserUpload";
import PhotoUpload from "@/components/common/foreground/index/userUpload/upload/PhotoUpload";
import VideoUpload from "@/components/common/foreground/index/userUpload/upload/VideoUpload";
import MusicUpload from "@/components/common/foreground/index/userUpload/upload/MusicUpload";
import TextUpload from "@/components/common/foreground/index/userUpload/upload/TextUpload";

export default {
  name: "index",
  components: {TextUpload, MusicUpload, VideoUpload, PhotoUpload, UserUpload, UserOpus, TopNavigation},
  data() {
    return {
      count: 10,
      test:0,
      indexData:{}
    }
  },
  mounted() {

  }

}
</script>

<style scoped>
.opus-img-content {
  width: 120px;
  height: auto;
  margin-left: 6px;
}

.opus-img {
  cursor: zoom-in;
  cursor: url("../../../../assets/img/works/fada.png") auto;
  height: 300px;
  width: 450px;
  background-size: 100%;
}

body {
  background-image: url('~assets/img/login/ilogin01.jpg');

}

.top {
  position: fixed;
  left: 0;
  top: 0;
}

.user-content, .user-upload {
  display: flex;
  justify-content: center;
  margin: 25px;
}

.user-content-body {
  margin-left: 130px;
  width: 800px;
  min-width: 750px;
  height: auto;
}

.user-upload {
  margin-top: 80px;
  margin-bottom: 15px;
}
</style>
