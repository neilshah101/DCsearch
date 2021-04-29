const initialState = {
    search_result: [],
     
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SEARCH_RESULT':
            return {
                search_result: action.payload
            }
        
        default:
            return state
    }
}

export default reducer