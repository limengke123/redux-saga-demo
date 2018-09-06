import React from 'react'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {actionTypes} from '../store/action-type'

class DetailPage extends React.Component {
    componentDidMount () {
        const {fetchDetail} = this.props
        fetchDetail()
    }

    // fetchData() {
    //     const {dispatch, match} = this.props
    //     dispatch({
    //         type: actionTypes.FETCH_DETAIL,
    //         payload: match.params.id
    //     })
    // }

    render () {
        const {detail, isLoading, fetchDetail} = this.props
        const Detail = <div>this is detail</div>
        const Loading = <div>loading ...</div>
        console.log(isLoading)
        return (
            <div>
                {
                    isLoading ? Loading : Detail
                }
                <div>
                    dsadsa
                </div>
                <button onClick={fetchDetail}>click</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        detail: state.detailData.data,
        isLoading: state.detailData.isLoading
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchDetail() {
            dispatch({
                type: actionTypes.FETCH_DETAIL,
                payload: ownProps.match.params.id
            })
        }
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
)(DetailPage)

