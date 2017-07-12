import { ListItemAction } from '../actions';
import { StoreState } from '../types/index';
import { ADD_LIST_ITEM, REMOVE_LIST_ITEM} from '../constants/index';

export const listReducer =
  (state: StoreState, action: ListItemAction): StoreState => {
  const items = [...state.items];
  switch (action.type) {
    case ADD_LIST_ITEM:
      items.push(action.item);
      return { ...state, items};

    case REMOVE_LIST_ITEM:
      const index = items.findIndex((item) => item.id === action.itemId);
      items.splice(index, 1);
      return { ...state, items};

    default:
    return state;
  }
};