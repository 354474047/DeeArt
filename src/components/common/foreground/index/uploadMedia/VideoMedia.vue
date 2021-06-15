<template>
  <div>
  <video id="video" autoplay="autoplay" controls="controls" style="width:450px;height: 250px;">
    <source :src="videoSrc" type="video/ogg">
    <source :src="videoSrc" type="video/mp3">
    Your browser does not support the video tag.
  </video>
  </div>
</template>

<script>
export default {
  name: "VideoMedia",
  data(){
    return{
      src:''
    }
  },
  props:{
    videoSrc:''
  }
}
</script>

<style scoped>

</style>
