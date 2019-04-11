import Taro, { Component } from "@tarojs/taro"
import { View } from "@tarojs/components"
import { PropTypes } from 'prop-types'
import { AtTabs } from 'taro-ui'
import CONFIG from '../util/config'
import './index.less'
import '../app.less'
import WItem from './item'

class WSelect extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            current: 0,
        }
    }
    handleClick (value) {
        this.setState({
          current: value
        })
    }

    onChange = (value) => {
        console.log(value, 'value -------------2')
    }

    render() {
        let {list} = this.props
        return (
            <View className='select'>
                <AtTabs current={this.state.current} tabList={CONFIG.tabList} onClick={this.handleClick.bind(this)}></AtTabs>
                <View className='flex-middle flex-wrap'>
                    {list && list.map((elem, index) => {
                        return (
                            <View className='flex-1 tac peopleList fs-24 ptb-20 mt-10' key={index}>
                                <WItem title={elem.title} onChange={this.onChange.bind(this)}></WItem>
                            </View>
                        )
                    })}
                </View>
            </View>
        )
    }
}

WSelect.propTypes = {
    list: PropTypes.array,
}

WSelect.defaultProps = {
    list: [],
}

export default WSelect
