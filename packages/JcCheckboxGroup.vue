<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'JcCheckboxGroup',
  provide () {
    return {
      JcCheckboxVueGroup: this
    }
  },
  porps: {
    value: {
      type: Array,
      default: []
    }
  }
}
</script>
<style lang="less" scoped>

</style>
