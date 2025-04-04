import useResData from "../utils/hook/useResData";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const Restaurant = () => {
  const { id } = useParams();
  const resInfo = useResData(id);
  {
    return resInfo === null ? (
      <Shimmer />
    ) : (
      <>
        <div className="menu">
          <div>
            <div>
              <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
            </div>
            <div className="info-box">
              <p style={{ fontWeight: "bold" }}>
                ⭐️ {resInfo?.cards[2]?.card?.card?.info?.avgRating} (
                {resInfo?.cards[2]?.card?.card?.info?.totalRatingsString}){" "}
                {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
              </p>
              <p>{resInfo?.cards[2]?.card?.card?.info?.areaName}</p>
              <h2>Menu↓</h2>
            </div>
          </div>

          <div className="res-menu">
            {resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
              (card, index) => {
                return (
                  <div className="res-menu-item" key={index}>
                    <div>
                      <h3>{card.card.info.name}</h3>
                      <h3>{Number(card?.card?.info?.price) / 100}₹</h3>
                      <h3>
                        {card.card.info.ratings.aggregatedRating.rating}⭐️
                      </h3>
                      <p>{card.card.info.description}</p>
                    </div>
                    <div>
                      <img
                        height="100%"
                        width={150}
                        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${card.card.info.imageId}`}
                        alt=""
                      />
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </>
    );
  }
};

export default Restaurant;
