<template>
    <div class="menu" :class="{'scrolled': userHasScrolled}">
        <div class="progress" :style="'width:' + progressWidth + '%;'" />
        <div class="wrapper container">
            <router-link tag="div" :to="{name: 'Index'}" class="logo">
                Logo
            </router-link>
            <div class="menu-items">
                <router-link tag="div" class="menu-item" v-for="route in routes" :to="{name: route.name}" v-bind:key="route.title">
                    {{ route.title }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../styles/vars.scss";

    .menu {
        background: $color--main;
        color: $color--white;
        font-family: $fontfamily--main;

        .progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 2px;
            background: $color--main;
            content: "";
        }

        .wrapper {
            display: flex;
            justify-content: space-between;
            padding: $padding--large 0;
            transition: $transition--main;

            .logo {
                cursor: pointer;
            }

            .menu-items {
                display: flex;

                .menu-item {
                    cursor: pointer;
                    position: relative;

                    &:before {
                        position: absolute;
                        bottom: -10px;
                        left: 0;
                        content: "";
                        height: 2px;
                        background: $color--white;
                        width: 0;
                        transition: $transition--main;
                    }

                    &:hover {

                        &:before {
                            width: 100%;
                        }
                    }

                    &.router-link-exact-active {
                        
                        &:before {
                            width: 100%;
                        }
                    }

                    &:not(:first-of-type) {
                        margin-left: $margin--main;
                    }
                }
            }
        }
    }

</style>

<script>
export default {
    data () {
        return {
            userHasScrolled: false,
            progressWidth: 0,
            routes: [
                {
                    title: 'Home',
                    name: 'Index'
                },
                {
                    title: 'About',
                    name: 'About'
                },
                {
                    title: 'Contact',
                    name: 'Contact'
                }
            ]
        }
    },
    created () {
        window.addEventListener('scroll', this.checkScroll)
    },
    destroyed () {
        window.removeEventListener('scroll', this.checkScroll)
    },
    methods: {
        checkScroll () {
            let scrollHeight = document.body.scrollHeight - window.innerHeight
            let offset = window.pageYOffset
            this.progressWidth = (offset / scrollHeight) * 100
            if (window.pageYOffset > 50) {
                this.userHasScrolled = true
            } else {
                this.userHasScrolled = false
            }
        }
    }
}
</script>
