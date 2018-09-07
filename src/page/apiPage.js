import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import List from '../components/List'
import Container from '../container'
import Pagination from '../components/Pagination'
import Tab from '../components/tab'
import {actionTypes} from "../store/action-type";

class ApiPage extends React.Component {
    constructor (props) {
        super(props)
        const {match} = props
        // console.log(props)
        this.syncState(match)
    }
    componentDidMount () {
        const {fetchData} = this.props
        fetchData()
    }

    syncState (match) {
        // console.log(match)
        const {changeTab} = this.props
        // changeTab('share')
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
                <Pagination current={6} />
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
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(ApiPage)
