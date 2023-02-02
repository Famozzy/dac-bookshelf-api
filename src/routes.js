const insertBookHandler = require('./handler/insertBookHandler')
const updateBookByIdHandler = require('./handler/updateBookByIdHandler')
const getDetailBookHandler = require('./handler/getDetailBookHandler')
const getAllBooksHandler = require('./handler/getAllBooksHandler')
const deleteBookByIdHandler = require('./handler/deleteBookByIdHandler')

/**
 * @type {import('@hapi/hapi').ServerRoute[]}
 */
const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: insertBookHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getDetailBookHandler
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: updateBookByIdHandler
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler
  }
]

module.exports = routes
