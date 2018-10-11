<template>
    <div class="error-page-wrapper">
        <div class="error-page-inner">
            <h1>404</h1>
            <h3>Whoops! Something went wrong...</h3>
            <p>We could not find what you were looking for.</p>
            <router-link tag="a" :to="{name: $route.name}">
                <button class="btn btn-xs btn-primary">
                    Refresh this page
                </button>
            </router-link>
            |
            <router-link tag="a" :to="{name:'Index'}">
                <button class="btn btn-xs btn-primary">
                    Go to "home"
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
