# My Reads

## Project Overview

The is a React project is provided by [Udacity](https://www.udacity.com/). The project is about tracking books, Home page has three book shelves:
1. Currently Reading - Those books are in this shelf which you are reading.
2. Want To Read - Those books are in this shelf which you want to read.  
3. Read - Those books are in this shelf which you have read.

There is also a search page to find all another books, If you click on the add sign which is bottom of the home page will take you the search page.

## How to install and and the project?

1. Clone or Download the repository.
2. install all project dependencies with `npm install`
3. start the development server with `npm start`


## Backend Server

Backend Server is provided by [Udacity](https://www.udacity.com/). The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.
