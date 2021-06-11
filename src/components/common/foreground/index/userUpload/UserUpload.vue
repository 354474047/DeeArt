<template>
  <div class="upload">
    <div id="" class="publishBarArea">
      <ul id="publishPostBar" class="m-nav2">
        <li class="user">
          <a href="">
            <img
              src="https://avaimg.lf127.net/img/dXRGR2E3emx4MWxINVRVMEdXNnRHRzEwUGg2YjRHa2llRnRNMER4aWhDV3FHMHJXNzdYYVl3PT0.jpg"></a>
        </li>
        <li>
          <!--文字-->
          <router-link to="/index/text">
            <a class="publishlink n21" href="#">
              <svg t="1623116348587" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="14089" width="75" height="75">
                <path
                  d="M100.992 64l822.016 0 0 277.44-36.352 0c0 0-69.376-169.408-151.232-184.192-81.856-14.784-138.752-4.608-138.752-4.608L595.648 859.968c0 0 22.72 47.808 60.224 51.2l83.008 0L738.88 960 285.184 960l1.152-50.048L359.04 908.8c0 0 54.592-17.088 54.592-56.896 0-39.744 1.152-693.568 1.152-693.568S324.992 145.92 278.336 157.312C231.744 168.64 149.824 236.864 137.344 336.896L100.992 338.048 100.992 64z"
                  p-id="14090" fill="#2c2c2c"></path>
              </svg>
              <div class="publishlink-title">文字</div>
            </a>
          </router-link>
        </li>
        <li>
          <!--图片-->
          <router-link to="/index/photo">
            <a class="publishlink n22" href="#">
              <svg t="1623115516688" class="icon" viewBox="0 0 1311 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="3083" width="75" height="75">
                <path
                  d="M1107.5584 150.7328 996.1472 150.7328 956.416 55.296C956.416 55.296 934.7072 6.144 890.88 6.144L598.4256 6.144C557.056 6.144 538.2144 54.0672 538.2144 54.0672L498.0736 150.7328 370.688 150.7328 370.688 109.7728 240.4352 109.7728C129.024 109.7728 38.912 199.8848 38.912 310.8864L38.912 808.96C38.912 920.3712 129.024 1010.4832 240.4352 1010.4832L1107.5584 1010.4832C1218.56 1010.4832 1308.672 920.3712 1308.672 808.96L1308.672 351.8464C1308.672 240.8448 1218.56 150.7328 1107.5584 150.7328L1107.5584 150.7328ZM742.1952 902.3488C561.5616 902.3488 415.3344 756.1216 415.3344 575.488 415.3344 395.264 561.5616 248.6272 742.1952 248.6272 922.8288 248.6272 1069.056 395.264 1069.056 575.488 1069.056 756.1216 922.8288 902.3488 742.1952 902.3488L742.1952 902.3488Z"
                  p-id="3084"></path>
                <path
                  d="M954.7776 579.1744C954.7776 696.32 859.3408 791.7568 742.1952 791.7568 625.0496 791.7568 529.6128 696.32 529.6128 579.1744 529.6128 461.6192 625.0496 366.1824 742.1952 366.1824 859.3408 366.1824 954.7776 461.6192 954.7776 579.1744"
                  p-id="3085"></path>
              </svg>
              <div class="publishlink-title">图片</div>
            </a>
          </router-link>

        </li>
        <li>
          <!--音乐-->
          <router-link to="/index/music">
            <a class="publishlink n23" href="#">
              <svg t="1623116143678" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="9240" width="75" height="75">
                <path
                  d="M951.1 0L308.4 147.2v127.5h-0.5v481.6c-24.3-17.5-53.9-28.1-86.1-28.1C140.2 728.2 74 794.4 74 876s66.2 147.8 147.8 147.8S369.6 957.7 369.6 876c0-7.5-1.1-14.7-2.2-22h2.2V346.1l519.7-119V648c-24.3-17.5-53.9-28.1-86.1-28.1-81.6 0-147.8 66.2-147.8 147.8s66.2 147.8 147.8 147.8c81.6 0 147.8-66.2 147.8-147.8 0-7.5-1.1-14.7-2.2-22h2.2V0z"
                  fill="#000000" p-id="9241"></path>
              </svg>
              <div class="publishlink-title">音乐</div>
            </a>
          </router-link>

        </li>
        <li>
          <!--视频-->
          <router-link to="/index/video">
            <a class="publishlink publishlink-video n24" href="#">
              <svg t="1623116225210" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="13117" width="75" height="75">
                <path
                  d="M432 356.16A32 32 0 0 0 384 384v256a32 32 0 0 0 48 27.84l224-128a32 32 0 0 0 0-55.68z m16 228.48v-145.6L576 512z"
                  fill="#2c2c2c" p-id="13118"></path>
                <path
                  d="M864 32H160a128 128 0 0 0-128 128v704a128 128 0 0 0 128 128h704a128 128 0 0 0 128-128v-128H96V288h896V160a128 128 0 0 0-128-128z m-96 768h160v64a64 64 0 0 1-64 64h-96z m-224 0h160v128h-160z m-224 0h160v128h-160z m-64 0v128H160a64 64 0 0 1-64-64v-64zM256 224H96V160a64 64 0 0 1 64-64h96z m224 0h-160V96h160z m224 0h-160V96h160z m224 0h-160V96h96a64 64 0 0 1 64 64z"
                  fill="#2c2c2c" p-id="13119"></path>
                <path d="M960 384m-32 0a32 32 0 1 0 64 0 32 32 0 1 0-64 0Z" fill="#2c2c2c" p-id="13120"></path>
                <path d="M960 480a32 32 0 0 0-32 32v128a32 32 0 0 0 64 0v-128a32 32 0 0 0-32-32z" fill="#2c2c2c"
                      p-id="13121"></path>
              </svg>
              <div class="publishlink-title">视频</div>
            </a>
          </router-link>

        </li>
        <li>
          <!--长文章-->
          <router-link to="/index/text">
            <a class="publishlink n25" href="#">
              <svg t="1623115702990" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="7441" width="75" height="75">
                <path
                  d="M963.584 0q24.576 0 42.496 17.408t17.92 43.008l0 692.224q0 8.192-17.92 31.232t-45.056 53.248-60.416 63.488-63.488 60.416-53.248 45.056-31.232 17.92l-692.224 0q-24.576 0-42.496-17.92t-17.92-42.496l0-903.168q0-25.6 17.92-43.008t42.496-17.408l903.168 0zM649.216 812.032q13.312 0 22.528-9.728t9.216-23.04-9.216-22.528-22.528-9.216l-486.4 0q-13.312 0-23.04 9.216t-9.728 22.528 9.728 23.04 23.04 9.728l486.4 0zM909.312 551.936q14.336 0 23.552-9.728t9.216-24.064q0-12.288-9.216-21.504t-23.552-9.216l-746.496 0q-13.312 0-23.04 9.216t-9.728 21.504q0 14.336 9.728 24.064t23.04 9.728l746.496 0zM909.312 325.632q14.336 0 23.552-9.728t9.216-24.064q0-13.312-9.216-22.528t-23.552-9.216l-746.496 0q-13.312 0-23.04 9.216t-9.728 22.528q0 14.336 9.728 24.064t23.04 9.728l746.496 0z"
                  p-id="7442" fill="#2c2c2c"></path>
              </svg>
              <div class="publishlink-title">长文章</div>
            </a>
          </router-link>

        </li>
      </ul>
    </div>
    <div></div>
  </div>
</template>

<script>

export default {
  name: "UserUpload",
  components: {}
}
</script>

<style scoped>

.upload {
  height: 110px;
  min-width: 700px;
  background-color: #f8f4f4;
  border: 1px solid rgba(172, 169, 169, 0.3);
  box-shadow: 2px 2px 3px rgba(194, 190, 190, 0.3);

}

.m-nav2 {
  position: relative;
  z-index: 9;
  margin: 0 0 18px;
  padding: 1px 2px 3px;
  background-position: 0 0;
}

.m-nav2, .m-nav2 li, .m-nav2 a {
  height: 110px;
}

.m-nav2, .m-nav2 a {
  /*background: url("") no-repeat 999px 999px;*/
}

.m-nav2 .user {
  position: relative;
  width: 110px;
}

.m-nav2 li {
  float: left;
  width: 112px;
  margin: 0 0 -1px;
}

.m-nav2, .m-nav2 li, .m-nav2 a {
  height: 110px;
}

li {
  list-style: none;
}

#publishPostBar li a.publishlink {
  position: relative;
  zoom: 1;
  overflow: visible;
}

.publishBarArea {
  margin-top: 4px;
}

.publishlink-title {
  margin-top: 5px;
}
</style>
