import {put, call, takeLatest} from 'redux-saga/effects'
import {actionTypes} from '../action-type'
import {ajax} from '../../utils'

function* fetchDetail(action) {
    yield put({
        type: actionTypes.DETAIL_LOADING,
        payload: true
    })
    try {
        const res = yield call(ajax.get, `/topic/${action.payload}`, {
            params: {
                mdrender: false
            }
        })
        yield put({
            type: actionTypes.FETCH_DETAIL_SUCCESS,
            payload: res.data.data
        })
    } catch (e) {
        console.log(e)
    } finally {
        yield put({
            type: actionTypes.DETAIL_LOADING,
            payload: false
        })
    }
}

export function* watchFetchDetail() {
    yield takeLatest(actionTypes.FETCH_DETAIL, fetchDetail)
}
