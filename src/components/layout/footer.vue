<template>
    <div class="footer">
        <div class="container">
            <div class="copyright">
                {{ year }} &copy; Deveo
            </div>
            <div class="logout">
                <div class="button" @click="logout()">
                    Log out
                    <i class="fad fa-sign-out fa-fw" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../styles/vars.scss";

    .footer {
        background: darken($color--main, 10%);
        color: $color--white;
        padding: $padding--xxl;
        
        .container {
            text-align: center;
            font-family: $fontfamily--main;

            .logout {
                margin-top: $margin--main;
                background: $color--white;
                color: darken($color--main, 10%);
                display: inline-block;
                padding: ($padding--small / 2) $padding--small;
                font-weight: $fontweight--main;
                border-radius: $borderradius--main;
                cursor: pointer;
                transition: $transition--main;

                &:hover {
                    transform: translateY(-4px);
                }
            }
        }
    }

</style>

<script>
export default {
    methods: {
        logout () {
            this.$auth.logout()
            this.$router.push({name: 'Login'})
        }
    },
    computed: {
        year () {
            let d = new Date()
            let year = d.getFullYear()
            return year
        }
    }
}
</script>
