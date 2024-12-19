import { X } from "lucide-react";
import { asyncRemoveCard } from "../store/Actions/cardsActions";
import { useDispatch } from "react-redux";

const Card = ({ item,setcardPopUp }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div
        key={item.id}
        className="bg-white rounded-lg shadow-sm overflow-hidden relative"
      >
        <button onClick={() => dispatch(asyncRemoveCard(item.id)) } className=" absolute top-0 right-0 p-1 bg-white rounded-full shadow-md hover:bg-gray-100">
            <X className="w-4 h-4 text-red-500" />
          </button>
        <div onClick={()=>setcardPopUp(item)} className="p-4 cursor-pointer">
          <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{item.description}</p>
          <time className="text-gray-400 text-xs">{item.warrantyInformation}</time>
        </div>
        <div className="">
          <img src={item.thumbnail} alt="" className="w-full h-40 object-cover" />
          
        </div>
        
      </div>
    </div>
  );
};

export default Card;
