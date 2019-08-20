import Vue from 'vue'
import store from '../store/index'

let requestsTotal = 0
let requestCompleted = 0
let postTotal = 0
let postCompleted = 0

const get = (path, data, cb, errorCb) => {
    requestsTotal++
    store.state.loading = true
    Vue.axios.get(path, {params: data})
        .then((response) => {
        requestCompleted++
        loading()
        cb(response)
    }).catch(error => {
        requestCompleted++
        loading()
        if (errorCb !== undefined) {
            errorCb(error.response)
        }
    })
}

const remove = (path, cb, errorCb) => {
    requestsTotal++
    store.state.loading = true
    Vue.axios.delete(path)
        .then((response) => {
            requestCompleted++
            loading()
            cb(response)
        }).catch(error => {
        requestCompleted++
        loading()
        if (errorCb !== undefined) {
            errorCb(error.response)
        }
    })
}

const post = (path, data, cb, errorCb) => {
    postTotal++
    store.state.inputLoading = true
    Vue.axios.post(path, data)
        .then((response) => {
            postCompleted++
            PostLoading()
            cb(response)
        }).catch(error => {
        postCompleted++
        PostLoading()
        if (errorCb !== undefined) {
            errorCb(error.response)
        }
    })
}

const put = (path, data, cb, errorCb) => {
    postTotal++
    store.state.inputLoading = true
    data['_method'] = 'PUT'
    Vue.axios.put(path, data).then((response) => {
            postCompleted++
            PostLoading()
            cb(response)
        }).catch((error) => {
        postCompleted++
        PostLoading()
        if (errorCb !== undefined) {
            errorCb(error.response)
        }
    })
}

function loading () {
        if (requestsTotal === requestCompleted) {
            requestsTotal = 0
            requestCompleted = 0
            store.state.loading = false
        }
}

function PostLoading () {
    if (postTotal === postCompleted) {
        postTotal = 0
        postCompleted = 0
        store.state.inputLoading = false
    }
}

export {
    get,
    remove,
    post,
    put
}

