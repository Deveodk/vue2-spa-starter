<template>
    <div class="offline-wrapper">
        <div class="offline-inner">
            <div class="icon"><i class="fa fa-exclamation-circle"></i></div>
            <h1>Whoops!</h1>
            <h3>You've lost the connection to the internet.</h3>
            <p class="description">We could not register a live connection to the internet. Since this application uses network functions, please make sure you have a valid network connection and try again.</p>
            <p>
                <a href="/">
                    <button class="btn btn-primary">Refresh this page</button>
                </a>
            </p>
        </div>
    </div>
</template>
<style scoped>
    .offline-wrapper{
        width: 100%;
        height: 100vh;
        position: relative;
    }
    .offline-inner{
        position: absolute;
        top: 50%;
        left: 50%;
        margin: auto;
        transform: translate(-50%, -50%);
        width: 100%;
        max-width: 600px;
        background: rgba(255,255,255,0.95);
        border-radius: 4px;
        padding: 0px 30px 30px 30px;
        text-align: center;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 4px 10px 0 rgba(0, 0, 0, 0.08);
    }
    p.description{
        margin: 10px 0px;
        font-weight: 300;
    }
    h1{
        font-weight: bold;
        margin-bottom: 0;
        margin-top: 0;
    }
    h3{
        font-weight: 400;
        margin-top: 0px;
    }
    .icon{
        color: #333;
        font-size: 100px;
        margin: 0;
    }
</style>
