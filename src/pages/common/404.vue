<template>
    <div class="error-page-wrapper">
        <div class="error-page-inner">
            <h1>404</h1>
            <h3>Ups! Der er sket en fejl ...</h3>
            <p>Vi ved ikke helt hvad der er sket, men vi kan desværre ikke vise denne side. Dette kan være fordi du har forsøgt at tilgå et dødt link eller fordi du ikke har adgang til denne side.</p>
            <router-link tag="a" :to="{name: $route.name}">
                <button class="btn btn-xs btn-primary">
                    Genindlæs siden
                </button>
            </router-link>
            |
            <router-link tag="a" :to="{name:'Index'}">
                <button class="btn btn-xs btn-primary">
                    Gå til forsiden
                </button>
            </router-link>
        </div>
    </div>
</template>
<style scoped>
.error-page-wrapper{
    width: 100%;
    height: calc(100vh - 98px);
    position: relative;
}

.error-page-inner{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255,255,255,0.95);
    border-radius: 4px;
    padding: 20px 30px 30px 30px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02), 0 4px 10px 0 rgba(0, 0, 0, 0.08);
}

.error-page-inner h1{
    margin-top: 0;
    margin-bottom: 0;
    font-weight: bold;
}

.error-page-inner h3{
    margin-top: 0;
    margin-bottom: 10px;
}
</style>
