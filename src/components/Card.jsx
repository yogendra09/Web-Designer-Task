import { X } from "lucide-react";
import { asyncRemoveCard } from "../store/Actions/cardsActions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import placeholderImage from "../../public/placeholder-image.webp"
const Card = ({ item, setcardPopUp }) => {
  const dispatch = useDispatch();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div>
      <div
        key={item.id}
        className="bg-white rounded-lg shadow-sm overflow-hidden relative"
      >
        <button
          onClick={() => dispatch(asyncRemoveCard(item.id))}
          className="absolute top-0 right-0 p-1 bg-white rounded-full shadow-md hover:bg-gray-100"
        >
          <X className="w-4 h-4 text-red-500" />
        </button>
        <div onClick={() => setcardPopUp(item)} className="p-4 cursor-pointer">
          <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{item.description}</p>
          <time className="text-gray-400 text-xs">
            {item.warrantyInformation}
          </time>
        </div>
        <div className="">
          <img
            src={imageLoaded ? item.thumbnail : placeholderImage}
            alt={item.title}
            className="w-full h-40 object-cover"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(false)} // If thumbnail fails to load
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
