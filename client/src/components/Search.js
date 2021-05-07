import { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../stores/creators/actionCreators' 
import { useEffect , setState } from 'react'

import '../css/App.css';

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



  

  return (
    <div className="container">
      <div>
      <a href="/"><img style={{height: "300px"}} id="searchbarimage1" src = "../images/logo.gif" /></a>
      </div>
      <div id="searchbar" type="text">
        <input onChange = {handleChange} id="searchbartext" type="text" name="searchinput" />
        <button onClick = {handleSearch} id="searchbarbutton">
          <svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </button>
      </div>
      <div>
       <button onClick = {handleSearch} style={{width: "150px"}}>Search</button>
      </div>
    </div>
  );
  }
const mapDispatchToProps = (dispatch) => {
  return {
      onSearch: (searchparam,latitude,longitude) => dispatch(actionCreators.search(searchparam.searchinput,latitude,longitude)),
      
      
  }
}


export default connect(null,mapDispatchToProps)(Search) 