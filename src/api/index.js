/**
 * api管理
 */
import request from './../utils/request'

export default {
    login(params) {
        return request.post('/user/login', params, { mock: true })
    }
}