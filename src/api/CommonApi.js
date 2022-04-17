import request from '@/utils/network'
import qs from 'qs'

export default class CommonApi {
  static getDetail() {
    return request({
      url: '/ordernumber/getOrder',
      method: 'get',
      headers: { 'token': '9D2F6E7DE6A9506C3B139870797FAB1E' }
    })
  }
}