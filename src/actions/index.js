

export function selectBook(book){
//action creator needs to return actions
// object with type
  return{
    type: 'BOOK_SELECTED',
    payload: book
  };
}
