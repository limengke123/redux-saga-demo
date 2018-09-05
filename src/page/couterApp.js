import React from 'react'
import {connect} from 'react-redux'
import Counter from '../components/Counter'

class CounterApp extends React.Component {
    render () {
        const {
            counter,
            onIncrement,
            onIncrementAsync,
            onDecrement,
        } = this.props
        return (
            <div>
                <Counter
                    value={counter}
                    onIncrement={onIncrement}
                    onIncrementAsync={onIncrementAsync}
                    onDecrement={onDecrement} />
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        counter: state.counter
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onIncrement(){
            dispatch({type: 'INCREMENT'})
        },
        onIncrementAsync() {
            dispatch({type: 'INCREMENT_ASYNC'})
        },
        onDecrement() {
            dispatch({type: 'DECREMENT'})
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp)
