import React from 'react';
import { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom";
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


    
    var search_result_image = props.search_result_image



    let images_resultsItems =[]
    
    const images_results = search_result_image.images_results
    console.log(images_results)
    images_resultsItems =images_results.map((items, index) => {
        return <div  key = {index} className="" >

                    
                    <div>
                        <a href={items.link} target="_blank"><img src={items.thumbnail}/></a>
                    </div>
                    <div>
                        <a href={items.link} target="_blank"><p>{items.title}</p></a>
                    </div>
                    <div>
                        <p>{items.source} </p>
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
                    <li id="optionsmenuactive"><NavLink to= {`/search/${searchparam}`}>All</NavLink></li>
                        <li><NavLink to= {`/news/${searchparam}`}>News</NavLink></li>
                        <li><NavLink to= {`/video/${searchparam}`}>Video</NavLink></li>
                        <li><NavLink to= {`/image/${searchparam}`}>Images</NavLink></li>
                        <li>Maps</li>
                        <li>More</li>
                    </ul>

                    <ul id="optionsmenu2">
                        <li>Settings</li>
                        <li>Tools</li>
                     </ul>
                </div>
            </div>
            
            <div className="box" >
                    <h1>News </h1>
                <p> {images_resultsItems}   </p>
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
        search_results: state.search_result,
        search_result_news : state.search_result_news,
        search_result_image : state.search_result_image


    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchResult)



    