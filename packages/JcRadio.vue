<template>
  <label class="jc-radio" :class="{'is-checked': isChecked}">
    <span class="jc-radio_input">
      <span class="jc-radio_inner"></span>
      <input
      type="radio"
      class="jc-radio_original"
      :name="name"
      :value="label"
      v-model="model"
      >
    </span>
    <span class="jc-radio_label">
      <slot>
        {{label}}
      </slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'JcRadio',
  inject: {
    JcRadioGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.JcRadioGroup.value : this.value
      },
      set (newValue) {
        this.isGroup ? this.JcRadioGroup.$emit('input', newValue) : this.$emit('input', newValue)
      }
    },
    isGroup () {
      return !!this.JcRadioGroup
    },
    isChecked () {
      return this.isGroup ? this.label === this.JcRadioGroup.value : this.label === this.value
    }
  }
}
</script>

<style lang="scss" scoped>
.jc-radio{
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  .jc-radio_input{
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .jc-radio_inner{
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after{
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        transition: transform .15s ease-in;
      }
    }
    .jc-radio_original{
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .jc-radio_label{
    font-size: 14px;
    padding-left: 10px;;
  }
}
// 选中的样式
.jc-radio.is-checked{
  .jc-radio_input{
    .jc-radio_inner{
      border-color: #409eff;
      background-color: #409eff;
      &:after{
        transform: translate(-50%,-50%) scale(1);
      }
    }
  }
  .jc-radio_label{
    color:#409eff;
  }
}
</style>
