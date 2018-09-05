import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import List from '../components/List'

function ApiPage({list, isLoading, fetchData}) {
    return (
        <Fragment>
            <button onClick={fetchData}>fetch data</button>
            {
                isLoading ? <div>loading ....</div> : null
            }
            <List listData={list}/>
        </Fragment>
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
