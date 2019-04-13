import Taro, { Component } from "@tarojs/taro"
import { View } from "@tarojs/components"
import { PropTypes } from 'prop-types'
import { AtTabs, AtButton, AtMessage, AtSwitch, AtTabsPane, AtNoticebar } from 'taro-ui'
import _ from 'lodash'
import CONFIG from '../util/config'
import './index.less'
import '../app.less'
import WItem from './item'

const defaultFunc = () => {}
class WSelect extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            current: 0,
            selectedList: [],
            leaveGuild: false,
        }
    }
    switchTabClick (value) {
        this.setState({
            current: value,
        })
    }

    handleChange = value => {
        this.setState({
            leaveGuild: value,
        })
      }

    onChange = (value) => {
        let {
            selectedList
        } = this.state
        let list = _.clone(selectedList)
        // 是否包含该对象，包含则删除
        let findeq = _.find(list, {'id': value.id})
        if (findeq) {
            _.remove(list,list[_.findIndex(list, findeq)])
        }
        if(value.value > 0) {
            list.push(value)
        }
        this.setState({
            selectedList: list,
        })
        console.log(list)
    }

    onSelected = () => {
        const {
            selectedList,
            leaveGuild
        } = this.state
        let {selectNumber} = this.props
        if(selectedList.length > selectNumber) {
            Taro.atMessage({
                'message': `所选式神数量不能超过${selectNumber}个`,
                'type': 'error',
              })
        } else if (selectedList.length < 1) {
            Taro.atMessage({
                'message': `所选式神数量需要大于1个`,
                'type': 'error',
              })
        } else {
            this.props.onSelected({selectedList, leaveGuild})
        }
    }

    render() {
        const {leaveGuild, current, selectedList} = this.state
        const {buttonText, showLeaveGuild, selectNumber} = this.props
        return (
            <View>
                <AtNoticebar icon='volume-plus'>
                    式神选择不得超过{selectNumber}个，当前已选择{selectedList.length}个式神
                </AtNoticebar>
                <View className='plr-20 select'>
                    {showLeaveGuild && 
                    <View className=''>
                        <AtSwitch title='是否上门:' checked={leaveGuild} onChange={this.handleChange} />
                    </View>}
                    <AtTabs current={current} tabList={CONFIG.tabList} onClick={this.switchTabClick.bind(this)}>
                        <AtTabsPane current={current} index={0} >
                            <View className='flex-middle flex-wrap flex-align-content peopleItems'>
                                {CONFIG.sp && CONFIG.sp.map((elem, index) => {
                                    return (
                                        <View className='flex-1 tac peopleList fs-24 ptb-20 mt-10' key={index}>
                                            <WItem title={elem.title} listId={elem.id} onChange={this.onChange.bind(this)}></WItem>
                                        </View>
                                    )
                                })}
                            </View>
                        </AtTabsPane>
                        <AtTabsPane current={current} index={1} >
                            <View className='flex-middle flex-wrap flex-align-content peopleItems'>
                                {CONFIG.ssr && CONFIG.ssr.map((elem, index) => {
                                    return (
                                        <View className='flex-1 tac peopleList fs-24 ptb-20 mt-10' key={index}>
                                            <WItem title={elem.title} listId={elem.id} onChange={this.onChange.bind(this)}></WItem>
                                        </View>
                                    )
                                })}
                            </View>
                        </AtTabsPane>
                        <AtTabsPane current={current} index={2} >
                            <View className='flex-middle flex-wrap flex-align-content peopleItems'>
                                {CONFIG.sr && CONFIG.sr.map((elem, index) => {
                                    return (
                                        <View className='flex-1 tac peopleList fs-24 ptb-20 mt-10' key={index}>
                                            <WItem title={elem.title} listId={elem.id} onChange={this.onChange.bind(this)}></WItem>
                                        </View>
                                    )
                                })}
                            </View>
                        </AtTabsPane>
                        <AtTabsPane current={current} index={3} >
                            <View className='flex-middle flex-wrap flex-align-content peopleItems'>
                                {CONFIG.gua && CONFIG.gua.map((elem, index) => {
                                    return (
                                        <View className='flex-1 tac peopleList fs-24 ptb-20 mt-10' key={index}>
                                            <WItem title={elem.title} listId={elem.id} onChange={this.onChange.bind(this)}></WItem>
                                        </View>
                                    )
                                })}
                            </View>
                        </AtTabsPane>
                    </AtTabs>
                    <View className='mt-20 botton'>
                        <AtButton onClick={this.onSelected.bind(this)}>{buttonText}</AtButton>
                    </View>
                    <AtMessage />
                </View>
            </View>
        )
    }
}

WSelect.propTypes = {
    buttonText: PropTypes.string,
    onSelected: PropTypes.func,
    selectNumber: PropTypes.number,
    showLeaveGuild: PropTypes.bool
}

WSelect.defaultProps = {
    buttonText: '确认填写完毕进入下一页', //按钮文案
    onSelected: defaultFunc, // 选择完事件
    selectNumber: 1, // 选择式神数量上限
    showLeaveGuild: false, // 显示是否上门
}

export default WSelect
