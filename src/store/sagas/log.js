import {take, select} from 'redux-saga/effects'

export function* watchAndLog () {
    while(true) {
        const action = yield take('*')
        const state = select()
        console.log('action', action)
        console.log('state after', state)
    }
}
