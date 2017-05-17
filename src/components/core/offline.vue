<template>
    <div class="offline-wrapper">
        <div class="offline-inner">
            <div class="icon"><i class="fa fa-exclamation-circle"></i></div>
            <h1>Hov!</h1>
            <h3>Du har mistet din internetforbindelse</h3>
            <p class="description">Vi kunne ikke registrere en aktiv internetforbindelse i din browser. Applikationen kan derfor ikke indlæses. Prøv at tjekke din forbindelse og opdater siden igen.</p>
            <p>
                <a href="/">
                    <button class="btn btn-primary">Genindlæs siden</button>
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
