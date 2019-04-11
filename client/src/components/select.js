import Taro, { Component } from "@tarojs/taro"
import { View, Picker } from "@tarojs/components"
import { AtTabs } from 'taro-ui'
import CONFIG from '../util/config'
import './index.less'

class WSelect extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            selector: ['sp', 'ssr', 'sr', 'r'],
            selectorChecked: 'sp',
            current: 0,
        }
      }
    
    onChange = e => {
        this.setState({
            selectorChecked: this.state.selector[e.detail.value]
        })
    }
    handleClick (value) {
        this.setState({
          current: value
        })
      }

    render() {
        return (
            <View className='select'>
                <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                    <View className='picker'>
                        选择式神稀有度：{this.state.selectorChecked}
                    </View>
                </Picker>
                <AtTabs current={this.state.current} tabList={CONFIG.tabList} onClick={this.handleClick.bind(this)}>
                </AtTabs>
                <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
            </View>
        )
    }
}

WSelect.propTypes = {
    
}

WSelect.defaultProps = {
    
}

export default WSelect
