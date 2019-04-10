import Taro, { Component } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import { AtSteps, AtButton } from 'taro-ui'
import './index.less'

import CONFIG from '../../util/config'
// import Login from '../../components/login/index.weapp'

export default class Index extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      stepCurrent: 0,
    }
  }

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  stepOnChange = (current) => {
    this.setState({
      stepCurrent: current,
    })
  }

  render () {
    let {stepCurrent} = this.state

    return (
      <View className='index'>
        <AtSteps
          items={CONFIG.stepItems}
          current={stepCurrent}
        />

        <AtButton onClick={this.stepOnChange.bind(this,1)}>点击</AtButton>

        {/* 注释云服务 */}
        {/* <Login /> */}
      </View>
    )
  }
}
