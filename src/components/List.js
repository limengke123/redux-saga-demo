import React, {Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import Tag from '../components/tag'

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
    const {author, title, id, history, tab, top, good} = props
    const {loginname, avatar_url} = author
    const handleClick = function () {
        history.push(`/detail/${id}`)
    }
    return (
        <div style={{
            padding: '10px',
            display: 'flex',
            alignItems: 'center',
            borderBottom: '1px solid #f0f0f0'
        }} className={'main_item_active'}>
            <div style={{
                marginRight: '10px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <img src={avatar_url} alt="头像" style={{width: '30px', height: '30px', marginRight: '5px'}}/>
                <div style={{
                    color: '#333',
                    fontSize: '12px',
                    cursor: 'default',
                    alignSelf: 'flex-end'
                }}>{loginname}</div>
            </div>
            <Tag tab={tab} top={top} good={good} />
            <div onClick={handleClick} style={{
                marginLeft: '10px',
                cursor: 'pointer'
            }} className={'main_link_active'}>
                {title}
            </div>
        </div>
    )
})
