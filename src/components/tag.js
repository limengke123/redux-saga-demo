import React from 'react'

const BaseTag = ({color, word}) => {
    return (
        <div style={{

        }}>{word}</div>
    )
}

export default function Tag ({tab, top, good}) {
    if(top) {
        return (
            <div>置顶</div>
        )
    } else if (good) {
        return (
            <div>精华</div>
        )
    } else {
        return (
            <div>{tab}</div>
        )
    }
}
