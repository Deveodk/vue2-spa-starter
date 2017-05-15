<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <p>Made with <i class="fa fa-heart"></i> by <a target="_blank" rel="noopener" href="https://deveo.dk">Deveo</a></p>
    </div>
</template>
<script>
    export default {
        name: 'Index',
        data () {
            return {
                msg: 'Something awesome is coming'
            }
        }
    }
</script>
<style scoped>
    .hello{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #fff;
    }
    h1{
        font-weight: 100;
        font-size: 50px;
        text-align: center;
    }
    p{
        font-weight: 100;
        text-align: center;
        letter-spacing: 1px;
    }
    a{
        text-decoration: none;
        color: inherit;
        border-bottom: 1px dotted #fff;
    }
    a:hover, a:focus{
        text-decoration: none;
        color: inherit;
        border-bottom: 1px solid #fff;
        outline: none;
    }
</style>
