<template>
  <div class='merchantBody'>
    <div class='merchant_item' v-for='(item,index) in shopData' :key='index'>
        <!-- 左边头像 -->
        <div class='merchant_item_left'>
            <img :src="item.imgUrl" alt="">
        </div>
        <!-- 右边内容 -->
        <div class='merchant_item_right'>
            <!-- 上面内容 -->
            <div class='merchant_item_right_top'>
                <span class='brand_text'>{{item.brand}}</span>
                <span class='shop_title'>{{item.title}}</span>
                <span class='shop_pledge'>
                    <span>{{item.pledge1}}</span><span>{{item.pledge2}}</span><span>{{item.pledge3}}</span>
                </span>
            </div>
            <!-- 中间内容 -->
            <div class='merchant_item_right_center'>
                <div class='star' v-for='items in item.star'>
                    <img :src="items" alt="">
                </div>
                <span class='span1'>{{item.zan}}</span>
                <span class='span2'>{{item.market}}</span>
                <span class='span3'>{{item.courier}}</span>
            </div>
            <!-- 下面的内容 -->
            <div class='merchant_item_right_bottom'>
                <span>￥{{item.upToSend}}起送/配送费约￥{{item.theShippingFee}}</span>
            </div>
        </div>
    </div>
</div>
</template>

<script>

  import Data from '../../mock/swipeData.json'

  export default {
    data() {
        return {
            shopData:[]
        }
    },
    created(){
        this.getShopData()
    },
    methods:{
      //获取商品信息
      getShopData(){
          this.shopData=Data.shopData
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .merchantBody 
    width 100%
    padding-top 10px
    background #fff
    .merchant_item
        width 100%
        height 100px
        background #fff
        padding-left 5px
        padding-right 5px
        margin-top 5px
        box-sizing border-box
        display flex
        flex-direction row
        .merchant_item_left
            flex 1
            overflow hidden
            img 
                width 100%
        .merchant_item_right
            flex 3
            display flex
            flex-direction column
            padding-left 5px
            box-sizing border-box
            >div
                flex 1
                display flex
                flex-direction row
                align-items center
            .merchant_item_right_top
                position relative
                .brand_text
                    background #FFD930
                    border-radius 2px
                    padding-left 2px
                    padding-right 2px
                    font-size 11px
                .shop_title
                    font-size 16px
                    color #333
                    margin-left 3px
                .shop_pledge
                    position absolute 
                    top 50%
                    right 0
                    transform translateY(-50%)
                    >span 
                        border 1px solid #f1f1f1
                        padding 0
                        border-radius 4px
                        font-size 10px
                        line-height 0
                        margin 0
                        color #999
            .merchant_item_right_center
                font-size 10px
                position relative
                .star
                    display inline-block 
                    width 12px
                    height 12px
                    img 
                        width 100%
                .span1
                    color #FFD930
                .span2
                    margin-left 5px
                    color #999
                .span3
                    border-radius 3px
                    border 1px solid #339977
                    color #397
                    position absolute 
                    top 50%
                    right 0
                    transform translateY(-50%)
            .merchant_item_right_bottom
                color #666666
                font-size 10px

</style>