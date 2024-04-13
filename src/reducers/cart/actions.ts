import { NavigateFunction } from "react-router-dom"
import { OrderInfo } from "../../pages/Cart"
import { Item } from "./reducer"

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

export type Actions =
  | {
      type: ActionTypes.ADD_ITEM
      payload: {
        item: Item
      }
    }
  | {
      type:
        | ActionTypes.DECREMENT_ITEM_QUANTITY
        | ActionTypes.INCREMENT_ITEM_QUANTITY
        | ActionTypes.REMOVE_ITEM
      payload: {
        itemId: Item['id']
      }
    }
  | {
      type: ActionTypes.CHECKOUT_CART
      payload: {
        order: OrderInfo
        callback: NavigateFunction
      }
    }
    
export function addItemAction(item: Item): Actions {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  } 
}

export function removeItemAction(itemId: Item['id']): Actions {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  } 
}

export function incrementItemQuantityAction(itemId: Item['id']): Actions {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } 
}

export function decrementItemQuantityAction(itemId: Item['id']): Actions {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } 
}

export function checkoutCartAction(
  order: OrderInfo,
  callback: NavigateFunction,
): Actions {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  } 
}
