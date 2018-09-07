import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import List from '../components/List'
import Container from '../container'
import Pagination from '../components/Pagination'
import Tab from '../components/tab'
import {actionTypes} from "../store/action-type";

class ApiPage extends React.Component {

    componentDidMount () {
        const {fetchData} = this.props
        fetchData()
    }

    render () {
        const {list, isLoading} = this.props
        return (
            <Container>
                {
                    isLoading ? <div>loading ....</div> : null
                }
                <Tab />
                <List listData={list}/>
                <Pagination />
            </Container>
        )
    }
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
        },
        changeTab(tab) {
            dispatch({
                type: actionTypes.CHANGE_TAB,
                payload: tab
            })
        }
    }
}

// export default connect(mapStateToProps, mapDispatchToProps)(ApiPage)

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(ApiPage)
