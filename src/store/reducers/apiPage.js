import {actionTypes} from '../action-type'
export function pageList(state = {
    list: [],
    isLoading: false
}, action) {
    switch (action.type) {
        case actionTypes.FETCH_LIST_SUCCESS:
            return {
                ...state,
                list: action.payload
            }
        case actionTypes.LIST_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}
