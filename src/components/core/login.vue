<template>
    <div class="login">
        <div class="inner">
            <div class="title">
                Login
            </div>
            <div class="box">
                <div class="field-wrapper username">
                    <label>
                        Username
                    </label>
                    <input
                        type="text"
                        placeholder="Please type in your username ..."
                        v-model="loginData.email"
                    />
                </div>
                <div class="field-wrapper password">
                    <label>
                        Password
                    </label>
                    <input
                        type="password"
                        placeholder="Please type in your password ..."
                        v-model="loginData.password" @keydown.enter="login()"
                    />
                </div>
                <div class="remember-me">
                    <label class="checkcontainer">
                        Remember me
                        <input type="checkbox" v-model="loginData.rememberMe">
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div class="submit" @click="login()">
                    Log in
                </div>
                <div class="forgot-password">
                    <a href="javascript:void(0)">
                        Forgot password?
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../styles/vars.scss";

    /* Customize the label (the container) */
    .checkcontainer {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        line-height: 20px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default checkbox */
    .checkcontainer input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 20px;
        width: 20px;
        background-color: rgba($color--dark, 0.1);
        border-radius: $borderradius--main;
    }

    /* On mouse-over, add a grey background color */
    .checkcontainer:hover input ~ .checkmark {
        background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .checkcontainer input:checked ~ .checkmark {
        background-color: $color--dark;
        border-radius: $borderradius--main;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .checkcontainer input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .checkcontainer .checkmark:after {
        left: 7px;
        top: 4px;
        width: 6px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .login {
        background: $color--dark;
        background: linear-gradient(45deg, $color--dark, lighten($color--dark, 10%));
        min-height: 100vh;
        color: $color--white;
        font-family: $fontfamily--main;
        padding: $padding--main;
        padding-top: 100px;

        .inner {
            width: 400px;
            margin: 0 auto;

            .title {
                font-size: $fontsize--xxl;
                margin-bottom: $margin--main;
                font-weight: $fontweight--bold;
                text-align: center;
            }

            .box {
                background: $color--white;
                color: $color--dark;
                padding: $padding--main;
                border-radius: $borderradius--main;
                box-shadow: $boxshadow--creative;

                .field-wrapper {
                    margin-bottom: $margin--small;
                    
                    label {
                        display: block;
                        margin-bottom: $margin--small / 2;
                    }

                    /* Change Autocomplete styles in Chrome*/
                    input:-webkit-autofill,
                    input:-webkit-autofill:hover, 
                    input:-webkit-autofill:focus,
                    textarea:-webkit-autofill,
                    textarea:-webkit-autofill:hover,
                    textarea:-webkit-autofill:focus,
                    select:-webkit-autofill,
                    select:-webkit-autofill:hover,
                    select:-webkit-autofill:focus {
                    -webkit-box-shadow: 0 0 0px 1000px rgba($color--dark, 0.1) inset;
                    transition: background-color 5000s ease-in-out 0s;
                    border-color: transparent;
                    }

                    input {
                        width: 100%;
                        font-size: $fontsize--main;
                        padding: $padding--small / 2;
                        border-radius: $borderradius--main;
                        border: 1px solid $color--light;
                        outline: none;
                        color: $color--dark;
                        box-shadow: 0 0 0px 1000px rgba($color--dark, 0.15) inset;

                        &::placeholder {
                            color: $color--light;
                        }

                        &:active,
                        &:focus {
                            border-color: $color--dark;
                        }
                    }
                }

                .remember-me {

                }

                .submit {
                    background: $color--dark;
                    padding: $padding--small;
                    margin-top: $margin--main;
                    border-radius: $borderradius--main;
                    text-align: center;
                    font-weight: $fontweight--main;
                    color: $color--white;
                    text-shadow: $textshadow--dark;
                    cursor: pointer;
                    user-select: none;
                    
                    &:hover {
                        background: darken($color--dark, 5%);
                    }
                }

                .forgot-password {
                    margin-top: $margin--small;
                    text-align: center;

                    a {
                        color: $color--dark;
                        text-decoration: none;
                        cursor: pointer;

                        &:hover {
                            color: darken($color--dark, 5%);
                            text-decoration: underline;
                        }
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
            loginData: {
                email: '',
                password: '',
                rememberMe: false
            }
        }
    },
    methods: {
        login () {
            console.log('login now')
            console.log('check if we can log into API with the following data:')
            console.log(this.loginData)
            this.$auth.login({
                url: process.env.API_URL + '/auth/login',
                data: this.loginData,
                rememberMe: this.rememberMe,
                fetchUser: true,
                redirect: {name: 'Index'},
                success: (response) => {
                    this.$emit('loggedIn')
                },
                error: () => {
                    alert('Could not login. Please check your username and password and try again. If the problem persists, please try to request a new password via the "Forgot password?" link.')
                }
            })
        }
    }
}
</script>
