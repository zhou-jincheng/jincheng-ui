<template>
  <transition name="dialog">
    <div class="jc-dialog_wrapper" v-show="visible" @click.self="closeDialog">
      <div class="jc-dialog"  :style="{
        width: width, marginTop: top
      }">
        <div class="jc-dialog_header">
          <slot name="title">
            <span class="jc-dialog_title">
                {{title}}
            </span>
          </slot>
          <button class="jc-dialog_headerbtn" @click="closeDialog">
            <i class="iconfont iconCloseCircle"></i>
          </button>
        </div>
        <div class="jc-dialog_body">
          <slot></slot>
        </div>
        <div v-if="$slots.footer" class="jc-dialog_footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'JcDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  components: {
  },
  methods: {
    closeDialog () {
      this.$emit('update:visible', false)
    }
  }
}
</script>
<style lang="scss" scoped>
@keyframes toggleDialog {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.dialog-enter-active {
  animation: toggleDialog .2s;
}
.dialog-leave-active {
  animation: toggleDialog .2s reverse;
}
.jc-dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,0.5);
  .jc-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &_header{
      padding: 20px 20px 10px;
      .jc-dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .jc-dialog_headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .icon-closeCircle{
          color:909399
        }
      }
    }
    &_body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .jc-button:first-child{
        margin-right: 20px;
      }
    }
  }
}
</style>
