import {
    ADD_ITEM,
    EDIT_ITEM,
    SELECT_ITEM,
    DELETE_ITEM
  } from './actions'

import {IGlobalState, IBook } from './model/model'



const globalState = {
  listItems: [
    {id: 1, title: 'title1', author: 'author1', year: 'year1'},
    {id: 2, title: 'title2', author: 'author2', year: 'year2'}
  ],
  selectItem: null
} 

export default function reducer(state: IGlobalState = globalState, action) {

let newState: IGlobalState = { ...state };
let tmplistItems: IBook[];

switch (action.type) {
    case ADD_ITEM:
    newState.listItems = [...newState.listItems, action.payload];
    break;
    case EDIT_ITEM:
    tmplistItems = [...newState.listItems];
    tmplistItems[tmplistItems.indexOf(newState.selectItem)] = action.payload;
    newState.listItems = tmplistItems;
    newState.selectItem = null;
    break;
    case SELECT_ITEM:
    newState.selectItem = action.payload;
    break;

    case DELETE_ITEM:
    newState.listItems = newState.listItems.filter((item) => item.id != action.payload.id);
    newState.selectItem = null
    break;
    default:
    return state;
}
return newState;
}