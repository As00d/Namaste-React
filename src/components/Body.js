import ResCard from "./ResCard";
import { resList } from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((resData) => {
          return <ResCard resData={resData} key={resData.card.card.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
