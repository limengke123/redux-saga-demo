import {actionTypes} from '../action-type'
export const tab = (
    state = 'all',
    action
) => {
    switch (action.type) {
        case actionTypes.CHANGE_TAB:
            return action.payload
        default:
            return state
    }
}
