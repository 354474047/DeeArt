import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: ''
  })
}

export function getHomeGoods(type, page) {
  return request({
    url: '',
    params: {
      type,
      page
    }
  })
}
