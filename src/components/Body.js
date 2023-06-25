import RestaurantCard from "/src/components/Restaurantcard.js"
import {useState,useEffect} from "react";
import Shimmer from "../components/Shimmer.js"
import {Link} from "react-router-dom";
function filterData(searchtxt,restaurants){
const filter=restaurants.filter((restaurant)=>restaurant.data.name.includes(searchtxt))
     return filter;
}

const Body = () => {
  const [allRestaurants,setAllRestaurants]=useState([]);
  const [filteredRestaurants,setFilteredRestaurants]=useState([]);
  const [searchTxt,setSearchTxt]=useState("");
  useEffect(()=>{
    getRestaurant();
  },[searchTxt])
 async function getRestaurant(){
 const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.4358011&lng=81.846311&page_type=DESKTOP_WEB_LISTING")
 const json= await data.json();
 setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
 setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }

  if(!allRestaurants)
  return null;
  return allRestaurants.length===0?(<Shimmer/>):(
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="search"
          value={searchTxt}
          onChange={(e)=>{
         setSearchTxt((searchTxt)=>searchTxt=e.target.value)
          }}   />
        
        <button className="search-btn" onClick={
          ()=>{
            const data=filterData(searchTxt,allRestaurants)
      setFilteredRestaurants(data);
          }
        }>search</button>     
     </div>
     {filteredRestaurants.length===0?(<h1>No match found</h1>):(
      <div className="restaurant-list">
        {
          filteredRestaurants.map((restaurant) => {
          return (
            <Link to={`/restaurant/${restaurant.data.id}`} key={restaurant.data.id}>
            
            <RestaurantCard {...restaurant.data}  />
          </Link>
          );
          })}
          
</div> 
     )}
    </>
  );
};

export default Body;
