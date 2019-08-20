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
        this.getTestApiData()
    },
    methods: {
        getTestApiData () {
            testApiService.find(1, {}, (response) => {
                this.testApiData = response.data.title
                this.$toastr('success', 'Vi har hentet test API data', 'Sådan')
            }, (err) => {
                console.log(err)
                // Sentry.captureException(new Error('Could not get Test API Data'))
            })
        }
    }
}
</script>
