<template>
  <div>
      <div class='message_login'>
        <div class='phone_number'>
          <input type="tel" maxlength="11" placeholder="手机号">
          <button>获取验证码</button>
        </div>
        <div><input type="text" placeholder="验证码"></div>
        <p>温馨提示：未注册硅谷外卖账号的手机号，登录时将自动注册，且代表已同意<span>《用户服务协议》</span></p>
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
.message_login
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
  .phone_number
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
  >p
    margin-top: 12px;
    color: #999;
    font-size: 14px;
    line-height: 20px
    text-align center
    span 
      color #02a774
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