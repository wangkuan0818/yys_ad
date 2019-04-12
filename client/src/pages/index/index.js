import Taro, { Component } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import './index.less'
import { set as setGlobalData, get as getGlobalData } from '../../util/global_data'

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

  componentWillMount() {
    // setGlobalData('test', 1)
    // console.log(getGlobalData('test'), 'getGlobalData', Taro)
  }

  onSelected = (value) => {
    setGlobalData('shikigamiList_swap', value)
    console.log(getGlobalData('shikigamiList_swap'), 'value-onSelected')
  }


  render () {

    return (
      <View className='index'>
        <View className='bg-fff ptb-20'>
          <WSteps stepCurrent={0}></WSteps>
        </View>
        <View className='plr-20 pb-20 mt-20 select bg-fff'>
          <WSelect 
            onSelected={this.onSelected.bind(this)}
            selectNumber={2}
            showLeaveGuild
          ></WSelect>
        </View>
        {/* 注释云服务 */}
        {/* <Login /> */}
      </View>
    )
  }
}
