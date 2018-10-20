<template>
    <div class='msite_view'>
        <!-- 头部 -->
        <headerTop title='天河区棠下街道办'>
            <div class='headLeft' @click='skipSearch' slot='head_left'><i class='iconfont icon-sousuo'></i></div>
            <div class='headRight' @click='skipLogin' slot='head_right'><span>登录/注册</span></div>
        </headerTop>
        <!-- 功能分类 -->
        <mt-swipe :auto="0" style='height:200px'>
            <mt-swipe-item v-for='(item,index) in swipeData' :key='index'>
                <div class='swipeDiv'>
                    <div v-for='(item,index) in item' :key='index'>
                        <span class='image'><img :src='item.imgUrl' alt=""></span>
                        <span class='title'>{{item.title}}</span>
                    </div>
                </div>
            </mt-swipe-item>
        </mt-swipe>

        <!-- 附近商家 -->
        <div>
            <div class='merchantHead'>
                <i class='iconfont icon-caidan'></i>
                <span>附件商家</span>
            </div>
            <shopList></shopList>
        </div>
    </div>
</template>

<script>

    import Data from '../../mock/swipeData.json'
    import headerTop from '../../components/headTop/headTop.vue'
    import shopList from '../../components/shopList/shopList.vue'

    export default {
        components:{
            headerTop,
            shopList
        },
        data() {
            return {
                swipeData:[]
            }
        },
        created(){
            this.getSwipeData()
        },
        methods:{
            //跳转到搜索页面
            skipSearch(){
                this.$router.push('/search')
            },
            //跳转到登录界面
            skipLogin(){
                this.$router.push('/login')
            },
            //获取分类数据
            getSwipeData(){
                var arr1=[];
                var arr2=[];
                for (var i=0;i<Data.swipeData.length;i++) {
                    if (i<8) {
                        arr1.push(Data.swipeData[i])
                    }else {
                        if (i>=8 && i<16) {
                            arr2.push(Data.swipeData[i])
                        }
                    }
                } 
                this.swipeData.push(arr1)
                this.swipeData.push(arr2)
            },
        }
        
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
    @import "../../common/stylus/mixins.styl"
    .msite_view
        padding-top 50px
        padding-bottom 50px
        box-sizing border-box
    .swipeDiv
        width 100%
        height 100%
        background #ffffff
        display flex
        flex-direction row
        flex-wrap wrap
        >div 
            width 25%
            height 50%
            display flex
            flex-direction column
            justify-content center
            align-items center
            overflow hidden
            background #fff
            .image 
                width 50px
                height 50px
                >img 
                    width 100%
            .title
                margin-top 5px
                font-size 14px
    .gap
        width 100%
        height 10px
        background rgba(0,0,0,0.1)

    .merchantHead 
        width 100%
        height 30px
        display flex
        align-items center
        padding-left 5px
        margin-top 10px
        box-sizing border-box
        color #999
        background #fff
        >i
            font-size 20px
        >span 
            font-size 14px
</style>