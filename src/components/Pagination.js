import React from 'react'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {actionTypes} from "../store/action-type"


class Pagination extends React.Component {

    fetchPageData(page) {
        const {changePage, history, location, fetchList} = this.props
        const {search} = location
        let queryString = '/apiPage'
        if (search && /tab/g.test(search)) {
            // 存在查询字符
            // 且存在tab
            const tabString = search.split('&')[0]
            queryString = queryString +  tabString + `&page=${page}`
            fetchList({
                page,
                tab: tabString.split('=')[1]
            })
        } else {
            queryString += `?page=${page}`
            fetchList({
                page
            })
        }
        changePage(page)
        history.push(queryString)
        scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render () {
        const {current = 1} = this.props
        let arr = []
        if (current < 4) {
            arr = ['«', 1,2,3,4,5, '...', '»']
        } else {
            arr = ['«', '...', current - 2, current - 1, current, current + 1, current + 2, '...', '»']
        }



        return (
            <div style={{
                display: 'flex',
                margin: '20px 0 0 20px'
            }}>
                {
                    arr.map((item, index) => {
                        if(index === 0 ) return <Pagination.Item changePage={() => this.fetchPageData(1)} name={'pagination_active'} number={item} key={index} customStyle={{
                            border: '1px solid #ddd',
                            cursor: 'pointer',
                        }} />
                        if(current === item) return <Pagination.Item number={item} key={index} customStyle={{
                            border: '1px solid #ddd',
                            cursor: 'default',
                            borderLeftWidth: 0,
                            color: '#80bd01'
                        }} />
                        if(item === '...') return <Pagination.Item number={item} key={index} customStyle={{
                            border: '1px solid #ddd',
                            cursor: 'default',
                            borderLeftWidth: 0,
                        }} />
                        return <Pagination.Item changePage={() => this.fetchPageData(item)} name={'pagination_active'} number={item} key={index} customStyle={{
                            border: '1px solid #ddd',
                            cursor: 'pointer',
                            borderLeftWidth: 0}}/>
                    })
                }
            </div>
        )
    }
}

Pagination.Item = function ({customStyle, number, name, changePage}) {
    return (
        <div style={{
            ...customStyle,
            padding: '4px 12px',
            textAlign: 'center',
        }} className={name} onClick={changePage}>
            {number}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        current: state.currentPage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changePage(page) {
            dispatch({
                type: actionTypes.CHANGE_PAGE,
                payload: page
            })
        },
        fetchList(query) {
            dispatch({
                type: 'FETCH_LIST',
                payload: query
            })
        }
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(Pagination)
