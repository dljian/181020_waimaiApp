<template>
    <div class='order_view'>
        <!-- 头部 -->
        <headerTop title='订单列表'/>
        <div class='login_view'>
            <div class='img_view'>
                <img src="../../../static/images/order/person.png" alt="">
            </div>
            <div class='login'>
                <p>登陆后查看外卖订单</p>
                <span @click='skipLogin'>立即登录</span>
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
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.order_view
    width 100%
    padding-top 50px
    padding-bottom 50px
    box-sizing border-box
    .head
        font-size 20px
    .login_view
        width 100%
        display flex
        flex-direction column
        align-items center
        .img_view
            width 225px
            height 225px
            margin-top 100px
            img 
                width 100%
        .login
            display flex
            flex-direction column
            align-items center
            p
                padding: 10px 0;
                font-size: 17px;
                color: #6a6a6a;
            span 
                background: #02a774;
                font-size: 14px;
                color: #fff;
                border-radius: 5px;
                padding: 10px 20px;
</style>