import {IMG_CDN_URL} from "/src/components/constant.js";

const RestaurantCard = ({cloudinaryImageId,name,cuisines,avgRating,maxDeliveryTime,costForTwoString}) =>{
  return (
    <div className="card">
    <img src={`${IMG_CDN_URL}${cloudinaryImageId}`} alt=""/>
    <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{avgRating}</h3>
      <h4>{maxDeliveryTime} min</h4>
      <h5>{costForTwoString}</h5>
      </div>
);};

export default RestaurantCard;