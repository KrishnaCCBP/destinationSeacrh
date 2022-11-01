import DestinationItem from './components/DestinationItem/index.js'

import './components/DestinationSearch/index.css'

const DestinationSearch=props=>{
    const {destinationsList}=props
    state={searchInput:" "}

    onChangeSearchInput=(event)=>{
        this.setState({
            searchInput:event.target.value
        })
    }

    render(

        const { searchInput }=this.state

        const searchResults=destinationsList.filter((eachPlace)=>eachPlace.name.includes(searchInput))

        return(
            <div className="app-container">
                <h1 className="main-heading">Destination Search</h1>
                <div className="searchBar">
                    <input type="search" placeholder="Search" value={searchInput} onChange={this.onChangeSearchInput}/>
                    <img src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png" className="icon" alt="search icon"/>
                </div>
                <ul className="destination-container">
                    {searchResults.map((eachItem)=>(<DestinationItem destinationDetails={eachItem} key={eachItem.id}/>))}
                </ul>
            </div>
        )
    )
}


export default DestinationSearch