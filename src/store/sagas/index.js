import {all} from 'redux-saga/effects'
import { watchIncrementAsync } from "./counter";
import { watchList } from './apiPage'
import {watchAndLog} from "./log"

export default function* rootSaga () {
    yield all([
        watchIncrementAsync(),
        watchAndLog(),
        watchList()
    ])
}
