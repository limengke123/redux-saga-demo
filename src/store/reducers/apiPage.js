export function pageList(state = {
    list: [],
    isLoading: false
}, action) {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                list: action.payload
            }
        case 'LOADING':
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}
