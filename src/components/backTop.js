import React from 'react'

export default function BackTop () {
    const back = function () {
        document.getElementById('root').scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div onClick={back} className={'back-top'}>
            <div className={'back-top-inner'}>
                UP
            </div>
        </div>
    )
}
