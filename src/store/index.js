import {createStore} from 'vuex'

export default createStore({
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization'),
    indexData:[{
      "user_head_photo": "/1.jpg",
      "article_content": "sdsd",
      "userName": "陈高尚",
      "adress": "~assets/video/login/vlogin01.mp4",
      "articleDate": "2021-06-09T08:54:22.000+00:00",
      "article_id": 1,
      "article_title": "hello  world",
      "user_id": 1,
      "articleLikeCount": 5,
      "articleSort": "video",
      "lableName": [
        "游戏",
        "cosplay"
      ],
      "articleCommentCount": 5,
      "articleForwordCount": 5
    }
    ,
{
  "user_head_photo": "/11.jpg",
  "article_content": "watchNihao",
  "userName": "陈低下",
  "adress":"@/assets/img/works/DeeaArt01.jpg",
  "articleDate": "2021-06-16T12:19:16.000+00:00",
  "article_id": 2,
  "article_title": "hello",
  "user_id": 2,
  "articleLikeCount": 6,
  "article_sort": "",
  "lableName": [
  "游戏",
  "cosplay"
],
  "articleCommentCount": 6,
  "articleForwordCount": 6
}]
  },

  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin(state, user) {
      state.Authorization = user.Authorization;
      localStorage.removeItem('Authorization');
      localStorage.setItem('Authorization', user.Authorization);
    },
    changeIndexData(state,indexData){
      state.indexData = indexData
    }

  },
  actions: {},
  modules: {}
})
