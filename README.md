- 安装组件库

    npm i jincheng-ui --save

- 全局导入

    import JinchengUI from 'jincheng-ui'

    import 'jjincheng-ui/dist/jincheng-ui.css'
    
    Vue.use(JinchengUI)

- 使用组件

    <template>
      <div id="app">
        <jc-button type="success" @click="visible=true">显示登录框</jc-button>
        <jc-dialog title="用户登录" :visible.sync="visible" width="30%">
          <jc-form :model="model" label-width="80px">
            <jc-form-item label="用户名">
              <jc-input v-model="model.username" placeholder="请输入用户名" clearable></jc-input>
            </jc-form-item>
            <jc-form-item label="用户密码">
              <jc-input v-model="model.password" placeholder="请输入用户密码" show-password></jc-input>
            </jc-form-item>
            <jc-form-item label="即时配送">
              <jc-switch v-model="model.soon" active-color="green" inactive-color="red"></jc-switch>
            </jc-form-item>
            <jc-form-item label="爱好">
              <jc-checkbox-group v-model="model.hobby">
                <jc-checkbox label="篮球"></jc-checkbox>
                <jc-checkbox label="足球"></jc-checkbox>
                <jc-checkbox label="乒乓球"></jc-checkbox>
              </jc-checkbox-group>
            </jc-form-item>
            <jc-form-item label="性别">
              <jc-radio-group v-model="model.gender">
                <jc-radio label="1">男</jc-radio>
                <jc-radio label="0">女</jc-radio>
              </jc-radio-group>
            </jc-form-item>
          </jc-form>
          <template v-slot:footer>
            <jc-button type="primary" @click="login">登录</jc-button>
            <jc-button @click="visible=false">取消</jc-button>
          </template>
        </jc-dialog>
      </div>
    </template>
    

button组件

参数支持

  参数名     	参数描述                                    	参数类型   	默认值    
  type    	按钮类型(primary / success / warning / danger / info)	string 	default
  plain   	是否是朴素按钮                                 	boolean	false  
  round   	是否是圆角按钮                                 	boolean	false  
  circle  	是否是圆形按钮                                 	boolean	false  
  disabled	是否禁用按钮                                  	boolean	false  
  icon    	图标类名                                    	string 	无      

事件支持

  事件名  	事件描述
  click	点击事件


dialog组件


参数支持

  参数名    	参数描述                 	参数类型   	默认值  
  title  	对话框标题                	string 	提示   
  width  	宽度                   	string 	50%  
  top    	与顶部的距离               	string 	15vh 
  visible	是否显示dialog（支持sync修饰符）	boolean	false

事件支持

  事件名   	事件描述    
  opened	模态框显示的事件
  closed	模态框关闭的事件

插槽说明

  插槽名称   	插槽描述        
  default	dialog的内容   
  title  	dialog的标题   
  footer 	dialog的底部操作区


input组件

参数支持

  参数名称         	参数描述                	参数类型   	默认值  
  placeholder  	占位符                 	string 	无    
  type         	文本框类型(text/password)	string 	text 
  disabled     	禁用                  	boolean	false
  clearable    	是否显示清空按钮            	boolean	false
  show-password	是否显示密码切换按钮          	boolean	false
  name         	name属性              	string 	无    



事件支持

  事件名称  	事件描述   
  blur  	失去焦点事件 
  change	内容改变事件 
  focus 	获取的焦点事件

switch组件

参数支持

  参数名称         	参数描述      	参数类型  	默认值  
  v-model      	双向绑定      	布尔类型  	false
  name         	name属性    	string	text 
  activeColor  	自定义的激活的颜色 	string	     
  inactiveColor	自定义的不激活的颜色	string	     

事件支持

  事件名称  	事件描述        
  change	change时触发的事件

radio组件

参数支持

  参数名称   	参数描述      	参数类型              	默认值  
  v-model	双向绑定      	布尔类型              	false
  label  	单选框的value值	string，num,boolean	''   
  name   	name属性    	string            	     

radio-group组件

使用radio组件的缺点，需要给每个组件都绑定v-mode,可以使用radio-group包裹

checkbox组件

checkbox-group组件

form组件

form-item组件


封装成UI组件库

目录调整

- 根目录创建两个文件夹packages和examples

    packages: 用于存放所有的组件
    examples: 用于进行测试,把src改成examples
    
    

- 把components中所有的组件放入到packages中
- 把fonts放到packages中
- 删除原来的src目录

vue.config.js配置

新增vue.config.js配置

    const path = require('path')
    module.exports = {
      pages: {
        index: {
          entry: 'examples/main.js',
          template: 'public/index.html',
          filename: 'index.html'
        }
      },
      // 扩展 webpack 配置，使 packages 加入编译
      chainWebpack: config => {
        config.module
          .rule('js')
          .include.add(path.resolve(__dirname, 'packages')).end()
          .use('babel')
          .loader('babel-loader')
          .tap(options => {
            // 修改它的选项...
            return options
          })
      }
    }
    
    

- 统一导出packages中所有的组件

    // 统一导出
    // 导入颜色选择器组件
    import Button from './button'
    import Dialog from './dialog'
    import Input from './input'
    import Checkbox from './checkbox'
    import Radio from './radio'
    import RadioGroup from './radio-group'
    import Switch from './switch'
    import CheckboxGroup from './checkbox-group'
    import Form from './form'
    import FormItem from './form-item'
    import './fonts/font.scss'
    
    // 存储组件列表
    const components = [
      Button,
      Dialog,
      Input,
      Checkbox,
      Radio,
      RadioGroup,
      Switch,
      CheckboxGroup,
      Form,
      FormItem
    ]
    
    // 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
    const install = function (Vue) {
      // 遍历注册全局组件
      components.forEach(component => {
        Vue.component(component.name, component)
      })
    }
    
    // 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
    if (typeof window !== 'undefined' && window.Vue) {
      install(window.Vue)
    }
    
    // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
    export default {
      install
    }
    
    
    

测试

在examples中的main.js中进行导入测试

    import Vue from 'vue'
    import App from './App.vue'
    
    import HeimaUI from '../packages'
    
    Vue.use(HeimaUI)
    
    Vue.config.productionTip = false
    
    new Vue({
      render: h => h(App)
    }).$mount('#app')
    
    
发布到npm与github

发布到github



发布到npm

 https://cli.vuejs.org/zh/guide/build-targets.html#%E5%BA%93 

- 在scripts中新增一条 打包命令

    "lib": "vue-cli-service build --target lib packages/index.js"
    
    



- 发布到npm

修改package.json文件

    "private": false,
    "main": "dist/itcast-ui.umd.min.js",
    "author": {
      "name": "胡聪聪"
    },
    
    



增加 `.npmignore文件

    # 忽略目录
    examples/
    packages/
    public/
     
    # 忽略指定文件
    vue.config.js
    babel.config.js
    *.map
    
    



- npm发布

    npm login
    npm publish
    
    


