import {takeLatest, put, call} from 'redux-saga/effects'
import {ajax} from "../../utils"

function* fetchList() {
    yield put({
        type: 'LOADING',
        payload: true
    })
    try {
        const res = yield call(ajax.get, '/topics')
        console.log(res)
        yield put({
            type: 'FETCH_SUCCESS',
            payload: res.data.data
        })
    } catch (e) {
        console.log(e)
    } finally {
        yield put({
            type: 'LOADING',
            payload: false
        })
    }
}

export function* watchList () {
    yield takeLatest('FETCH_LIST', fetchList)
}
