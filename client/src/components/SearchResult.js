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


    //for array
    var search_results = props.search_results



    // for search information display
    const search_informationItems = Object.keys(search_results).map((items, index) => {
        return <div   className="" >
                    
                    <div>
                        <p>{search_results[items].total_results} {search_results[items].time_taken_displayed}</p>
                    </div>
                    
                </div>
    })



    //for displaying ads
    let adsItems =[]
    if (search_results.ads){
    const ads = search_results.ads
    console.log(ads)
    adsItems = ads.map((items, index) => {
        return <div  key = {index} className="" >

                    <div>
                        <p>Ad: <a href={items.link} target="_blank"> {items.link}</a></p>
                    </div>
                    <div>
                        <h3>{items.title}</h3>
                    </div>
                    <div>
                        <p>{items.description}</p>
                    </div>
                    {/* <div>
                        <p>{items.sitelinks.title}</p>
                    </div> */}

                </div>
})}





    // for knowledge_graph display
    let knowledge_graphItems =[]
    if (search_results.knowledge_graph){
        console.log(search_results.knowledge_graph)
        knowledge_graphItems = Object.keys(search_results).map((items, index) => {
        return <div   className="" >
                    
                    <div>
                        <h1> {search_results[items].title} </h1>
                    </div>
                    <div>
                        <h4> {search_results[items].type} </h4>
                    </div>
                    <div>
                       <p>{search_results[items].description}</p>
                    </div>
                    <div>
                    {search_results[items].customer_service}
                    </div>
                
                     
                     
                </div>
    })}

    
    // for knowledge_graph_images display
    let knowledge_graph_images_Items =[]
    if (search_results.knowledge_graph) {
    if (search_results.knowledge_graph.header_images){
    knowledge_graph_images_Items = search_results.knowledge_graph.header_images.map((items, index) => {
        return <div>
            <a href={items.source} target="_blank"><img src={items.image}/></a>
        </div>
    })}} 

    

    // for knowledge_graph_people_also_search_for display
    let knowledge_graph_people_also_search_for_Items =[]
    if (search_results.knowledge_graph){
    if (search_results.knowledge_graph.people_also_search_for){
    knowledge_graph_people_also_search_for_Items = search_results.knowledge_graph.people_also_search_for.map((items, index) => {
        return <div>
            
            <div>
            <a href={items.link} target="_blank"><img src={items.image}/></a>
            </div>
            <div>
                {items.name}
            </div>
        </div>
    })}}

    // for knowledge_graph_people_also_search_for display
    let knowledge_graph_profiles_Items =[]
    if (search_results.knowledge_graph){
    if (search_results.knowledge_graph.profiles){
        knowledge_graph_profiles_Items = search_results.knowledge_graph.profiles.map((items, index) => {
        return <div>
            
            <div>
            <a href={items.link} target="_blank"><img src={items.image}/></a>
            </div>
            <div>
                {items.name}
            </div>
        </div>
    })}}



    // for twitter_results display
    let twitter_resultsItems =[]
    if (search_results.twitter_results){
    if (search_results.twitter_results.tweets){
        twitter_resultsItems = search_results.twitter_results.tweets.map((items, index) => {
        return <div>
            
            <div>
            <p>{items.snippet}</p>
            </div>
            <div>
                {items.published_date}
            </div>
            <div>
            <a href={items.link} target="_blank">Twitter</a>
            </div>
        </div>
    })}}



    // for local map display
    let local_mapItems =[]
    if (search_results.local_map){
    local_mapItems = Object.keys(search_results).map((items, index) => {
        return <div   className="" >
                    
                    
                        <img src ={search_results[items].image} />
                    
                </div>
    })
}



    //for local places
    let local_placesItems =[]
    if (search_results.local_results){
    const local_results = search_results.local_results
    console.log(local_results)
    local_placesItems =local_results.places.map((items, index) => {
        return <div  key = {index} className="" >

                    <div>
                        <h3> {items.title} </h3>
                    </div>
                    <div>
                        <p> Ratings: {items.rating} -- ( {items.reviews} ) --  {items.type}</p>
                    </div>
                    <div>
                        <p> {items.description} </p>
                    </div>
                    <div>
                        <p> {items.address} </p>
                    </div>
                    <div>
                        <img src={items.thumbnail}/>
                    </div>
                    
                </div>
})}



    // for related questions display
    let related_questionsItems =[]
    if (search_results.related_questions){
    const related_questions = search_results.related_questions
    console.log(related_questions)
    related_questionsItems =related_questions.map((items, index) => {
        return <div  key = {index} className="" >

                    <div>
                        <p>{items.question}</p>
                    
                        <p>{items.displayed_link}</p>
                    
                        <h3><a href={items.link} target="_blank">{items.title}</a></h3>
                    </div>

                </div>
})}



    // for organic results display
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



    // for inline video display
    let videoItems =[]
    if (search_results.inline_videos){
    const videos = search_results.inline_videos
    console.log(videos)
    videoItems =videos.map((items, index) => {
        return <div  key = {index} className="" >

                    <div>
                        <img  src={items.thumbnail} />
                    </div>
                    <div>
                        <h3><a href={items.link} target="_blank">{items.title}</a></h3>
                    </div>
                    <div>
                        <p>{items.platform} - {items.channel}</p>
                    </div>
                    <div>
                        <p>{items.date}</p>
                    </div><br></br>

                </div>
})}



    // for top_stories display
    let top_storiesItems =[]
    if (search_results.top_stories){
    const top_stories = search_results.top_stories
    console.log(top_stories)
    top_storiesItems =top_stories.map((items, index) => {
        return <div  key = {index} className="" >
                    <div>
                        <h3><a href={items.link} target="_blank">{items.title}</a></h3>
                    </div>

                    <div>
                        <img  src={items.thumbnail} />
                    </div>
                    <div>
                        <p>{items.date}</p>
                    </div>

                </div>
})}


    // for inline images display
    let imageItems =[]
    if (search_results.inline_images){
    const images = search_results.inline_images
    console.log(images)
    imageItems =images.map((items, index) => {
        return <div  key = {index} className="" >

                    <div>
                        <img  src={items.thumbnail} />
                    </div>

                </div>
})}
   
    // for related searches display
    let related_searchesItems =[]
    if (search_results.related_searches){
    const related_searches = search_results.related_searches
    console.log(related_searches)
    related_searchesItems =related_searches.map((items, index) => {
        return <div  key = {index} className="" >

                    
                    <div>
                        <button><a href={items.link} target="_blank">{items.query}</a></button>
                    </div><br></br>
                    

                </div>
})}


    // for search_parameters display
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
                    <h1>search_information</h1>
                <p> {search_informationItems}   </p>
            </div>
            <div className="box" >
                    <h1>organic_results</h1>  
                    {organic_resultsItems[0]}
            </div>
            <div className="box" >
                    <h1>people_also_search_for</h1>
                    {knowledge_graph_people_also_search_for_Items}
            </div>
            <div className="box" >
            <h1>Ads</h1>
                {adsItems}
            </div>
            <div className="box" >
            <h1>local map</h1>
                {local_mapItems}   
            </div>
            <div className="box" > 
                 <h1>local places</h1>
                 {local_placesItems}
            </div>
            <div className="box" >
                    <h1>related questions</h1>
                   {related_questionsItems}   
            </div>
            {/* <div className="" >
                    {search_parametersItems}
            </div> */}
            <div className="box" >
                    <h1>organic_results</h1>  
                    {organic_resultsItems}
            </div>
            <div className="box" >
                    <h1>twitter results</h1>  
                    {twitter_resultsItems}
            </div>
            <div className="box" >
                    <h1>Top stories</h1>  
                    {top_storiesItems}
            </div>
            <div className="box" >
                <h1>images</h1>
                    {imageItems}
            </div>
            <div className="box" >
                <h1>videos</h1>
                    {videoItems}
            </div>
            <div className="box" >
                    <h1>knowledge graph</h1>
                    {knowledge_graphItems}
                    {knowledge_graph_images_Items}
                    {knowledge_graph_people_also_search_for_Items}
                    {knowledge_graph_profiles_Items}
            </div>
            <div className="box" >
                <h1>related searches</h1>
                    {related_searchesItems}
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



    