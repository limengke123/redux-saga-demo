import React, {Fragment} from 'react'
import {withRouter} from 'react-router-dom'

export default function List ({listData}) {

    return (
        <Fragment>
            {
                listData.map(itemData => <List.Item key={itemData.id} {...itemData} />)
            }
        </Fragment>
    )
}


List.Item = withRouter(function (props) {
    const {author, title, id, history} = props
    const {loginname, avatar_url} = author
    const handleClick = function () {
        history.push(`/detail/${id}`)
    }
    return (
        <div style={{
            padding: '10px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div style={{
                marginRight: '10px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <img src={avatar_url} alt="头像" style={{width: '30px', height: '30px', marginRight: '5px'}}/>
                <div>{loginname}</div>
            </div>
            <div onClick={handleClick}>
                {title}
            </div>
        </div>
    )
})
