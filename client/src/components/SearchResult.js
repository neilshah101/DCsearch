import React from 'react';
import { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../stores/creators/actionCreators' 
import '../css/SearchResult.css'



function SearchResult (props){
    const [searchparam, setSearchParam] = useState({})

    const handleSearch = () => {
     props.onSearch(searchparam)
    }

    const handleChange = (e) => {
        setSearchParam({
            ...searchparam,
            [e.target.name]: e.target.value,
        })
    }


    //for array
    var search_results = props.search_results
    const organic_results = search_results.organic_results
    console.log(organic_results)
    const organic_resultsItems =organic_results.map((items, index) => {
        return <div  key = {index} className="" >
                    
                    <div>
                        <h3><a href={items.link} target="_blank">{items.title}</a></h3>
                    </div>
                    <div>
                        <a href={items.link} target="_blank">{items.displayed_link}</a>
                    </div>
                    <div>
                        <p>{items.snippet}</p>
                    </div><br></br>
                       
                </div>
    })

   
    //for list
    const search_parametersItems = Object.keys(search_results).map((items, index) => {
        return <div   className="" >
                    
                    <div>
                        <h1>{search_results[items].q}</h1>
                    </div>
                    
                </div>
    })




    return(
        <div>
            <div id="header">
                <div id="topbar">
                    <a href="/"><img id="searchbarimage" src = "../../public/Logo.png" /></a>
                    <div id="searchbar" type="text">
                        <input onChange = {handleChange} id="searchbartext" type="text" name="searchinput" />
                
                        <button onClick = {handleSearch} id="searchbarbutton">
                            <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path
                                      d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                                </path>
                            </svg>
                        </button>
                    </div>
                    
                    <img id="profileimage" src="images/photo.png" />
                </div>
                <div id="optionsbar">
                    <ul id="optionsmenu1">
                        <li id="optionsmenuactive">All</li>
                        <li>News</li>
                        <li>Videos</li>
                        <li>Images</li>
                        <li>Maps</li>
                        <li>More</li>
                    </ul>

                    <ul id="optionsmenu2">
                        <li>Settings</li>
                        <li>Tools</li>
                     </ul>
                </div>
            </div>
            <div className="" >
                    {search_parametersItems}
            </div>
            <div className="" >
                    {organic_resultsItems}
            </div>

        </div> 
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (searchparam) => dispatch(actionCreators.search(searchparam.searchinput))
    }
}


const mapStateToProps = (state) => {
    return {
        search_results: state.search_result
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchResult)

