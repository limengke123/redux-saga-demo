import React from 'react'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import marked from 'marked'
import {actionTypes} from '../store/action-type'
import Container from '../container'

class DetailPage extends React.Component {
    componentDidMount () {
        const {fetchDetail} = this.props
        fetchDetail()
    }
    render () {
        const {detail, isLoading} = this.props
        const Detail = () => {
            if(!detail.content) return null
            const content = marked(detail.content)
            return (
                <div style={{
                    width: '800px',
                    margin: '0 auto'
                }}>
                    <div style={{
                        fontSize: '26px',
                        textAlign: 'center',
                        marginBottom: '20px',
                        fontWeight: 700
                    }}>
                        {detail.title}
                    </div>
                    <div dangerouslySetInnerHTML={{__html: content}} />
                </div>
            )
        }
        const Loading = <div>loading ...</div>
        return (
            <Container>
                {
                    isLoading ? Loading : <Detail />
                }
            </Container>
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

