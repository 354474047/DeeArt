<template>
<div>
  <audio controls>
    <source :src="audioSrc" type="audio/ogg">
    <source :src="audioSrc" type="audio/mpeg">
    您的浏览器不支持 audio 元素。
  </audio>
</div>
</template>

<script>
export default {
  name: "AudioMedia",
  data(){
    return{
      src:''
    }
  },
  props:{
    audioSrc:''
  }
}
</script>

<style scoped>

</style>
