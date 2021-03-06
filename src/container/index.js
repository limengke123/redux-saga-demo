import React from 'react'
import {withRouter} from 'react-router-dom'
import BackTop from '../components/backTop'

class Container extends React.Component {
    render () {
        const {history} = this.props
        return (
            <div style={{
                backgroundColor: '#e1e1e1'
            }}>
                <header style={{
                    width: '100%',
                    backgroundColor: '#444',
                    height: '50px'
                }}>
                    <div style={{
                        width: '90%',
                        margin: '0 auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt="logo" style={{
                            width: '120px',
                            height: '50px',
                            cursor: 'pointer'
                        }} onClick={() => history.push('/apiPage')}/>
                        <ul style={{
                            display: 'flex',
                            listStyle: 'none',
                            color: '#ccc',
                            margin: 0,
                            padding: 0
                        }}>
                            <li style={{marginLeft: '15px', fontSize: '14px'}}><a className={'header_link_active'} href="">首页</a></li>
                            <li style={{marginLeft: '15px', fontSize: '14px'}}><a className={'header_link_active'} href="">新手入门</a></li>
                            <li style={{marginLeft: '15px', fontSize: '14px'}}><a className={'header_link_active'} href="">api</a></li>
                            <li style={{marginLeft: '15px', fontSize: '14px'}}><a className={'header_link_active'} href="">关于</a></li>
                            <li style={{marginLeft: '15px', fontSize: '14px'}}><a className={'header_link_active'} href="">注册</a></li>
                            <li style={{marginLeft: '15px', fontSize: '14px'}}><a className={'header_link_active'} href="">登录</a></li>
                        </ul>
                    </div>
                </header>
                <main>
                    <div style={{
                        width: '90%',
                        margin: '15px auto',
                        backgroundColor: '#fff',
                        padding: '0 0 10px 0'
                    }}>
                        {this.props.children}
                    </div>
                </main>
                <footer style={{
                    backgroundColor: '#fff',
                    height: '60px'
                }}>
                    <div style={{
                        width: '90%',
                        height: '100%',
                        margin: '0 auto',
                        fontSize: '16px',
                        color: '#333',
                        textAlign: 'center',
                    }}>
                        <p style={{
                            height: '30px',
                            lineHeight: '30px',
                            margin: 0
                        }}>powered by react react-router redux react-redux redux-saga</p>
                        <p style={{
                            height: '30px',
                            lineHeight: '30px',
                            margin: 0
                        }}>thanks free api from cnode!</p>
                    </div>
                </footer>
                <BackTop />
            </div>
        )
    }
}

export default withRouter(Container)
