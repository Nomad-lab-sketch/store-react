import { type } from "@testing-library/user-event/dist/type";
import { ThunkAction } from "redux-thunk";
import { getProductCard } from "../dal/api";
import { AppStateType, InferActionType } from "./store";

type product = {
    price: number | null
    count: number | null
    id: number
    name: string
}


let defaultState = {
  productCard: [] as Array<product>,
};

const productCardReducer = (state = defaultState, action: ActionType) => {
  switch (action.type) {
    case 'store/productCardReducer/setProductCardAC':
      return {
        ...state,
        ...action.payload,
      };
      default: return state
  }
};

const actions = {
    setProductCardAC: (data: any) => ({type: 'store/productCardReducer/setProductCardAC', payload: data} as const)
}
type ActionType = InferActionType<typeof actions>;
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>;

export const setProductCardThunk = (): ThunkType => async (dispatch) => {
    let data = await getProductCard()
    console.log(data)
    dispatch(actions.setProductCardAC(1))
}

export default productCardReducer;
