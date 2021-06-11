<template>
  <div class="photo-upload">
    <div class="photo-upload-body">
      <form>
        <div class="photo-body">
          <div class="photo-left">
            <label for="video" class="inputlabelBox">
              <div class="inputBox"></div>
            </label>
            <input class="form-control" type="file" style="height:auto;opacity:0;" id="video" name="video"/>
            <div>添加一条视频</div>
          </div>
          <div class="photo-right">
            <video class="show-photo" style="height:auto;" src="" id="video0" controls="controls"></video>
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
window.onload = function () {
  $("#video").change(function () {
    var objUrl = getObjectURL(this.files[0]);
    console.log("objUrl = " + objUrl);
    if (objUrl) {
      $("#video0").attr("src", objUrl);
    }
  });
  //建立一个可存取到该file的url
  function getObjectURL(file) {
    var url = null;
    if (window.createObjectURL != undefined) { // basic
      url = window.createObjectURL(file);
    } else if (window.URL != undefined) { // mozilla(firefox)
      url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) { // webkit or chrome
      url = window.webkitURL.createObjectURL(file);
    }
    return url;
  }

}

export default {
  name: "VideoUpload"
}
</script>

<style scoped>
input {
  background: none;
  outline: none;
  border: none;
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
  margin-top: 5px;
  outline-style: none;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 14px 14px;
  font-size: 20px;
  font-family: "Microsoft soft";
  height: 50px;
  width: 360px;
  border: 1px solid rgba(1, 1, 1, 0.4);

}

.inputlabelBox {
  display: flex;
  justify-content: center;
}

.show-photo {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}



.inputBox {
  height: 300px;
  width: 300px;
  background-image: url("../../../../../../assets/img/upload/videoUpload/videoUpload.png");
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
  min-width: 350px;
  height: 350px;

}

.photo-left {
  min-width: 350px;
  height: 350px;

}

</style>
