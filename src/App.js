import { useState } from 'react'

import { Header } from './components/Header'
import { Library } from './components/Library'
import Modal from 'react-modal/lib/components/Modal'

import { FaHeart } from 'react-icons/fa'

import { allBooks } from './services/api'
import { formattedDate } from './utils/formattedDate'

import parse from 'html-react-parser'

Modal.setAppElement('#root')

export function App() {
  const [searchBookTitle, setSearhBookTitle] = useState('')
  const [books, setBooks] = useState([])

  const [booksFavorites, setBooksFavorites] = useState([])
  const [bookSelect, setBookSelect] = useState([])

  const [isOpenModal, setIsOpenModal] = useState(false)

  function closeModal() {
    setIsOpenModal(false)
  }

  function addFavoriteBook(id) {
    const bookFavoriteSelected = books.filter((book) => book.id === id)

    setBooksFavorites([...booksFavorites, bookFavoriteSelected])
  }

  function showMoreBookInfo(id) {
    const bookSelected = books.filter((book) => book.id === id)

    setBookSelect(bookSelected)
  }

  async function handleSearchBookTitle() {
    if (searchBookTitle === '') return

    const books = await allBooks(searchBookTitle)

    setBooks(books)
  }

  function handleSearchInput(event) {
    setSearhBookTitle(event.target.value)
  }

  return (
    <>
      <Header
        handleSearchInput={handleSearchInput}
        handleSearchBookTitle={handleSearchBookTitle}
        favoritesBooksCounter={booksFavorites.length}
      />

      <Library
        books={books}
        setIsOpenModal={setIsOpenModal}
        showMoreBookInfo={showMoreBookInfo}
        addFavoriteBook={addFavoriteBook}
      />

      <Modal
        isOpen={isOpenModal}
        onRequestClose={closeModal}
        bookSelect={bookSelect}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
        {bookSelect.length >= 1 && (
          <>
            <img
              src={bookSelect[0].volumeInfo?.imageLinks?.thumbnail}
              alt={bookSelect[0].volumeInfo.title}
            />

            <h2>{bookSelect[0].volumeInfo.title}</h2>

            {!bookSelect[0].volumeInfo.authors ? (
              <h3>Autor não informado...</h3>
            ) : (
              <h3>Autor: {bookSelect[0]?.volumeInfo.authors.join(', ')}</h3>
            )}

            {bookSelect[0].volumeInfo.subtitle && (
              <p>{bookSelect[0].volumeInfo.subtitle}</p>
            )}

            {!bookSelect[0].volumeInfo?.description ? (
              <p>{parse(String(bookSelect[0].searchInfo?.textSnippet))}</p>
            ) : (
              <p>{bookSelect[0].volumeInfo?.description}</p>
            )}

            {bookSelect[0].volumeInfo.publishedDate && (
              <p>
                Publicado em:{' '}
                <strong>
                  {formattedDate(bookSelect[0].volumeInfo.publishedDate)}
                </strong>
              </p>
            )}

            <button
              type="button"
              onClick={() => addFavoriteBook(bookSelect[0].id)}
            >
              Favoritar
              <FaHeart color="#ffb237" />
            </button>

            <button className="close" onClick={closeModal}>
              X
            </button>
          </>
        )}
      </Modal>
    </>
  )
}
