import * as constants from '../constants';
import { Item } from '../types/index';

// type ItemId = typeof Item[key: [id]];

export interface AddListItem {
  type: constants.ADD_LIST_ITEM;
  item: Item;
}

export interface RemoveListItem {
  type: constants.REMOVE_LIST_ITEM;
  itemId: number;
}

export type ListItemAction = AddListItem | RemoveListItem;

export function addListItem(item: Item): AddListItem {
  return {
    type: constants.ADD_LIST_ITEM,
    item
  };
}

export function removeListItem(itemId: number): RemoveListItem {
  return {
    type: constants.REMOVE_LIST_ITEM,
    itemId
  };
}