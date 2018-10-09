import React from 'react'
import * as BooksAPI from '../../BooksAPI'
import { Link } from 'react-router-dom'
import BookShelf from '../BookShelf'

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: []

    }
  }
  componentDidMount() {
    BooksAPI.getAll()
    .then(res => {
      console.log(res);
      this.setState({books: res});
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
          <BookShelf title="Currently Reading" books={this.state.books.filter(b => b.shelf === "currentlyReading")}/>
          <BookShelf title="Want To Read" books={this.state.books.filter(b => b.shelf === "wantToRead")}/>
          <BookShelf title="Read" books={this.state.books.filter(b => b.shelf === "read")}/>
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
