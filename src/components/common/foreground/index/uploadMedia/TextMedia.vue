<template>
<div>
  <span class="opus-img-content">{{ textContent }}</span>
</div>
</template>

<script>
export default {
  name: "TextMedia",
  data(){
    return{
      content:''
    }
  },
  props:{
    textContent:''
  }
}
</script>

<style scoped>

</style>
