const bookshelf = require('../bookshelf')

const handler = (request, h) => {
  const { bookId } = request.params

  const book = bookshelf.find((b) => b.id === bookId)
  if (!book) return h.response({ status: 'fail', message: 'Buku tidak ditemukan' }).code(404)

  return { status: 'success', data: { book } }
}

module.exports = handler
