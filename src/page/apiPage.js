import React from 'react'
import {connect} from 'react-redux'
import {Spin} from 'antd/lib/spin'
import 'antd/lib/spin/style/css'

function ApiPage({list, isLoading, fetchData}) {
    return (
        <Spin tip={'Loading...'} spinning={isLoading}>
            <button onClick={fetchData}>fetch data</button>
            <ul>
                {list.map(item => <div key={item.id}>{item.title}</div>)}
            </ul>
        </Spin>
    )
}

const mapStateToProps = function (state) {
    return {
        list: state.pageList.list,
        isLoading: state.pageList.isLoading
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        fetchData() {
            dispatch({
                type: 'FETCH_LIST'
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApiPage)
