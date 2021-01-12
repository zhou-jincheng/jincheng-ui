<template>
  <div class="jc-form-item">
    <label :style="{width: JcForm.labelWidth}" class="jc-form-item_label">{{label}}</label>
    <div class="jc-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JcFormItem',
  inject: {
    JcForm: {
      default: null
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.jc-form-item{
  margin-bottom: 25px;
  .jc-form-item_label{
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .jc-form-item_content{
    display: inline-block;
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidde;
  }
}
</style>
