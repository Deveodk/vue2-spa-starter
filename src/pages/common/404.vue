<template>
    <div class="notfound">
        <div class="inner">
            <div class="title">
                404
            </div>
            <div class="subtitle">
                Whoops! Something went wrong ...
            </div>
            <div class="description">
                We could not find what you were looking for.
            </div>
            <div class="actions">
                <a href="/" class="button">
                    Go to homepage
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../styles/vars.scss";

    .notfound {
        background: $color--dark;
        background: linear-gradient(45deg, $color--dark, lighten($color--dark, 10%));
        min-height: 100vh;
        color: $color--white;
        font-family: $fontfamily--main;
        text-align: center;
        padding: $padding--main;
        padding-top: 100px;

        .title {
            font-size: $fontsize--xxl;
            font-weight: $fontweight--bold;
            margin-bottom: $margin--main;
        }

        .subtitle {
            font-size: $fontsize--large;
            font-weight: $fontweight--light;
            margin-bottom: $margin--main;
        }

        .description {
            font-size: $fontsize--main;
            font-weight: $fontweight--light;
            max-width: 500px;
            margin: 0 auto;
            margin-bottom: $margin--main;
            line-height: 1.4;
        }

        .actions {
            
            a {
                color: inherit;
                text-decoration: none;
                background: $color--white;
                padding: $padding--small;
                color: $color--dark;
                box-sizing: border-box;
                border-radius: $borderradius--large;
                font-weight: $fontweight--main;
                transition: $transition--main;
                display: inline-block;

                &:hover {
                    transform: translateY(-4px);
                }
            }
        }
    }

</style>
