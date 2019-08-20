<template>
    <div class="placeholder-boxes">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="box">
                        {{ title }} Content box
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="box">
                        {{ title }} Content box
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="box">
                        {{ title }} Content box
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../styles/vars.scss";

    .placeholder-boxes {

        .box {
            background: $color--white;
            box-shadow: $boxshadow--creative;
            border-radius: $borderradius--large;
            padding: $padding--main;
            min-height: 300px;
        }
    }

</style>

<script>
export default {
    props: ['title']
}
</script>
