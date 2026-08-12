const initState = {
    isLoading: false,
}

type StateType = typeof initState;

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingReducer = (state: StateType = initState, action: LoadingActionType): StateType => {
    switch (action.type) {
        case "CHANGE_LOADING":
            return {...state, isLoading: action.isLoading}

        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading
})
