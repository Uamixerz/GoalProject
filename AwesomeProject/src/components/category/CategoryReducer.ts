import { CategoryActions, CategoryActionType, ICategoryItem, ICategoryReducer } from "./types";
import { act } from "react-test-renderer";
import { it } from "@jest/globals";

const init:ICategoryReducer = {
  list: []
};

export const CategoryReducer = (state=init, action: CategoryActions): ICategoryReducer => {
  switch(action.type) {
    case CategoryActionType.SET_CATEGORY_LIST: {
      const list = action.payload as Array<ICategoryItem>;
      return {
        ...state,
        list
      }
    }
    case CategoryActionType.ADD_CATEGORY: {
      const item = action.payload as ICategoryItem;
      return {
        ...state,
        list: [...state.list, item]
      };
    }
    case CategoryActionType.EDIT_CATEGORY: {
      const item = action.payload as ICategoryItem;
      return {
        ...state,
        list: state.list.map((existingItem) => {
          if (existingItem.id === item.id) {
            return item;
          }
          return existingItem;
        })
      };
    }
    case CategoryActionType.DELETE_CATEGORY: {
      const id = action.payload;
      return {
        ...state,
        list: [...state.list.filter(x=>x.id!=id)]
      };
    }
  }
  return state;
}
