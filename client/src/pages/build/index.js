import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import {get as getGlobalData } from '../../util/global_data'
// import CONFIG from '../../util/config'
import './index.less'

import WSteps from '../../components/w-steps'

export default class Build extends Component {
  constructor() {
    super(...arguments)
    this.state = {
      shikigamiList_swap: [],
      leaveGuild: false,
      shikigamiList_exchange: [],
    }
  }

  componentWillMount() {
    let shikigamiList_exchange = getGlobalData('shikigamiList_exchange')
    let shikigamiList_swap = getGlobalData('shikigamiList_swap')
    let leaveGuild = getGlobalData('leaveGuild')
    this.setState({
      shikigamiList_swap,
      leaveGuild,
      shikigamiList_exchange,
    })
    console.log(
      shikigamiList_swap,
      leaveGuild,
      shikigamiList_exchange,)
  }

  config = {
    navigationBarTitleText: '生成广告图'
  }

  render () {
    const {shikigamiList_swap, shikigamiList_exchange, leaveGuild} = this.state
    return (
      <View className='build'>
        <View className='bg-fff ptb-20'>
          <WSteps stepCurrent={2}></WSteps>
        </View>
        <View className='mlr-20 p-20 mtb-20 bg-fff bor-ra bor-eee pos-r over-auto c-555'>
          <Image className='bg pos-a bor-ra' src='../../image/bag1.jpg'></Image>
          <View className='mainBox pos-r'>
            <View className='flex-middle flex-wrap flex-align-content mb-20'>
              {shikigamiList_swap && shikigamiList_swap.map((elem, index) => {
                return (
                  <View className='flex-1 items tac' key={`swap_${index}`}>
                    <View>{elem.title}</View>
                    <View>{elem.value}</View>
                  </View>
                )
              })}
              {/* <View className='flex-1 items tac'>
                <View>茨木童子</View>
                <View>123</View>
              </View>
              <View className='flex-1 items tac'>
                <View>123123</View>
                <View>123</View>
              </View> */}
            </View>
            <View className='tac fx-30'>
              <View className='fs-26'>需要换的式神</View>
              <AtIcon value='chevron-down' size='30' color='#555'></AtIcon>
              <View>{leaveGuild?'可上门':'不上门'}</View>
            </View>
            <View className='flex-middle flex-wrap flex-align-content flex-justify-center mt-20'>
              {shikigamiList_exchange && shikigamiList_exchange.map((elem, index) => {
                return (
                  <View className='flex-1 items tac' key={`exchange_${index}`}>
                    <View>{elem.title}</View>
                    <View>{elem.value}</View>
                  </View>
                )
              })}
              {/* <View className='flex-1 items tac'>
                <View>茨木童子</View>
                <View>123</View>
              </View> */}
            </View>
          </View>
        </View>
      </View>
    )
  }
}
