<template>
  <div class='login_view'>
    <!-- 返回按钮 -->
    <div class='login_head'><i class='iconfont icon-fanhui' @click='handleBack'></i></div>
    <!-- 登录界面 -->
    <div class='login_body'>
      <h1>硅谷外卖</h1>
      <!-- 登录方式选择 -->
      <div class='login_way'>
        <router-link to='/messageLogin' replace>短信登录</router-link>
        <router-link to='/passwordLogin' replace>密码登录</router-link>
      </div>
      <!-- 登录页面 -->
      <div class='login_page'>
        <router-view/>
      </div>

    </div>
  </div>
</template>

<script>

  

  export default {
    methods:{
      handleBack(){
        console.log(123)
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.login_view
  width 100%
  height 100%
  background #fff
  .login_head
    width 100%
    height 35px
    background #fff
    i 
      line-height 35px
      margin-left 8px

  .login_body
    width 300px
    padding-top 50px
    margin 0 auto
    box-sizing border-box
    h1  
      text-align center
      color #02a774
      font-size 40px
      font-weight bold
      margin-bottom 40px
    .login_way
      width 100%
      display flex
      flex-direction row
      justify-content center
      >.active
        color #397
        font-weight 700
        border-bottom: 2px solid #02a774
        padding-bottom 5px
        box-sizing border-box
      a 
        margin 0 25px
        color: #333;
        font-size: 14px
    .login_page
      width 100%

            
</style>