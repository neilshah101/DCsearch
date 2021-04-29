import * as actionTypes from '../actions/actionTypes'
import history from '../../utils/history'




export const search = (searchparam) => {
    console.log(searchparam)
    return (dispatch) => {
        console.log(searchparam)

        fetch(`http://localhost:8081/search/${searchparam}`)
        .then(response => response.json())
        .then(result => {
            dispatch({type: actionTypes.SEARCH_RESULT, payload: result})
            console.log(result)
            if(result) {
                history.push(`/search/${searchparam}`)
            }
           
        })

    }
}