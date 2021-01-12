<template>
  <div class="jc-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'JcRadioGroup',
  props: {
    value: null
  },
  provide () {
    return {
      JcRadioGroup: this
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
