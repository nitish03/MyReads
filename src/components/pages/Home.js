import React from 'react'
import * as BooksAPI from '../../BooksAPI'
import { Link } from 'react-router-dom'
import BookShelf from '../BookShelf'

class Home extends React.Component {
  constructor(props){
    super(props);
    // set state for books of array
    this.state = {
      books: []
    }
  }

  // get data of books from BooksAPI and set the state when component is mounted
  componentDidMount() {
    BooksAPI.getAll()
    .then(res => {
      // console.log(res);
      this.setState({books: res});
    });
  }

 // move selected book from books shelf using update method from BooksAPI
  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(res => {
      book.shelf = shelf;
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  }

  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
        <div>
          <BookShelf updateShelf={this.updateShelf} title="Currently Reading" books={this.state.books.filter(b => b.shelf === "currentlyReading")}/>
          <BookShelf updateShelf={this.updateShelf} title="Want To Read" books={this.state.books.filter(b => b.shelf === "wantToRead")}/>
          <BookShelf updateShelf={this.updateShelf} title="Read" books={this.state.books.filter(b => b.shelf === "read")}/>
        </div>
        </div>
        <div className="open-search">
          <Link to="/Search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default Home
