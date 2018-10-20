<template>
    <div id='foot'>
          <div @click="goto('/msite')" :class="{on:isCurrent('/msite')}">
              <span>
                  <i class='iconfont icon-shouye'></i>
              </span>
              <span>首页</span>
          </div> 
          <div @click="goto('/search')" :class="{on:isCurrent('/search')}">
              <span>
                  <i class='iconfont icon-sousuo'></i>
              </span>
              <span>搜索</span> 
          </div> 
          <div @click="goto('/order')" :class="{on:isCurrent('/order')}">
              <span>
                  <i class='iconfont icon-dingdan'></i>
              </span>
              <span>订单</span> 
          </div> 
          <div @click="goto('/profile')" :class="{on:isCurrent('/profile')}">
              <span>
                  <i class='iconfont icon-wode'></i>
              </span>
              <span>我的</span> 
          </div> 
    </div>
</template>

<script>
    export default {
        methods:{
            goto(path){
                this.$router.replace(path)
            },
            isCurrent(path) {
                return this.$route.path === path
            }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl'
#foot
    width 100%
    height 50px
    display flex
    flex-direction row
    justify-content space-between
    top-border-1px(#ccc)
    background #fff
    position fixed
    left 0
    bottom 0 
    >div
        flex 1
        display flex
        flex-direction column
        justify-content center
        text-align center
        &.on
            color #397
        >span 
            display block
            font-size 12px
            margin-top 2px
            >i
                font-size 25px

</style>