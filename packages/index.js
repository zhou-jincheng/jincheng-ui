
import JcButton from './JcButton'
import JcDialog from './JcDialog'
import JcInput from './JcInput'
import JcCheckbox from './JcCheckbox'
import JcRadio from './JcRadio'
import JcRadioGroup from './JcRadioGroup'
import JcSwitch from './JcSwitch'
import JcCheckboxGroup from './JcCheckboxGroup'
import JcForm from './JcForm'
import JcFormItem from './JcFormItem'
import './fonts/iconfont.css'

const components = [
  JcButton,
  JcDialog,
  JcInput,
  JcCheckbox,
  JcRadio,
  JcRadioGroup,
  JcSwitch,
  JcCheckboxGroup,
  JcForm,
  JcFormItem
]

function install (Vue) {
  components.forEach(component => Vue.component(component.name, component))
}

// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
