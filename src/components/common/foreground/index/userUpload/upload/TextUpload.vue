<template>
  <div class="photo-upload">
    <div class="photo-upload-body">
      <form>
        <div class="photo-body">
          <div class="photo-left">

            <textarea class="text-area" rows="14" cols="35"></textarea>
            <div>添加一段文字</div>
          </div>
        </div>

        <div class="label-body">
          <input maxlength="50" class="label-body-input" placeholder="为你的作品加上标签例：#人文#黑白"/>
        </div>
        <div class="submit-btn">
          <input value="提交" type="submit">
          <input value="重置" type="reset">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

$(function () {
  $('#file').change(function () {
    const reads = new FileReader();
    const f = document.querySelector('#file').files[0];
    reads.readAsDataURL(f);
    reads.onload = function (e) {
      document.getElementById('show').src = this.result;
    };
  })
})


export default {
  name: "TextUpload"
}
</script>

<style scoped>
.text-area{
  font-size: 20px;
}
.submit-btn input {
  margin-left: 5px;
  margin-top: 3px;
  width: 200px;
  padding: 6px;
  background-color: #428bca;
  border-color: #357ebd;
  color: #fff;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px; /* future proofing */
  -khtml-border-radius: 10px; /* for old Konqueror browsers */
  text-align: center;
  vertical-align: middle;
  border: 1px solid transparent;
  font-weight: 900;
  font-size: 125%

}

.label-body-input {
  outline-style: none;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 14px 14px;
  font-size: 20px;
  font-family: "Microsoft soft";
  height: 50px;
  width: 350px;
  border: 1px solid rgba(1, 1, 1, 0.4);

}

.inputlabelBox {
  display: flex;
  justify-content: center;
}

img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}


.inputBox {
  height: 300px;
  width: 300px;
  background-image: url("../../../../../../assets/img/upload/photoUpload/photoUpload.png");
  background-repeat: no-repeat;
  background-size: 100%;
}

.photo-upload {
  display: flex;
  justify-content: center;
}

.photo-upload-body {
  min-width: 690px;
  min-height: 450px;
  border-radius: 5px;
  background-color: #f8f4f4;
  box-shadow: 2px 2px 3px rgba(179, 178, 178, 0.5);
}

.photo-body {
  display: flex;
  justify-content: center;
}

.photo-right {
  width: 350px;
  height: 350px;
  border: 1px solid rgba(163, 155, 155, 0.5);

}

.photo-left {
  min-width: 350px;
  height: 350px;
  border: 1px solid rgba(163, 155, 155, 0.5);

}

</style>
