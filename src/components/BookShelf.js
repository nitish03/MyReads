import React, { Component } from 'react'
import Book from './Book'

class BookShelf extends Component {
  /*componentDidMount() {
    console.log(this);
  }*/

  render() {
    const { title, books, updateShelf } = this.props;
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ title }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {/* update books in their shelves */}
           {books.map((book) => <Book updateShelf= { updateShelf } book={ book } key={book.id}/>)}
          </ol>
        </div>
      </div>

    );
  }
}

export default BookShelf
