import Taro, { Component } from "@tarojs/taro"
import { View, Picker } from "@tarojs/components"
import './index.less'

class WSelect extends Component {
    state = {
        selector: ['sp', 'ssr', 'sr', 'r'],
        selectorChecked: 'sp',
    }
    onChange = e => {
        this.setState({
            selectorChecked: this.state.selector[e.detail.value]
        })
    }

    render() {
        return (
            <View className='plr-20 select'>
                <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
                    <View className='picker'>
                        选择式神稀有度：{this.state.selectorChecked}
                    </View>
                </Picker>
            </View>
        )
    }
}

WSelect.propTypes = {
    
}

WSelect.defaultProps = {
    
}

export default WSelect
