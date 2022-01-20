import request from '@/utils/request'

export function getWebDatas (data) {
  return request({
    url: '/web/data',
    method: 'get',
    params: data
  })
}
