const bookshelf = require('../bookshelf')

const handler = (request) => {
  const { name, reading, finished } = request.query

  const books = bookshelf
    .reduce((acc, book, _, arr) => {
      if (!name && !reading && !finished) return bookshelf

      if (name) {
        const isBookNameMatch = book.name.toLowerCase().includes(name.toLowerCase())
        if (isBookNameMatch) acc.push(book)
      }

      if (reading) {
        const isReadingMatch = book.reading === !!Number(reading)
        if (isReadingMatch) acc.push(book)
      }

      if (finished) {
        const isFinishedMatch = book.finished === !!Number(finished)
        if (isFinishedMatch) acc.push(book)
      }
      return acc
    }, [])
    .map((book) => ({
      id: book.id,
      name: book.name,
      publisher: book.publisher
    }))

  return { status: 'success', data: { books } }
}

module.exports = handler
