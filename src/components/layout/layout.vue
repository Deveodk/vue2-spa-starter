<template>
    <div class="layout" v-if="$auth.ready() && isOnline">
        <loader v-show="!$store.state.loaded" />
        <top-menu v-if="$auth.check() && $route.name !== '404'" />
        <div class="content">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
        <foo v-if="$auth.check() && $route.name !== '404'" />
    </div>
    <loader v-else-if="!$auth.ready()" />
    <offline v-else-if="!isOnline" />
</template>

<style lang="scss">
@import "../../styles/vars.scss";

    html {
        background: $color--dark;
    }

    .layout {
        color: #fff;
        font-family: $fontfamily--secondary;
        color: $color--dark;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: $fontfamily--main;
        font-weight: $fontweight--bold;
    }

    .section {
        padding: $padding--ultra 0;

        &.light {
            background: $bg--light;
        }

        &.white {
            background: $color--white;
        }

        &.dark {
            background: $color--dark;
        }
    }

    .cbb {
        border-bottom: 1px solid $color--light;
    }

    .cbt {
        border-top: 1px solid $color--light;
    }

    .row {
        margin-bottom: -$margin--main;

        > div {
            margin-bottom: $margin--main;
        }
    }

</style>

<script>
    export default {
        name: '',
        data () {
            return {
                isOnline: true
            }
        },
        mounted () {
            this.updateStatus()
            this.$store.state.loaded = false
            setTimeout(() => {
                this.$store.state.loaded = true
            }, 2000)
        },
        components: {
            'offline': require('@/components/core/offline'),
            'top-menu': require('@/components/layout/menu'),
            'foo': require('@/components/layout/footer'),
            'loader': require('@/components/layout/loader'),
            'login': require('@/components/core/login')
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
            },
            initialize () {
                // this.$store.state.loaded = false
                console.log('hejsa')
                this.$store.state.loaded = false
                setTimeout(() => {
                    this.$store.state.loaded = true
                }, 2000)
            }
        }
    }
</script>
