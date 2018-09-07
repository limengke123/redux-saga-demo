import React from 'react'

export default class Loading extends React.Component {
    render () {
        const {isLoading, children} = this.props
        const Load = function () {
            return (
                <div>
                    <div className={'spin spin-spinning'} >
                        <span className={'spin-dot spin-dot-spin'}>
                            <i />
                            <i />
                            <i />
                            <i />
                        </span>
                    </div>
                </div>
            )
        }
        return (
            <div className={'spin-nested-loading'}>
                {
                    isLoading ? <Load /> : null
                }
                <div className={isLoading ?  'container spin-blur' : 'container'}>
                    {children}
                </div>
            </div>
        )
    }
}
