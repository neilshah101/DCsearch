import React from 'react';
import { useState } from 'react'
import { connect } from 'react-redux'
import { NavLink , Link } from "react-router-dom";
import * as actionCreators from '../stores/creators/actionCreators'
import { useEffect , setState } from 'react'
import '../css/SearchResult.css'



function Search(props) {
    const [searchparam, setSearchParam] = useState({})
    const [latitude, setLatitude] = useState ({})
    const [longitude, setLongitude] = useState ({})
  
    const handleSearch = () => {
      props.onSearch(searchparam, latitude, longitude)
      
    }
  
    const handleChange = (e) => {
      setSearchParam({
          ...searchparam,
          [e.target.name]: e.target.value,
          
      })
  
      
      
    }
  
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(function(position) {
    
        setLatitude (position.coords.latitude)
        setLongitude (position.coords.longitude) 
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    })
  

    //for array
    var search_results = props.search_results



    // for search information display
    const search_information_total_resultsItems = Object.keys(search_results).map((items, index) => {
        return <div   className="" >
                    
                    <div>
                        <p>{search_results[items].total_results} </p>
                    </div>
                    
                </div>
    })
    const search_time_taken_displayedItems = Object.keys(search_results).map((items, index) => {
        return <div   className="" >
                    
                    <div>
                        <p>{search_results[items].time_taken_displayed}</p>
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-badge-ad-fill" viewBox="0 0 16 16">
                        <path d="M11.35 8.337c0-.699-.42-1.138-1.001-1.138-.584 0-.954.444-.954 1.239v.453c0 .8.374 1.248.972 1.248.588 0 .984-.44.984-1.2v-.602zm-5.413.237-.734-2.426H5.15l-.734 2.426h1.52z"/>
                        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm6.209 6.32c0-1.28.694-2.044 1.753-2.044.655 0 1.156.294 1.336.769h.053v-2.36h1.16V11h-1.138v-.747h-.057c-.145.474-.69.804-1.367.804-1.055 0-1.74-.764-1.74-2.043v-.695zm-4.04 1.138L3.7 11H2.5l2.013-5.999H5.9L7.905 11H6.644l-.47-1.542H4.17z"/>
                        </svg><p> <a href={items.link} target="_blank"> {items.displayed_link}</a></p>
                    </div>
                    <div>
                        <h3>{items.title}</h3>
                    </div>
                    <div>
                        <p>{items.description}</p>
                    </div>
                    

                </div>
})}

