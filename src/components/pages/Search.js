import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book'

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      result: [],
      query: ""
    }
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then(res => {
      console.log(res);
      this.setState({books: res});
    });
  }

  updateQuery = (query) => {
    this.setState({query: query}, this.searchBook);
  }

  searchBook(){
    if(this.state.query === "" || this.state.query === undefined) {
      return this.setState({ result : [] });
    }
    BooksAPI.search(this.state.query.trim()).then(res => {
      console.log(res);
      if(res.error) {
        return this.setState({ result: [] });
      } else {
        return this.setState({ result: res});
      }
    });
  }

  render() {
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    );
  }
}

export default Search
