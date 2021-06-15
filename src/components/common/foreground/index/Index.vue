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
  <div class="user-content" v-for="userUploadInfo of indexData" :key="userUploadInfo">
    <div class="user-content-body">
      <!--   用户发布的媒体   -->
      <user-opus  v-bind:userUploadInfo="userUploadInfo" #opus-content>
        <video-media v-if="userUploadInfo.articleSort==='video'" v-bind:video-src="userUploadInfo.adress"></video-media>
        <audio-media v-else-if="userUploadInfo.articleSort==='audio'" v-bind:audio-src="userUploadInfo.adress"></audio-media>
        <img-media v-else-if="userUploadInfo.articleSort==='img'" v-bind:img-src="userUploadInfo.adress"></img-media>
        <text-media v-else v-bind:text-content="userUploadInfo.article_content"></text-media>
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
import VideoMedia from "@/components/common/foreground/index/uploadMedia/VideoMedia";
import AudioMedia from "@/components/common/foreground/index/uploadMedia/AudioMedia";
import ImgMedia from "@/components/common/foreground/index/uploadMedia/ImgMedia";
import TextMedia from "@/components/common/foreground/index/uploadMedia/TextMedia";
import {computed} from "vue";

export default {
  name: "index",
  components: {
    TextMedia,
    ImgMedia,
    AudioMedia,
    VideoMedia, TextUpload, MusicUpload, VideoUpload, PhotoUpload, UserUpload, UserOpus, TopNavigation},
  data() {
    return {
      dataCount:this.$store.state.indexData.length,
      test:0,
      indexData:this.$store.state.indexData
    }
  },
  mounted() {

  },
  computed:{

  }

}
</script>

<style scoped>
.opus-img-content {
  width: 120px;
  height: auto;
  margin-left: 6px;
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
