//여기 state는 app state가 아님
//여기 state는 combineReducers까지만
export default function(state=null, action){
  switch(action.type){
  case 'BOOK_SELECTED':
    return action.payload;


  }
  return state;
}
