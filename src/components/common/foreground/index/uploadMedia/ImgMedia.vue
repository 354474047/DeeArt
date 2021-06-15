<template>
<div>
  <img :src="imgSrc" class="opus-img" title="查看大图"/>
</div>
</template>

<script>
export default {
  name: "ImgMedia",
  data(){
    return{
      src:''
    }
  },
  props:{
    imgSrc:''
  }
}
</script>

<style scoped>
.opus-img {
  cursor: zoom-in;
  cursor: url("~assets/img/works/fada.png") auto;
  height: 300px;
  width: 450px;
  background-size: 100%;
}

</style>
