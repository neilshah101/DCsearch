import * as actionTypes from '../actions/actionTypes'
import history from '../../utils/history'




export const search = (searchparam, location) => {
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
           
        }).catch(error => {
            console.log(error)
        })

        fetch(`http://localhost:8081/news/${searchparam}`)
        .then(response => response.json())
        .then(result => {
            dispatch({type: actionTypes.SEARCH_RESULT_NEWS, payload: result})
            console.log(result)
            
           
        }).catch(error => {
            console.log(error)
        })

        fetch(`http://localhost:8081/image/${searchparam}`)
        .then(response => response.json())
        .then(result => {
            dispatch({type: actionTypes.SEARCH_RESULT_IMAGE, payload: result})
            console.log(result)
            
           
        }).catch(error => {
            console.log(error)
        })

        fetch(`http://localhost:8081/video/${searchparam}`)
        .then(response => response.json())
        .then(result => {
            dispatch({type: actionTypes.SEARCH_RESULT_VIDEO, payload: result})
            console.log(result)
            
           
        }).catch(error => {
            console.log(error)
        })

        

    }
}