import { CDN_URL } from "../utils/constants";
import { Link, NavLink } from "react-router";
const ResCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRatingString, costForTwo, cloudinaryImageId, id } =
    resData;

  return (
    <Link to={"/restaurant/" + id}>
      <div className="res-card m-4  w-[250px] shadow-2xl h-[400px] rounded-xl p-4 bg-gray-100 hover:bg-gray-200">
        <img
          src={`${CDN_URL}${cloudinaryImageId}`}
          alt=""
          className="h-48 w-full rounded-t-xl"
        />
        <h3 className="text-lg font-bold py-2">{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{avgRatingString} stars</h4>
        <h4>{costForTwo}</h4>
      </div>
    </Link>
  );
};

export const WithPromotedLabel = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-2 rounded-lg">
          Promoted
        </label>
        <ResCard resData={props?.resData?.card?.card?.info} />
      </div>
    );
  };
};
// High order component
export default ResCard;
