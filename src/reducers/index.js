import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
//reducer returns application state!

//key is books and value is from BooksReducer
const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
}); //state.books로

export default rootReducer;
