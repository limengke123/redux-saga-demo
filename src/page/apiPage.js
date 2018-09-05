import React, {Fragment} from 'react'
import {connect} from 'react-redux'

function ApiPage({list, isLoading, fetchData}) {

    return (
        <Fragment>
            <button onClick={fetchData}>fetch data</button>
            {
                isLoading ? <div>i'm trying to fetch list !!!</div> : null
            }
            <ul>
                {list.map(item => <div key={item.id}>{item.title}</div>)}
            </ul>
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
