<template>
    <div class='profile_view'>
        <!-- 头部 -->
       <headerTop title='我的'/>
       <!-- 登录注册 -->
       <div class='login_state'>
           <div class='login_state_left'>
               <div>
                   <img src="../../../static/images/my/timg.jpg" alt="">
               </div>
           </div>
           <div class='login_state_center' @click='skipLogin'>
               <h2>登录/注册</h2>
               <p><i class='iconfont icon-shouji'></i>暂无绑定手机号</p>
           </div>
           <div class='login_state_right'>
               <span>></span>
           </div>
       </div>
       <!-- 余额 -->
       <div class='my_info'>
           <div>
               <p><span class='span1'>0.00</span>元</p>
               <p>我的余额</p>
           </div>
           <div class='conter_div'>
               <p><span class='span2'>0</span>个</p>
               <p>我的优惠</p>
           </div>
           <div>
               <p><span class='span3'>0</span>分</p>
               <p>我的积分</p>
           </div>
       </div>
       <!-- 功能列表 -->
       <div class='Feature_list'>
           <div class='Feature_list_item'>
               <div class='icon'><i class='iconfont icon-dingdan icon1'></i></div>
               <div class='title bottom_b'><span>我的订单</span><span class='into'>></span></div>
           </div>
           <div class='Feature_list_item'>
               <div class='icon'><i class='iconfont icon-jifen icon2'></i></div>
               <div class='title bottom_b'><span>积分商城</span><span class='into'>></span></div>
           </div>
           <div class='Feature_list_item vip'>
               <div class='icon'><i class='iconfont icon-VIP icon3'></i></div>
               <div class='title'><span>外卖会员卡</span><span class='into'>></span></div>
           </div>
           <div class='Feature_list_item centre'>
               <div class='icon'><i class='iconfont icon-chengshi icon4'></i></div>
               <div class='title'><span>服务中心</span><span class='into'>></span></div>
           </div>
       </div>
    </div>
</template>

<script>

    import headerTop from '../../components/headTop/headTop.vue'

    export default {
        components:{
            headerTop
        },
        methods:{
            skipLogin(){
                this.$router.push('/login')
            },
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
.profile_view
    width 100%
    .head
        font-size 20px
        bottom-border-1px(#ccc)
        >div
            width 100%
            height 1px
            background #fff
        
    .login_state
        width 100%
        height 100px
        background #339977
        // margin-top 2px
        display flex
        flex-direction row
        .login_state_left
            flex 1
            display flex
            justify-content center
            align-items center
            .conter_div
                border-left 1px solid #ccc
            >div
                width 60px
                height 60px
                border-radius 50%
                overflow hidden
                >img 
                    width 100%
        .login_state_center
            flex 3
            color #fff
            display flex
            flex-direction column
            justify-content center
            h2
                font-size 18px
                font-weight 800
                margin-bottom 15px
            p
                font-size 14px
                i 
                    font-size 20px
        .login_state_right
            flex 1
            display flex
            flex-direction row-reverse
            align-items center
            span 
                color #ffffff
                font-size 20px
                margin-right 10px

    .my_info
        width 100%
        height 80px
        background #ffffff
        margin-bottom 10px
        bottom-border-1px(#ccc)
        display flex
        flex-direction row
        .conter_div
            left-border-1px(#ccc)
            right-border-1px(#ccc)
        >div
            flex 1
            display flex
            flex-direction column
            justify-content center
            p
                text-align center
                font-size: 14px
                color #666
                margin-top 10px
                >span 
                    font-size 30px
                    margin-right 3px
                    font-weight 700
                .span1
                    color #f90
                .span2
                    color #ff5f3e
                .span3
                    color #6ac20b

    .Feature_list
        width 100%
        .vip
            border none
        .centre
            margin-top 10px
        .Feature_list_item
            width 100%
            height 50px
            padding-left 10px
            background #fff
            box-sizing border-box
            display flex
            flex-direction row
            .icon
                width 10%
                height 100%
                i 
                    text-align center
                    line-height 50px
                    font-size 25px 
                .icon1
                    color #50C29F
                .icon2
                    color #FF5F3E
                .icon3
                    color #FFA012
                .icon4
                    color #18AE80
            .title
                width 90% 
                height 100%
                color #333
                padding-right 10px
                box-sizing border-box
                display flex
                flex-direction row
                justify-content space-between 
                align-items center
            .bottom_b
                bottom-border-1px(#ccc)
                .into
                    color #bbb
                    font-size 20px


</style>