<template>
    <div id='app'>
        <router-view/>
        <footTemp v-show="$route.meta.showFoot"/>
    </div>
</template>

<script>

    import footTemp from './components/foot/foot.vue'

    export default {
        components:{
            footTemp
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    #app
        width 100%
        height 100%
        background #f5f5f5
</style>