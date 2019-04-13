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

    componentWillMount () {
      this.setState({
        value: this.props.value1
      })
    }

    // 剩余碎片数量发生改变
    onChange = (e) => {
      let value = parseInt(e.detail.value)
      let id = e.target.dataset.id
      const {title} = this.props
      this.setState({
        value,
      })
      this.props.onChange({value, id, title})
    }

    onConfirm = () => {
      const {value} = this.state
      console.log(value, 'value')
    }

    render() {
      let {value} = this.state
      let {title, listId} = this.props
        return (
          <View className='wItems'>
              <View className='title'>{title}</View>
              <View className='pt-10'>
                  <Input 
                    className='bor-eee mlr-10 fs-20' 
                    dataId={listId}
                    type='number' 
                    maxLength={4} 
                    placeholder='已有碎片数量' 
                    onInput={this.onChange} 
                    onConfirm={this.onConfirm}
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
  listId: PropTypes.number,
  onChange: PropTypes.func,
  value1: PropTypes.number,
}

WItem.defaultProps = {
  title: '',
  listId: 0,
  onChange: defaultFunc,
  value1: null,
}

export default WItem
