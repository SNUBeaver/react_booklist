import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';


class BookList extends Component{
  renderList(){
    return this.props.books.map((book)=>{
      return(
        <li
          key={book.title}
          onClick={()=>this.props.selectBook(book)}
          className="list-group-item">
            {book.title}
        </li>
      )
    })
  }
  render(){
    return(
      <div>
        BOOKLIST:
        <ul className="list-group col-sm-4">
          {this.renderList()}
        </ul>
      </div>
    )
  }
};


function mapStateToProps(state){
  //whatever return will show as props
  //if state change, it will re render
  return{
    books: state.books //이걸 this.props.books로 읽음
  };
}
// anything returned from func, will be this.props.(selectBook)
function mapDispatchToProps(dispatch){
  //whenever select book, send it to every reducers
  return bindActionCreators({selectBook: selectBook}, dispatch)
}


// make it able as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