let adsSitelinksItems =[]
if (search_results.ads){
    if (search_results.ads.sitelink){
        console.log(search_results.ads.sitelink)
        adsSitelinksItems = search_results.ads.sitelink.map((items, index) => {
    return <div  key = {index} className="" >

                <div>
                    <p>Ad: <a href={items.link} target="_blank"> {items.title}</a></p>
                </div>
                
                <div>
                    <p>{items.snippets}</p>
                </div>
                

            </div>
})}
}




    // for knowledge_graph display
    let knowledge_graphItems =[]
    if (search_results.knowledge_graph){
        console.log(search_results.knowledge_graph)
        knowledge_graphItems = Object.keys(search_results).map((items, index) => {
        return <div>
                    
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
            
                <a  href={items.source} target="_blank"><img src={items.image}/></a>
        
        </div>
    })}} 

    

    // for knowledge_graph_people_also_search_for display
    let knowledge_graph_people_also_search_for_Items =[]
    if (search_results.knowledge_graph){
    if (search_results.knowledge_graph.people_also_search_for){
    knowledge_graph_people_also_search_for_Items = search_results.knowledge_graph.people_also_search_for.map((items, index) => {
        return <div className="knowlege_graph_spacing_items">
            
            <div>
            <a href={items.link} target="_blank"><img src={items.image}/></a>
            </div>
            <div>
               <p> {items.name}</p>
            </div>
        </div>
    })}}

    // for knowledge_graph_profiles display
    let knowledge_graph_profiles_Items =[]
    if (search_results.knowledge_graph){
    if (search_results.knowledge_graph.profiles){
        knowledge_graph_profiles_Items = search_results.knowledge_graph.profiles.map((items, index) => {
        return <div className="knowlege_graph_spacing_items">
            
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
        return <div className="card" style={{width: "18rem"}}>
            <div>
                <a href={items.link} target="_blank" className="bi-twitter"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                         <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg></a>
            </div>
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
    var search_result_localresult = props.search_result_localresult
    if (search_result_localresult.local_results){
    const local_results = search_result_localresult.local_results
    console.log(local_results)
    local_placesItems =local_results.map((items, index) => {
        return <div  key = {index} className="local_places_container" >
                    <div>
                        <div>
                            <h3> {items.title} </h3>
                        </div>
                        <div>
                            <img className="local_places_img" src={items.thumbnail}/>
                        </div>
                         <div>
                            <p> Ratings: {items.rating} -- ( {items.reviews} ) --  {items.type}</p>
                        </div>
                       
                        <div>
                            <p> {items.address} </p>
                        </div>
                        <div>
                            phone:<a href={`tel:${items.phone}`}> {items.phone} </a>
                        </div>
                        
                    </div>
                    <div>
                        <div>
                            <a href={items.website} target="_blank"><img className="local_places_website_img"src ={`../images/world-wide-web.png`}/></a>
                        </div>
                    </div>
                    
                </div>
})}

    


    // for related questions display
    let related_questionsItems =[]
    if (search_results.related_questions){
    const related_questions = search_results.related_questions
    console.log(related_questions)
    related_questionsItems =related_questions.map((items, index) => {
        return <div  key = {index} className="related_questions" >

                    <div>
                        <a href={items.link} target="_blank"><p>{items.question}</p></a>
                    
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
                        <h2 >{items.title}</h2>
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
    var search_result_video = props.search_result_video
    let search_result_videoItems =[]
    if (search_result_video.video_results){
    const video_results = search_result_video.video_results
    console.log(video_results)
    search_result_videoItems =video_results.map((items, index) => {
        return <div  key = {index} className="card" style={{width: "18rem"}} >
                    <div>
                    <a href={items.link} target="_blank" className="bi-camera-video"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z"/>
                        </svg></a>
                    </div><br></br>
                    <div>
                        <a href={items.link} target="_blank"><img src={items.thumbnail}/></a>
                    </div>
                    <div>
                        <a href={items.link} target="_blank"><p>{items.title}</p></a>
                    </div>
                    <div>
                        <a href={items.link} target="_blank"><p>{items.displayed_link}</p></a>
                    </div>
                    
                    
                    <div>
                        <p>{items.snippet} </p>
                    </div>
                    
                    

                </div>
    })}




    // for top_stories display
    let top_storiesItems =[]
    if (search_results.top_stories){
    const top_stories = search_results.top_stories
    console.log(top_stories)
    top_storiesItems =top_stories.map((items, index) => {
        return <div className="card" style={{width: "18rem"}}>
                    <div>
                    <a href={items.link} target="_blank" className="bi-camera-video"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-up-right-square-fill" viewBox="0 0 16 16">
                        <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM5.904 10.803 10 6.707v2.768a.5.5 0 0 0 1 0V5.5a.5.5 0 0 0-.5-.5H6.525a.5.5 0 1 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 .707.707z"/>
                        </svg></a>
                    </div><br></br>
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
    var search_result_image = props.search_result_image



    let images_resultsItems =[]
    
    const images_results = search_result_image.images_results
    if (search_result_image.images_results){
    console.log(images_results)
    images_resultsItems =images_results.map((items, index) => {
        return <div  key = {index} className="images_resultsItems" >

                    
                    <div>
                        <a href={items.link} target="_blank"><img src={items.thumbnail}/></a>
                    </div>
                    
                    
                    

                </div>
    })}
   
    // for related searches display
    let related_searchesItems =[]
    if (search_results.related_searches){
    const related_searches = search_results.related_searches
    console.log(related_searches)
    related_searchesItems =related_searches.map((items, index) => {
        return <div  key = {index} className="relatedlists" >

                    
                    <ul>
                        <li><button className="relatedlists_btn" ><a href={items.link} target="_blank">{items.query}</a></button></li>
                    </ul><br></br>
                    

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
        <div className="searchresult_container">
            <div id="header">
                <div id="topbar">
                    <div>
                        <a href="/"><img id="searchbarimage" src = "../images/logo.gif" /></a>
                    </div>
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
                </div>
                <div id="optionsbar">
                    <ul id="optionsmenu1">
                        <li id="optionsmenuactive"><NavLink to= {`/search/${searchparam}`}>All</NavLink></li>
                        <li><NavLink to= {`/news/${searchparam}`}>News</NavLink></li>
                        <li><NavLink to= {`/video/${searchparam}`}>Video</NavLink></li>
                        <li><NavLink to= {`/image/${searchparam}`}>Images</NavLink></li>
                        {/* <li>Maps</li>
                        <li>More</li> */}
                    </ul>

                    {/* <ul id="optionsmenu2">
                        <li>Settings</li>
                        <li>Tools</li>
                     </ul> */}
                </div>
            </div>
            <div className="searchresultsarea">
                <div className="searchresultcontainer">
                    <div>
                        <div id="searchresultsnumber">   
                            <div> about:{search_information_total_resultsItems}</div>
                            <div>results({search_time_taken_displayedItems }seconds)   </div>
                        </div>
                    </div>
                    <div className="searchresult" >
                    
                     {organic_resultsItems[0]}
                    </div>
           
                    <div className="searchresult_ads" >
            
                        {adsItems}
                        {adsSitelinksItems}
                    </div>
                    <div className="localmap" >
                    
                     {local_mapItems}   
                    </div>
                    <div className="" > 
                        
                        {local_placesItems[1]}
                        {local_placesItems[2]}
                        {local_placesItems[3]}
                        {local_placesItems[4]}
                        
                    </div>
                    <div className="related_questionsItems" >
                            <div>
                            People also ask :
                            </div>
                            <div>
                            {related_questionsItems}  
                        </div> 
                    </div>
            
                    <div className="searchresult" >
                         
                        {organic_resultsItems}
                    </div>
                    <div className="card_flex best-book-h1" >
                     
                        {twitter_resultsItems}
                     </div>
                    <div className="card_flex best-book-h1"  >
                        {top_storiesItems}
                    </div>
                    <div className="image_container" >
                    
                        
                        {images_resultsItems[1]}
                        {images_resultsItems[2]}
                        {images_resultsItems[3]}
                        {images_resultsItems[4]}
                        {images_resultsItems[5]}
                        {images_resultsItems[6]}
                        {images_resultsItems[7]}
                        {images_resultsItems[8]}
                        {images_resultsItems[9]}
                        {images_resultsItems[10]}
                        {images_resultsItems[11]}
                        {images_resultsItems[12]}
                        {images_resultsItems[13]}
                        {images_resultsItems[14]}
                        {images_resultsItems[15]}
                        {images_resultsItems[16]}
                        {images_resultsItems[17]}
                        {images_resultsItems[18]}
                        {images_resultsItems[19]}
                        {images_resultsItems[20]}
                        
                
                    </div>
                    <div className="card_flex best-book-h1" >
                        
                        {search_result_videoItems}
                    </div>
                    <div>
                        <div className="related_searches">
                            <h3>Realted Searches</h3>
                        </div>
                        <div className="card_flex best-book-h1">{related_searchesItems}</div>
                        
                    </div>
                </div>
                <div >
                    <div className="knowledge_graph" >
                        <div>
                            {knowledge_graphItems}
                        </div>
                        <div>
                            <div className= "knowledge_graph_images_Items">
                                {knowledge_graph_images_Items}
                            </div>
                        </div>
                        <div>
                            <div className= "knowledge_graph_images_Items">
                                <div>
                                    People also search for
                                </div>
                                <div className= "knowledge_graph_images_Items">
                                {knowledge_graph_people_also_search_for_Items}
                                </div>
                            </div>
                        </div>
                        <div className= "knowledge_graph_images_Items"s>
                            <div>
                                Find Us On
                            </div>
                            <div className= "knowledge_graph_images_Items">
                                {knowledge_graph_profiles_Items}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div> 
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (searchparam,latitude,longitude) => dispatch(actionCreators.search(searchparam.searchinput,latitude,longitude)),
    }
}


const mapStateToProps = (state) => {
    return {
        search_results: state.search_result,
        search_result_news : state.search_result_news,
        search_result_image : state.search_result_image,
        search_result_video: state.search_result_video,
        search_result_localresult: state.search_result_localresult

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Search)



{/* <div class="wrapper">
      <div class="search-input">
        <a href="" target="_blank" hidden></a>
        <input type="text" placeholder="Type to search..">
        <div class="autocom-box">
          <!-- here list are inserted from javascript -->
        </div>
        <div class="icon"><i class="fas fa-search"></i></div>
      </div>
    </div>

    <!-- <script src="js/suggestions.js"></script> -->
    <!-- <script src="js/script.js"></script> -->

  </body> */}