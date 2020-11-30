export const Change_Search_Field = 'CHANGE_SEARCH_FIELD';

const initialState = {
    searchField : ''
}

export const searchRobots = (state=initialState , action={}) =>{
    switch(action.type){
        case(Change_Search_Field):
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}