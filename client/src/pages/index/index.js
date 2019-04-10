import Taro, { Component } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import './index.less'

import WSteps from '../../components/w-steps'
import WSelect from '../../components/select'
// import Login from '../../components/login/index.weapp'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {}
  }

  config = {
    navigationBarTitleText: '首页'
  }


  render () {

    return (
      <View>
        <WSteps stepCurrent={0}></WSteps>
        <View className='ptr-20 select'>
          <WSelect></WSelect>
        </View>

        {/* 注释云服务 */}
        {/* <Login /> */}
      </View>
    )
  }
}
