import React from 'react'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
// import marked from 'marked'
import {md} from '../utils'
import {actionTypes} from '../store/action-type'
import Container from '../container'
import Tag from '../components/tag'
import {formatTime} from '../utils'

class DetailPage extends React.Component {
    componentDidMount () {
        const {fetchDetail} = this.props
        fetchDetail()
    }
    render () {
        const {detail, isLoading} = this.props
        const {tab, top, good, author, create_at, replies, last_reply_at} = detail
        const Detail = () => {
            if(!detail.content) return null
            const content = md.render(detail.content)
            return (
                <div>
                    <header style={{
                        padding: 10,
                        borderRadius: '3px 3px 0 0'
                    }}>
                        <div style={{
                            margin: '8px 0 8px 0',
                            display: 'flex',
                            alignItems: 'center'
                        }}><Tag tab={tab} top={top} good={good} />
                            <div style={{
                                fontSize: '22px',
                                // textAlign: 'center',
                                fontWeight: 700,
                                marginLeft: 20
                            }}>
                                {detail.title}
                            </div>
                        </div>
                        <div style={{
                            fontSize: '12px',
                            color: '#838383'
                        }}>
                            <span>
                                {formatTime(new Date(create_at))}
                            </span>
                            <span style={{marginLeft: 5}}>
                                {author.loginname}
                            </span>
                        </div>
                    </header>
                    <main style={{
                        padding: 10,
                        borderRadius: '0 0 3px 3px',
                        borderTop: '1px solid #e5e5e5',
                    }}>
                        <div dangerouslySetInnerHTML={{__html: content}} className={'fmt'} />
                    </main>
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

