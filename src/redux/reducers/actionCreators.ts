import { ProductCard } from "./../models/TProduct";
import { getDataFu } from "../../dal/api";
import { AppDispatch } from "./../store";
import { productCardSlice } from "./productCardSlice";

export const fetchProductCardData = () => async (disaptch: AppDispatch) => {
  try {
    const data = ;
    console.log('dsadasd', data)
  } catch (e) {}
};