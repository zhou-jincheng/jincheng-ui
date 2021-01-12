<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'JcForm',
  provide () {
    return {
      JcForm: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  }
}
</script>
<style lang="less" scoped>

</style>
