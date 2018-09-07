import {takeLatest, put, call} from 'redux-saga/effects'
import {actionTypes} from '../action-type'
import {ajax} from "../../utils"

function* fetchList(action) {
    yield put({
        type: actionTypes.LIST_LOADING,
        payload: true
    })
    try {
        let params = {}
        if (action.payload) {
            const {tab = 'all', page = 1} = action.payload
            params.tab = tab
            params.page = page
        }
        const res = yield call(ajax.get, '/topics', {
            params
        })
        yield put({
            type: actionTypes.FETCH_LIST_SUCCESS,
            payload: res.data.data
        })
    } catch (e) {
        console.log(e)
    } finally {
        yield put({
            type: actionTypes.LIST_LOADING,
            payload: false
        })
    }
}

export function* watchList () {
    yield takeLatest(actionTypes.FETCH_LIST, fetchList)
}
