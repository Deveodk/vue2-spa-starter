<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>
<script>
    export default {
        name: 'Index',
        data () {
            return {
                msg: 'Something awesome is coming.'
            }
        }
    }
</script>
<style>
    html, body{
        margin: 0;
        background: #03A9F4;
    }
    .hello{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
    }
    h1, h2 {
        font-weight: 100;
        font-size: 50px;
    }
</style>
