// import axios from 'axios'
//
// // 最终方案
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://deeart.cn.utools.club',
//       timeout: 5000
//     })
//     // 拦截器
//     instance.interceptors.request.use(config => {
//       // 动态设置请求头
//       config.headers.common = {
//         'Content-Type': 'application/json; charset=utf-8',
//         Authorization: window.localStorage.getItem("Authorization")
//       }
//       return config;
//     }, err => {
//
//     })
//
//     instance.interceptors.response.use(res => {
//     }, err => {
//     })
//
//     return instance(config)
//   })
// }
