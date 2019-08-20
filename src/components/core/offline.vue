<template>
    <div class="offline">
        <div class="inner">
            <div class="title">
                Whoops!
            </div>
            <div class="subtitle">
                You've lost the connection to the internet.
            </div>
            <div class="description">
                We could not register a live connection to the internet. Since this application uses network functions, please make sure you have a valid network connection and try again.
            </div>
            <!--<div class="actions">
                Buttons
            </div>-->
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../styles/vars.scss";

    .offline {
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
            margin-bottom: $margin--main;
            max-width: 500px;
            margin: 0 auto;
            line-height: 1.4;
        }

        .actions {
            
        }
    }

</style>
