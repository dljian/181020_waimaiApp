<template>
  <div>
      <div class='password_login'>
        <div><input type="text" maxlength="20" placeholder="手机/邮箱/用户名"></div>
        <div class='account_number'> 
          <input type="text" placeholder="密码">
          <button>获取验证码</button>
        </div>
        <div class='verification_code'>
          <input type="text" placeholder="验证码">
          <img src="../../../static/images/login/captcha.svg" alt="">
        </div>
        <span class='login_button'>登录</span>
        <p>关于我们</p>
      </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.password_login
  width 100%
  >div
    width 100%
    height 40px
    margin-top 15px
    box-sizing border-box
    input 
      width 100%
      height 100%
      border 1px solid #cccccc
      border-radius 4px
      outline-color #02a774
      padding-left 10px
      box-sizing border-box
  .account_number
    width 100%
    position relative
    button 
      width 90px
      height 30px
      color #ccc
      font-size 14px
      border none 
      background #ffffff
      position absolute
      top 50%
      right 5px
      transform translateY(-50%)
  .verification_code
    position relative
    img 
      width 150px
      height 100%
      position absolute
      right 0
      top 0
  >p
    margin-top: 12px;
    color: #999;
    font-size: 14px;
    line-height: 20px
    text-align center
  .login_button
    display block
    width 100%
    height 40px
    background #02a774
    color #ffffff
    font-size 18px
    text-align center
    line-height 40px
    border-radius 5px
    margin-top 30px
  
</style>