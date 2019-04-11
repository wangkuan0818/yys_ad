import Taro, { Component } from "@tarojs/taro"
import { View, Input } from "@tarojs/components"
import { PropTypes } from 'prop-types'
import './index.less'
import '../app.less'

const defaultFunc = () => {}
class WItem extends Component {
    constructor () {
        super(...arguments)
        this.state= {
          value: null
        }
    }

    // 剩余碎片数量发生改变
    onChange = (e) => {
      let value = e.detail.value
      this.setState({
        value,
      })
      this.props.onChange(value)
    }

    render() {
      let {value} = this.state
      let {title} = this.props
        return (
          <View className='wItems'>
              <View className='title'>{title}</View>
              <View className='pt-10'>
                  <Input 
                    className='bor-eee mlr-10 fs-20' 
                    type='number' 
                    maxLength={4} 
                    placeholder='已有碎片数量' 
                    onInput={this.onChange} 
                    value={value} 
                    confirmType='确定'
                  />
              </View>
              {/* 屏蔽已预订碎片功能 */}
              {/* <View className='pt-10'>
                  <Input className='bor-eee mlr-10 fs-20' placeholder='被预订碎片数量' />
              </View> */}
          </View>
        )
    }
}

WItem.propTypes = {
  title: PropTypes.string,
  onChange: PropTypes.func
}

WItem.defaultProps = {
  title: '',
  onChange: defaultFunc,
}

export default WItem
