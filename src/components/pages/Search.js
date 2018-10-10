import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      result: [],    // books match query result
      query: ""     // set state of query
    }
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(res => {
      // console.log(res);
      this.setState({books: res});
    });
  }

 // update query method set the sate and call searchBook
  updateQuery = (query) => {
    this.setState({query: query}, this.searchBook);
  }

  /* search through the books API upon search input and find books
      and match the books from the home page */
  searchBook(){
    if(this.state.query === "" || this.state.query === undefined) {
      return this.setState({ result : [] });
    } else {
    BooksAPI.search(this.state.query.trim()).then(res => {
      // console.log(res);
      if(res.error) {
        return this.setState({ result: [] });
      } else {
        res.forEach((b) => {
          let show = this.state.books.filter(book => book.id === b.id);
          if(show[0]) {
            b.shelf = show[0].shelf;
          }
        });
        if(this.state.query === "") {
          return this.setState({ result: [] });
        } else {
          return this.setState({ result: res});
        }
      }
    });
  }
 }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link> {/* return back to home page */} 
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}/>  {/* update query upon input change */}
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {this.state.result.map((book) => (
            <Book updateShelf= {this.updateShelf} book={book} key={book.id} />))} {/*map through book search result*/}
          </ol>
        </div>
      </div>
    );
  }
}

export default Search
