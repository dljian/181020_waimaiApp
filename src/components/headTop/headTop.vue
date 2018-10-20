<template>
    <div class='head'>
        <slot name='head_left'></slot>
        <div class='headCenter'><span>{{title}}</span></div>
        <slot name='head_right'></slot>
    </div>
</template>

<script>
  export default {
    props:{
      title:String
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .head 
        width 100%
        height 50px
        background #339977
        display flex
        flex-direction row
        color #fff
        position fixed
        left 0
        top 0
        z-index 9999
        .headLeft 
            flex 1
            display flex
            align-items center
            i
                font-size 26px
                margin-left 10px
        .headCenter 
            flex 3
            display flex
            align-items center
            justify-content center
        .headRight
            flex 1
            display flex
            align-items center
            justify-content flex-end
            span
                margin-right 5px
                font-size 14px
</style>