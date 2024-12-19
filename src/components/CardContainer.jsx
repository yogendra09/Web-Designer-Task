import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import { useEffect, useState } from "react";
import { asyncGetCards } from "../store/Actions/cardsActions";
import Tiles from "./Tiles";
import { Pagination } from "@mui/material";
import Loader from "./Loader";
import CardPoPUp from "./CardPoPUp";

const CardContainer = ({ viewType }) => {
  const [reloadList, setReloadList] = useState(false);
  const [cardPopUp, setcardPopUp] = useState(null);
  const { cards } = useSelector((state) => state.cardsReducer);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate paginated items
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCards = cards.slice(startIndex, startIndex + itemsPerPage);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    dispatch(asyncGetCards());
    setTimeout(() => {
      setReloadList(true);
    }, 5000);
  }, [dispatch]);

  return (
    <div className="w-full max-h-screen overflow-y-auto py-6">
      {cardPopUp && <CardPoPUp setcardPopUp={setcardPopUp} />}
      <div
        className={`grid ${
          viewType === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
        } gap-6 mb-8 p-12`}
      >
        {reloadList && currentCards.length > 0 ? (
          currentCards.map((item) =>
            viewType === "grid" ? (
              <Card key={item.id} item={item} setcardPopUp={setcardPopUp} />
            ) : (
              <Tiles key={item.id} item={item} />
            )
          )
        ) : (
          <div className="h-[80vh] w-[70vw] flex justify-center items-center">
            {/* <p className="text-center text-gray-500">No cards to show</p> */}
            <Loader />
          </div>
        )}
      </div>

      <div className="flex justify-center gap-2">
        {cards.length > 0 && (
          <Pagination
            count={Math.ceil(cards.length / itemsPerPage)} // Total number of pages
            page={currentPage}
            onChange={handleChange}
            color="primary"
            size="large"
          />
        )}
      </div>
    </div>
  );
};

export default CardContainer;
