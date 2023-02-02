const { createBookObject } = require('../utils')
const bookshelf = require('../bookshelf')

const handler = (request, h) => {
  const { name, pageCount, readPage } = request.payload

  const isPayloadEmpty = !Object.keys(request.payload).length
  if (isPayloadEmpty) {
    return h
      .response({
        status: 'error',
        message: 'Buku gagal ditambahkan'
      })
      .code(500)
  }

  if (!name) {
    return h
      .response({
        status: 'fail',
        message: 'Gagal menambahkan buku. Mohon isi nama buku'
      })
      .code(400)
  }

  if (pageCount < readPage) {
    return h
      .response({
        status: 'fail',
        message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
      })
      .code(400)
  }

  const newBook = createBookObject(request.payload)
  bookshelf.push(newBook)

  return h
    .response({
      status: 'success',
      message: 'Buku berhasil ditambahkan',
      data: { bookId: newBook.id }
    })
    .code(201)
}

module.exports = handler
