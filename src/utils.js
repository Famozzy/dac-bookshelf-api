const crypto = require('crypto')

const createBookObject = (payload) => {
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = payload

  const id = crypto.randomUUID()
  const insertedAt = new Date().toISOString()
  const updatedAt = insertedAt
  const finished = pageCount === readPage

  return {
    id,
    name,
    year,
    author,
    summary,
    publisher,
    pageCount,
    readPage,
    finished,
    reading,
    insertedAt,
    updatedAt
  }
}

module.exports = { createBookObject }
