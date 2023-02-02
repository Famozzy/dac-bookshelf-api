const bookshelf = require('../bookshelf')

const handler = (request, h) => {
  const { bookId } = request.params

  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload

  if (!name) {
    return h
      .response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku'
      })
      .code(400)
  }

  if (pageCount < readPage) {
    return h
      .response({
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
      })
      .code(400)
  }

  const bookIndex = bookshelf.findIndex((b) => b.id === bookId)
  if (bookIndex < 0) {
    return h
      .response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Id tidak ditemukan'
      })
      .code(404)
  }

  const finished = pageCount === readPage
  const updatedAt = new Date().toISOString()

  const updatedBook = {
    ...bookshelf[bookIndex],
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    reading,
    finished,
    updatedAt
  }

  bookshelf[bookIndex] = updatedBook

  return {
    status: 'success',
    message: 'Buku berhasil diperbarui'
  }
}

module.exports = handler
