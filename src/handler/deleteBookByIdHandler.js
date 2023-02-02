const bookshelf = require('../bookshelf')

const handler = async (request, h) => {
  const { bookId } = request.params

  const bookIndex = bookshelf.findIndex((b) => b.id === bookId)

  if (bookIndex < 0) {
    return h
      .response({
        status: 'fail',
        message: 'Buku gagal dihapus. Id tidak ditemukan'
      })
      .code(404)
  }

  bookshelf.splice(bookIndex, 1)

  return { status: 'success', message: 'Buku berhasil dihapus' }
}

module.exports = handler
