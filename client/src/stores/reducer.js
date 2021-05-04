const initialState = {
    search_result: [],
    search_result_news: [],
    search_result_image: [],
    search_result_video: [],

     
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

        case 'SEARCH_RESULT_IMAGE':
            return {
                ...state,
                search_result_image: action.payload
            }

        case 'SEARCH_RESULT_VIDEO':
            return {
                ...state,
                search_result_video: action.payload
            }
        
        default:
            return state
    }
}

export default reducer