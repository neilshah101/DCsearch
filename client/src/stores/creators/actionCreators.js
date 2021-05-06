import * as actionTypes from '../actions/actionTypes'
import history from '../../utils/history'




export const search = (searchparam , latitude, longitude) => {
    console.log(searchparam)
    console.log(latitude)
    console.log(longitude)

    return (dispatch) => {
        
        

        
        fetch(`https://radiant-badlands-23037.herokuapp.com/news/${searchparam}`)
        .then(response => response.json())
        .then(result => {
            dispatch({type: actionTypes.SEARCH_RESULT_NEWS, payload: result})
            console.log(result)
            
           
        }).catch(error => {
            console.log(error)
        })

        fetch(`https://radiant-badlands-23037.herokuapp.com/image/${searchparam}`)
        .then(response => response.json())
        .then(result => {
            dispatch({type: actionTypes.SEARCH_RESULT_IMAGE, payload: result})
            console.log(result)
            
           
        }).catch(error => {
            console.log(error)
        })

        fetch(`https://radiant-badlands-23037.herokuapp.com/video/${searchparam}`)
        .then(response => response.json())
        .then(result => {
            dispatch({type: actionTypes.SEARCH_RESULT_VIDEO, payload: result})
            console.log(result)
            
           
        }).catch(error => {
            console.log(error)
        })

        fetch(`https://radiant-badlands-23037.herokuapp.com/localresult/${searchparam}/${latitude}/${longitude}`)
        .then(response => response.json())
        .then(result => {
            dispatch({type: actionTypes.SEARCH_RESULT_LOCALRESULT, payload: result})
            console.log(result)
            
           
        }).catch(error => {
            console.log(error)
        })


        

        fetch(`https://radiant-badlands-23037.herokuapp.com/search/${searchparam}`)
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


        

    }
}