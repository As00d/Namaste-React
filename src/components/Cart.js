import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/slices/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const itemList = useSelector((store) => store.cart.items);
  const handleClearCart = () => {
    dispatch(clearCart([]));
  };
  {
    return itemList.length === 0 ? (
      <div className="text-center m-4 p-4 text-xl">
        Uh Oh! Looks like your cart is empty 😭, please add to checkout
      </div>
    ) : (
      <div className="text-center m-4 p-4 flex flex-col justify-center items-center">
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold px-12 py-2">Cart</h1>
          <button
            className="px-12 shadow-xl text-white bg-green-600 rounded-xl border bolder border-gray-300 cursor-pointer py-2"
            onClick={handleClearCart}
          >
            Clear cart
          </button>
        </div>
        {itemList.map((item) => {
          const { name, price, id, defaultPrice, description, imageId } =
            item?.card?.info;
          return (
            <div
              key={id}
              className="flex justify-between my-4 border border-white border-t-gray-300 py-6 items-center w-[60%]"
            >
              <div className="flex flex-col text-left justify-around w-[75%]">
                <h1 className="text-xl font-bold ">{name}</h1>
                <h2>
                  {"₹"}
                  {price / 100 || defaultPrice / 100}
                </h2>
                <p className="text-gray-500">{description}</p>
              </div>
              <div className=" w-[25%]">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${imageId}`}
                  alt="foodItemImage"
                  className="rounded-2xl h-full"
                />
                <button className="px-12 shadow-xl text-green-600 bg-white rounded-xl border bolder border-gray-300 cursor-pointer relative bottom-[45px] py-2">
                  Remove -
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
export default Cart;
