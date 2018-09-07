import React from 'react'

const map = {
    share: '分享',
    ask: '问答',
    dev: '测试',
    job: '招聘',
}

const BaseTag = ({customStyle, word}) => {
    return (
        <div style={{
            ...customStyle,
            padding: '2px 4px',
            fontSize: '12px',
            borderRadius: '3px'
        }}>{word}</div>
    )
}

export default function Tag ({tab, top, good}) {
    if(top) {
        return (
            <BaseTag word={'置顶'} customStyle={{
                color: '#fff',
                backgroundColor: '#80bd01'
            }} />
        )
    } else if (good) {
        return (
            <BaseTag word={"精华"} customStyle={{
                color: '#fff',
                backgroundColor: '#80bd01'
            }}/>
        )
    } else {
        return (
            <BaseTag word={map[tab] || '问答'} customStyle={{
                color: '#999',
                backgroundColor: '#e5e5e5'
            }} />
        )
    }
}
