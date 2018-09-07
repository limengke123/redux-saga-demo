import React from  'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {actionTypes} from '../store/action-type'

class Tab extends React.Component {
    constructor(props) {
        super(props)
        const {changeTab, activeTab} = props
        // 同步 url 上的 tab 参数
        changeTab(activeTab)
    }
    fetchTabData (key, active) {
        if (active) return false
        const {history, changeTab, fetchList, changePage} = this.props
        history.push(`/apiPage?tab=${key}`)
        changeTab(key)
        fetchList({
            tab: key
        })
        changePage()
    }
    render () {
        const tabs = [
            {
                key: 'all',
                title: '全部'
            },
            {
                key: 'good',
                title: '精华'
            },
            {
                key: 'share',
                title: '分享'
            },
            {
                key: 'ask',
                title: '问答',
            },
            {
                key: 'job',
                title: '招聘'
            },
            {
                key: 'dev',
                title: '客户端测试'
            },
        ]
        const {activeTab = 'all'} = this.props
        tabs.map(item => item.key === activeTab ? item.active = true : item.active = false)
        return (
            <div style={{
                backgroundColor: '#f6f6f6',
                borderRadius: '3px 3px 0 0',
                height: '20px',
                padding: '10px',
                display: 'flex'
            }}>
                {
                    tabs.map(item => {
                        return (
                            <div
                                key={item.key}
                                onClick={() => this.fetchTabData(item.key, item.active)}
                                className={item.active ? 'tab_normal tab_active' : 'tab_normal tab_normal_hover'}>
                                {item.title}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        activeTab: state.tab
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeTab(tab) {
            dispatch({
                type: actionTypes.CHANGE_TAB,
                payload: tab
            })
        },
        fetchList(queryString) {
            dispatch({
                type: 'FETCH_LIST',
                payload: queryString
            })
        },
        changePage() {
            dispatch({
                type: actionTypes.CHANGE_PAGE,
                payload: 1
            })
        },
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Tab)

// export default Tab
