import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Search from './components/pages/Search'

class BooksApp extends React.Component {


  render() {
   return(
     <div>
     <Route exact path="/" component= { Home } />
     <Route exact path="/Search" component={ Search } />
     </div>
   );
  }
}

export default BooksApp
