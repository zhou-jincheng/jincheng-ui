<template>
  <div class="jc-input">
    <input
    :type="type === 'password' ? (passwordVisible ? 'text' : type) : type"
    class="jc-input_inner"
    :class="{'is-disabled': disabled}"
    :placeholder="placeholder"
    :value="value"
    :disabled="disabled"
    :name="name"
    @input="handelInput"
    @blur="handleBlur"
    @change="handleChange"
    @focus="handleFocus"
    >
    <span class="jc-input_suffix" v-if="clearable || showPassword">
      <i
      class="iconfont iconCloseCircle"
      v-show="clearable && value" @click="clear"></i>
      <i
      class="iconfont iconEyeInvisible"
      :class="{'jc-password-visible': passwordVisible,'iconEye': passwordVisible}"
      v-show="isShowPassword" @click="handlePasswordVisible"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'JcInput',
  data () {
    return {
      passwordVisible: false
    }
  },
  computed: {
    isShowPassword () {
      return this.type === 'password' && this.showPassword && this.value
    }
  },
  props: {
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    handelInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      this.$emit('input', '')
    },
    handleBlur () {
      this.$emit('blur')
    },
    handleChange () {
      this.$emit('change')
    },
    handleFocus () {
      this.$emit('focus')
    },
    handlePasswordVisible () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.jc-input{
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .jc-input_inner{
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,045,.355,1);
    width: 100%;

    &:focus{
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled{
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor:not-allowed;
    }
  }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.jc-input{
  .jc-input_inner{
    padding-right: 30px;
  }
  .jc-input_suffix{
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i{
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
    .jc-password-visible {
      color: blue;
    }
  }
}
</style>
