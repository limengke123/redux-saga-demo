import {actionTypes} from "../action-type"

export const currentPage = (
    state = 1,
    action
) => {
    switch (action.type) {
        case actionTypes.CHANGE_PAGE:
            return action.payload
        default:
            return state
    }
}
