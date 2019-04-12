import Taro, { Component } from '@tarojs/taro'
import { View, } from '@tarojs/components'
import './index.less'
import { set as setGlobalData, get as getGlobalData } from '../../util/global_data'

import WSteps from '../../components/w-steps'
import WSelect from '../../components/select'

export default class Exchange extends Component {
  constructor() {
    super(...arguments)
    this.state = {}
  }

  config = {
    navigationBarTitleText: '需要的式神'
  }

  onSelected = (value) => {
    let {selectedList} = value
    // 存已选式神碎片和是否上门
    setGlobalData('shikigamiList_exchange', selectedList)
    
    console.log(getGlobalData('shikigamiList_exchange'), 'value-onSelected')
  }


  render () {

    return (
      <View className='exchange'>
        <View className='bg-fff ptb-20'>
          <WSteps stepCurrent={1}></WSteps>
        </View>
        <View className='plr-20 pb-20 mt-20 select bg-fff'>
          <WSelect 
            onSelected={this.onSelected.bind(this)}
            selectNumber={2}
          ></WSelect>
        </View>
      </View>
    )
  }
}
