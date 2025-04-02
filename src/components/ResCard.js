import { CDN_URL } from "../utils/constants";
import { Link, NavLink } from "react-router";
const ResCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId, id } =
    resData;

  return (
    <Link to={"/restaurant/" + id}>
      <div className="res-card">
        <img
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt=""
          className="res-img"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRatingString} stars</h4>
        <h4>{costForTwo}</h4>
      </div>
    </Link>
  );
};

export default ResCard;
