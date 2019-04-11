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
      <View className='index'>
        <View className='bg-fff pt-20'>
          <WSteps stepCurrent={0}></WSteps>
        </View>
        <View className='p-20 mt-20 select bg-fff'>
          <WSelect></WSelect>
        </View>

        {/* 注释云服务 */}
        {/* <Login /> */}
      </View>
    )
  }
}
