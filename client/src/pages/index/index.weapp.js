import Taro, { Component } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import { AtTag } from 'taro-ui'
import './index.less'

// import Login from '../../components/login/index.weapp'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <AtTag>标签</AtTag>
        <AtTag type='primary' circle>标签</AtTag>
        <AtTag size='small'>标签</AtTag>
        {/* 注释云服务 */}
        {/* <Login /> */}
      </View>
    )
  }
}
