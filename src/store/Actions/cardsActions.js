import axios from "../../utils/axios";
import { toast } from "react-toastify";
import { removeCards, setCards } from "../Reducers/cardsReducer";

export const asyncGetCards = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/products?limit=100`);
    dispatch(setCards(data.products));
    console.log(data.products);
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error.response.data.message || error);
  }
};

export const asyncRemoveCard = (id) => async (dispatch) => {
  try {
    console.log(id);
    
    dispatch(removeCards(id));
    toast.success("Card deleted successfully");
  } catch (error) {
    toast.error(error.response.data.message);
    console.log(error.response.data.message || error);
  }
};