<template>
    <div class='search_view'>
        <!-- 头部 -->
        <headerTop title='搜索'/>
        <div class='search_body'>
            <input type="text" placeholder="请输入商家或美食名称">
            <span>提交</span>
        </div>
    </div>
</template>

<script>

    import headerTop from '../../components/headTop/headTop.vue'

    export default {
        components:{
            headerTop
        },
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.search_view
    width 100%
    padding-top 50px
    padding-bottom 50px
    box-sizing border-box
    .head
        font-size 20px
    .search_body
        width 100%
        height 50px
        background #fff
        display flex
        flex-direction row
        align-items center
        padding-left 10px
        padding-right 10px
        box-sizing border-box
        input 
            width 79%
            height 35px
            background #f2f2f2
            border: 1px solid #f2f2f2;
            border-radius 5px
            padding-left 10px
            box-sizing border-box
        span 
            width 20%
            height 35px
            background #397
            border-radius 5px
            color #ffffff
            text-align center
            line-height 35px
            margin-left 10px
</style>