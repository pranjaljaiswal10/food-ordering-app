import {useParams} from "react-router-dom";
import {useState,useEffect} from "react";
import Shimmer from "../components/Shimmer.js"
const RestaurantMenu=()=>{
  const {resId}=useParams();
  const [restaurant,setRestaurant]=useState(null);
  
  
  useEffect(()=>{
    
  async function getRestaurantInfo(){
    const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.4358011&lng=81.846311&restaurantId="+resId);
    const json=await data.json();
    setRestaurant(json.data)
    }

    getRestaurantInfo();
  },[resId])
  if(restaurant===null) return <Shimmer/>

const {name,cuisines,avgRatingString,costForTwoMessage,areaName}=restaurant.cards[0].card.card.info;
const {itemCards}=restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
 


 return (
    <>
    <div className="Restaurant-detail">
    <div>
    <h2>{name}</h2>
    <h2>{avgRatingString}</h2>
    <h3>{cuisines.join(", ")}</h3>
    <h3>{costForTwoMessage}</h3>
    <h3>{areaName}</h3>
    </div>
    <ul>
    {itemCards.map((item)=>(
     <li key={item.card.info.id}>
    {item.card.info.name}
 </li>))}
    </ul>
    </div>
    </>
  )
}
export default RestaurantMenu;