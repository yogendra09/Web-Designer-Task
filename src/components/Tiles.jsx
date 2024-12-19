import { X } from "lucide-react";
import { asyncRemoveCard } from "../store/Actions/cardsActions";
import { useDispatch } from "react-redux";

const Tiles = ({ item, viewType, setcardPopUp }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-wrap items-center cursor-pointer shadow-[0_2px_6px_-1px_rgba(0,0,0,0.3)] rounded-lg w-full p-4">
      <img src={item.thumbnail} className="w-16 h-16 rounded-full" />
      <div
        onClick={() => setcardPopUp(item)}
        className="ml-4 flex-1 cursor-pointer"
      >
        <p className="text-sm text-gray-800 font-semibold">{item.title}</p>
        <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
        <p className="text-xs text-gray-500 mt-0.5">
          {item.warrantyInformation}
        </p>
      </div>
      <button
        onClick={() => dispatch(asyncRemoveCard(item.id))}
        className=" top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
      >
        <X className="w-4 h-4 text-red-500 text-2xl" />
      </button>
    </div>
  );
};

export default Tiles;
