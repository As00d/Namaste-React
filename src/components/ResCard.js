import { CDN_URL } from "../utils/constants";
const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId } =
    resData?.card?.card?.info;

  return (
    <div className="res-card">
      <img src={`${CDN_URL}${cloudinaryImageId}`} alt="" className="res-img" />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRatingString} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default ResCard;
