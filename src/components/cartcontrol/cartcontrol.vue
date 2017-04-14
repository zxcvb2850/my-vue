<template>
  <div class="cartcontrol">
    <transition name="fadeRotate">
      <div class="cart-decrease" @click.stop.prevent="decreaseCart" v-show="food.count>0">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';

  export default{
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart(event){
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        this.$root.eventHub.$emit('cart.add', event.target);
      },
      decreaseCart(event){
        if (!event._constructed) {
          return;
        }
        if (!this.food.count) {
          return;
        } else {
          this.food.count--;
        }
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    .cart-decrease
      display: inline-block
      padding: 6px
      transition: all .4s linear
      .inner
        line-height: 24px
        font-size: 24px
        color: rgb(0, 160, 220)
        transition: all 0.4s linear
      &.fadeRotate-enter-active, &.fadeRotate-leave-active
        transform: translate3d(0, 0, 0)
        .inner
          display: inline-block
          transform: rotate(0)
      &.fadeRotate-enter, &.fadeRotate-leave-active
        opacity: 0
        transform: translate3d(24px, 0, 0)
        .inner
          transform: rotate(180deg)
    .cart-count
      display: inline-block
      vertical-align: top
      font-size: 10px
      color: rgb(147, 153, 159)
      line-height: 24px
      text-align: center
      padding: 6px 0
    .cart-add
      display: inline-block
      vertical-align: top
      font-size: 24px
      color: rgb(0, 160, 220)
      line-height: 24px
      padding: 6px
</style>
