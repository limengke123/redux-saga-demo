import {combineReducers} from 'redux'
import {counter} from './counter'
import {pageList} from './apiPage'
import {detailData} from './detailPage'
import {tab} from './tab'
import {currentPage} from './currentPage'

export default combineReducers({
    counter,
    pageList,
    detailData,
    tab,
    currentPage,
})
