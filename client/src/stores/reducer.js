const initialState = {
    search_result: [],
    search_result_news: [],

     
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SEARCH_RESULT':
            return {
                ...state,
                search_result: action.payload
            }

            case 'SEARCH_RESULT_NEWS':
                return {
                    ...state,
                    search_result_news: action.payload
                }
        
        default:
            return state
    }
}

export default reducer