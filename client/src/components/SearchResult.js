import React from 'react';
import { connect } from 'react-redux'

function SearchResult (props){
    
    //for array
    var search_results = props.search_results
    const images = search_results.inline_images
    console.log(images)
    const imageItems =images.map((items, index) => {
        return <div  key = {index} className="" >
                    
                    <div>
                        <h1>{items.link}</h1>
                    </div>
                    
                </div>
    })

   
    //for list
    const search_parametersItems = Object.keys(search_results).map((items, index) => {
        return <div   className="" >
                    
                    <div>
                        <h1>{search_results[items].engine}</h1>
                    </div>
                    
                </div>
    })

    return(
        <div>
            <div>
                <h1 className=""> my search result </h1>
            </div>
            <div className="" >
                    {imageItems}
            </div>
            <div className="" >
                    {search_parametersItems}
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        search_results: state.search_result
    }
}

export default connect(mapStateToProps)(SearchResult)

