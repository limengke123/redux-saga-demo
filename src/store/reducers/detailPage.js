import {actionTypes} from '../action-type'

export const detailData = (state = {
    data: {},
    isLoading: false
}, action) => {
    switch (action.type) {
        case actionTypes.DETAIL_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        case actionTypes.FETCH_DETAIL_SUCCESS:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}
