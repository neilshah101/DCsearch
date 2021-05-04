import { useState } from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../stores/creators/actionCreators' 
import '../css/App.css';

function Search(props) {
  const [searchparam, setSearchParam] = useState({})
  const [location, setlocation] = useState({})

  const handleSearch = () => {
    props.onSearch(searchparam)
  }

  const handleChange = (e) => {
    setSearchParam({
        ...searchparam,
        [e.target.name]: e.target.value,
        
    })




  
}
  return (
    <div>
      <div>
        <h1>  DCsearch</h1>
      </div>
      <div>
        <input type="text" onChange = {handleChange} placeholder="type here to search" name="searchinput"/>
      </div>
      <div>
       <button onClick = {handleSearch}>Search</button>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
      onSearch: (searchparam) => dispatch(actionCreators.search(searchparam.searchinput)),
      
  }
}


export default connect(null,mapDispatchToProps)(Search) 