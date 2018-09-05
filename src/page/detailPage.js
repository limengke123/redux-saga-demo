import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

class DetailPage extends React.Component {
    componentDidMount () {
        const {fetchDetail} = this.props
        fetchDetail()
    }
    render () {
        const {detail, isLoading} = this.props
        const Detail = (
            <div>
                this is detail
            </div>
        )
        const Loading = (
            <div>
                loading ...
            </div>
        )
        return (
            <div>
                {
                    isLoading ? <Loading /> : <Detail />
                }
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

const mapDispatchToProps = dispatch => {
    return {
        fetchDetail() {
            dispatch('FETCH_DETAIL')
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailPage))
