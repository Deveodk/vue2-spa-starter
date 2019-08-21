import * as HttpService from './HttpService'

let namespace = '/auth'

let requestReset = (params, cb, errorCb) => {
    HttpService.post(namespace + '/forgot-password', params, cb, errorCb)
}

let setNewPassword = (params, cb, errorCb) => {
    HttpService.post(namespace + '/set-new-password', params, cb, errorCb)
}

let checkToken = (params, cb, errorCb) => {
    HttpService.post(namespace + '/check-token', params, cb, errorCb)
}

export {
    requestReset,
    setNewPassword,
    checkToken
}
