import Taro, { Component } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import './index.less'
import { set as setGlobalData } from '../../util/global_data'
import CONFIG from '../../util/config'

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

  onSelected = (value) => {
    let {selectedList, leaveGuild} = value
    // 存已选式神碎片和是否上门
    setGlobalData('shikigamiList_swap', selectedList)
    setGlobalData('leaveGuild', leaveGuild)
    Taro.navigateTo({
      url: '../exchange/index',
    })
  }


  render () {

    return (
      <View className='index'>
        <View className='bg-fff ptb-20'>
          <WSteps stepCurrent={0}></WSteps>
        </View>
        <View className='pb-20 mt-20 select bg-fff'>
          <WSelect 
            onSelected={this.onSelected.bind(this)}
            selectNumber={CONFIG.selectNumber}
            showLeaveGuild
          ></WSelect>
        </View>
        {/* 注释云服务 */}
        {/* <Login /> */}
      </View>
    )
  }
}
