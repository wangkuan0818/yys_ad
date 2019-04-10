import Taro, { Component } from "@tarojs/taro"
import { View, } from "@tarojs/components"
import { AtSteps } from 'taro-ui'
import CONFIG from '../util/config'

class WSteps extends Component {

  render() {
    let {stepCurrent} = this.props
    return (
      <View>
        <AtSteps
          items={CONFIG.stepItems}
          current={stepCurrent}
        />
      </View>
    )
  }
}

WSteps.propTypes = {
    stepCurrent: Number,
}

WSteps.defaultProps = {
    stepCurrent: 0,
}

export default WSteps
