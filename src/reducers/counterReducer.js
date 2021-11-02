const initState = {size : 0, sum: 0}
const counterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'updateCounterSize':
            return { ...state, size: action.payload }
        case 'resetSum':
            return {...state, sum: 0}
        case 'updateCounterSum':
            return {...state, sum: state.sum + action.payload}
        default:
            return state
    }
}

export default counterReducer;