import * as HttpService from '../HttpService'

let namespace = ''

let find = (id, options, cb, errorCb) => {
    HttpService.get(namespace + '/' + id, options, cb, errorCb)
}

let findAll = (params, cb, errorCb) => {
    HttpService.get(namespace, params, cb, errorCb)
}

let create = (body, cb, errorCb) => {
    HttpService.post(namespace, body, cb, errorCb)
}

let remove = (id, cb, errorCb) => {
    HttpService.remove(namespace + '/' + id, cb, errorCb)
}

let update = (id, body, cb, errorCb) => {
    HttpService.put(namespace + '/' + id, body, cb, errorCb)
}

export {
    find,
    findAll,
    create,
    remove,
    update
}
