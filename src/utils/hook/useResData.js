import { useEffect, useState } from "react";
const useResData = (id) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.97530&lng=77.59100&restaurantId=" +
        id +
        "&catalog_qa=undefined&query=Pizza&submitAction=ENTER"
    );
    const json = await resp.json();

    setResInfo(json.data);
  };
  return resInfo;
};
export default useResData;
