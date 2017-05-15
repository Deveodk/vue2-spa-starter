<template>
    <div class="content" v-if="isOnline">
        <div class="container">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
    <offline v-else></offline>
</template>
<script>
    export default {
        name: '',
        data () {
            return {
                isOnline: true
            }
        },
        created () {
            this.updateStatus()
        },
        components: {
            'offline': require('@/components/elements/offline')
        },
        methods: {
            updateStatus: function () {
                if (typeof window.navigator.onLine === 'undefined') {
                    this.isOnline = true
                } else {
                    this.isOnline = window.navigator.onLine
                }
                window.addEventListener('online', this.updateStatus)
                window.addEventListener('offline', this.updateStatus)
            }
        }
    }
</script>
