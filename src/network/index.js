//引入fetch.js文件
import { fetch } from './fetch'
//定义获取数据的函数getData(),其中url,type,data对应fetch(config)中的config
export  function testAxios(url,type,data) {
//如果type为空，默认为post方法，也可以自己改成get
  if(type==='')
    type = 'post';
  return fetch({
//这里的url为baseURL下接口地址，如baseURL为'www.baidu.com',接口地址为'www.baidu.com/api/getdata',那么url里就写'api/getdata'
    url: url,
    method: type,
    data: data,
  })
}

