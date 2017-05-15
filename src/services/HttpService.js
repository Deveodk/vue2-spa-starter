import Vue from 'vue'
import store from '../store/index'

let requestsTotal = 0
let requestCompleted = 0
let postTotal = 0
let postCompleted = 0

const get = (path, data, cb, errorCb) => {
    requestsTotal++
    store.state.loading = true
    store.state.errors = []
    Vue.axios.get(path, {params: data})
        .then((response) => {
            requestCompleted++
            loading()
            cb(response)
        }).catch(error => {
        requestCompleted++
        loading()
        console.log(error)
        errorCb('test')
        // errorCb(error)
    })
}

const remove = (path, cb, errorCb) => {
    requestsTotal++
    store.state.loading = true
    store.state.errors = []
    Vue.axios.delete(path)
        .then((response) => {
            requestCompleted++
            loading()
            cb(response)
        }).catch(error => {
        requestCompleted++
        loading()
        errorCb(error)
    })
}

const post = (path, data, cb, errorCb) => {
    postTotal++
    store.state.inputLoading = true
    store.state.errors = []
    Vue.axios.post(path, data)
        .then((response) => {
            postCompleted++
            PostLoading()
            cb(response)
        }).catch(error => {
        postCompleted++
        PostLoading()
        if (error.response !== undefined) {
            if (error.response.status === 422) {
                store.state.errors = error.response.data
            }
        }
    })
}

const put = (path, data, cb, errorCb) => {
    postTotal++
    store.state.inputLoading = true
    store.state.errors = []
    data['_method'] = 'PUT'
    Vue.axios.post(path, data)
        .then((response) => {
            postCompleted++
            PostLoading()
            cb(response)
        }).catch(error => {
        postCompleted++
        PostLoading()
        if (error.response !== undefined) {
            if (error.response.status === 422) {
                store.state.errors = error.response.data
            }
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
