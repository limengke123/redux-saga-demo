import {delay} from 'redux-saga'
import {put, takeEvery, all, select, take, takeLatest} from 'redux-saga/effects'

// the worker
export function* incrementAsync() {
    yield delay(1000)
    yield put({type: 'INCREMENT'})
}

// the watcher
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

/**
 * takeEvery 的做法
 */
// function*  watchAndLog () {
//     yield takeEvery('*', function* (action) {
//         const state = yield select()

//         console.log('action', action)
//         console.log('state after', state)
//     })
// }

/**
 * take 的做法
 */
// export function* watchAndLog() {
//     while(true) {
//         const action = yield take('*')
//         const state = yield select()
//         console.log('action', action)
//         console.log('state after', state)
//     }
// }


