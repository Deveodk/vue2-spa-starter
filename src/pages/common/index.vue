<template>
    <div class="index">
        <seo-title content="Index | Deveo" />
        <seo-description content="Index page ..." />
        <div class="section white">
            <div class="container">
                <placeholder-boxes title="Index" />
            </div>
        </div>
        <div class="section light cbt">
            <div class="container">
                Test API data:
                {{ testApiData }}
                <br><br>
                <button @click="toastSuccess()">Success</button>
                <button @click="toastError()">Error</button>
                <button @click="toastWarning()">Warning</button>
                <button @click="toastInfo()">Info</button>
            </div>
        </div>
        <div class="section dark">
            <div class="container">
                <placeholder-boxes title="Index" />
            </div>
        </div>
        <div class="section light">
            <div class="container">
                <placeholder-boxes title="Index" />
            </div>
        </div>
    </div>
</template>

<script>
import * as testApiService from '@/services/TestApiService'
// import * as Sentry from '@sentry/browser'

export default {
    data () {
        return {
            testApiData: ''
        }
    },
    created () {
        setTimeout(() => {
            this.getTestApiData()
        }, 2000)
    },
    methods: {
        getTestApiData () {
            testApiService.find(1, {}, (response) => {
                this.testApiData = response.data.title
                this.$toastr('info', 'Test API Data was loaded', 'Awesome!')
            }, (err) => {
                console.log(err)
                // Sentry.captureException(new Error('Could not get Test API Data'))
            })
        },
        toastSuccess () {
            this.$toastr('success', 'Awesome - You\'re now logged in to the platform. Have fun!', 'Login successful')
        },
        toastInfo () {
            this.$toastr('info', 'This is an info text and you are supposed to read this.', 'Please note')
        },
        toastWarning () {
            this.$toastr('warning', 'You are only logged on in 1 hour. After that, please log in again.', 'Be aware!')
        },
        toastError () {
            this.$toastr('error', 'Username and/or password is incorrect. Please try again.', 'Login failed')
        }
    }
}
</script>
