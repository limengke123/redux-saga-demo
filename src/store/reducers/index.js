import {combineReducers} from 'redux'
import {counter} from './counter'
import {pageList} from './apiPage'
import {detailData} from './detailPage'

export default combineReducers({
    counter,
    pageList,
    detailData,
})
