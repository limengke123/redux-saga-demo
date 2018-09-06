import React from 'react'
import {withRouter} from 'react-router-dom'

class Pagination extends React.Component {
    render () {
        const {current = 1} = this.props
        let arr = []
        if (current < 4) {
            arr = ['«', 1,2,3,4,5, '»']
        } else {
            arr = ['«', current - 2, current - 1, current, current + 1, current + 2, '»']
        }
        return (
            <div style={{
                display: 'flex',
                margin: '20px 0 0 20px'
            }}>
                {
                    arr.map((item, index) => {
                        if(index === 0 ) return <Pagination.Item name={'pagination_active'} number={item} key={index} customStyle={{
                            border: '1px solid #ddd',
                            cursor: 'pointer',
                        }} />
                        if(current === item) return <Pagination.Item number={item} key={index} customStyle={{
                            border: '1px solid #ddd',
                            cursor: 'default',
                            borderLeftWidth: 0,
                            color: '#80bd01'
                        }} />
                        return <Pagination.Item name={'pagination_active'} number={item} key={index} customStyle={{
                            border: '1px solid #ddd',
                            cursor: 'pointer',
                            borderLeftWidth: 0}}/>
                    })
                }
            </div>
        )
    }
}

Pagination.Item = function ({customStyle, number, name}) {
    return (
        <div style={{
            ...customStyle,
            padding: '4px 12px',
            textAlign: 'center',
        }} className={name}>
            {number}
        </div>
    )
}

export default withRouter(Pagination)
