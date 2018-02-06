let counter = (function() {
	var count: number = 2;
	return  function () {
		return ++count;
	}
})();

export const SELECT_ITEM : string = 'SELECT_ITEM';
export const DELETE_ITEM : string = 'DELETE_ITEM';
export const ADD_ITEM : string = 'ADD_ITEM';
export const EDIT_ITEM : string = 'EDIT_ITEM';

export function addItemBook (item) {
    return function (dispatch) {
        item.id = counter();
        const action = {
            type: ADD_ITEM,
            payload: item
        };
        dispatch(action);
    }
}

export function editItemBook (item) {
    return function (dispatch) {
        const action = {
            type: EDIT_ITEM,
            payload: item
        };
        dispatch(action);
    }
}

export function selectItemBook (item) {
    return function (dispatch) {
        const action = {
            type: SELECT_ITEM,
            payload: item
        };
        dispatch(action);
    }
}

export function deleteItemBook (item) {
    return function (dispatch) {
        const action = {
            type: DELETE_ITEM,
            payload: item
        };
        dispatch(action);
    }
}