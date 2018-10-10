import React from 'react'
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


/* Resourses
Udacity Lessons and for more help:
* https://reacttraining.com/react-router/web/guides/quick-start
* https://reactjs.org/
* https://www.youtube.com/watch?v=acJHkd6K5kI&=&feature=youtu.be
* https://www.youtube.com/watch?v=bpKI3R0nf7E
*/
