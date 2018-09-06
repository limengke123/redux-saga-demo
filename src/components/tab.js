import React from  'react'
import {connect} from 'react-redux'

class Tab extends React.Component {
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
                active: true
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
                            <div key={item.key} className={item.active ? 'tab_normal tab_active' : 'tab_normal tab_normal_hover'}>
                                {item.title}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStataToProps = state => state

const mapDispatchToProps = dispatch  => dispatch

export default connect()(Tab)
