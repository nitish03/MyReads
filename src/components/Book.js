import React, { Component } from 'react'

class Book extends Component {
  /*componentDidMount() {
    console.log(this);
  }*/

  render() {
    const { title, authors, book, shelf, updateShelf } = this.props;
    return(
      <div>
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover"
              style={{ width: 128, height: 193,
                // display books thumbnail
              backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail :
                'https://3.bp.blogspot.com/-s3yBaPBn8Hc/Uh4-wAZOQLI/AAAAAAAAJT8/GY9d_VJFm3o/s200/play-books-no-cover.jpg'})`
              }}>
            </div>
            <div className="book-shelf-changer">
              <select value={book.shelf || 'none'} onChange={(event) => {(updateShelf(book, event.target.value))}}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{ book.title }</div>
          <div className="book-authors">{ book.authors }</div>
        </div>
      </li>
    </div>
    );
  }
}

export default Book
