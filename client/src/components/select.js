import Taro, { Component } from "@tarojs/taro"
import { View } from "@tarojs/components"
import { PropTypes } from 'prop-types'
import { AtTabs, AtButton } from 'taro-ui'
import _ from 'lodash'
import CONFIG from '../util/config'
import './index.less'
import '../app.less'
import WItem from './item'

class WSelect extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            current: 0,
            selectedList: [],
        }
    }
    handleClick (value) {
        this.setState({
          current: value
        })
    }

    onChange = (value) => {
        let {
            selectedList
        } = this.state
        let list = _.clone(selectedList)
        let findeq = _.find(list, {'id': value.id})
        if (findeq) {
            _.remove(list,list[_.findIndex(list, findeq)])
        }
        list.push(value)
        this.setState({
            selectedList: list,
        })
    }

    onSelected = () => {
        const {
            selectedList
        } = this.state
        console.log(selectedList, '已选')
    }

    render() {
        let {list, buttonText} = this.props
        return (
            <View className='select'>
                <AtTabs current={this.state.current} tabList={CONFIG.tabList} onClick={this.handleClick.bind(this)}></AtTabs>
                <View className='flex-middle flex-wrap'>
                    {list && list.map((elem, index) => {
                        return (
                            <View className='flex-1 tac peopleList fs-24 ptb-20 mt-10' key={index}>
                                <WItem title={elem.title} listId={elem.id} onChange={this.onChange.bind(this)}></WItem>
                            </View>
                        )
                    })}
                </View>
                <View className='mt-20 botton'>
                    <AtButton onClick={this.onSelected.bind(this)}>{buttonText}</AtButton>
                </View>
            </View>
        )
    }
}

WSelect.propTypes = {
    list: PropTypes.array,
    buttonText: PropTypes.string,
}

WSelect.defaultProps = {
    list: [],
    buttonText: '确认填写完毕进入下一页'
}

export default WSelect
