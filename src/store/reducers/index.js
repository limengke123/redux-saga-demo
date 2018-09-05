import {combineReducers} from 'redux'
import {counter} from './counter'
import {pageList} from './apiPage'

export default combineReducers({
    counter,
    pageList
})
