import { FaHeart } from 'react-icons/fa'

import './styles.scss'

export function Book({
  book,
  setIsOpenModal,
  showMoreBookInfo,
  addFavoriteBook,
}) {
  return (
    <div className="book">
      <img
        src={book.volumeInfo.imageLinks?.thumbnail}
        alt={book.volumeInfo.title}
      />

      {book.volumeInfo.title.length > 25 ? (
        <p className="title">{`${book.volumeInfo.title.substring(
          0,
          25
        )}...`}</p>
      ) : (
        <p className="title">{book.volumeInfo.title}</p>
      )}

      <div className="user-joice">
        <button
          type="button"
          onClick={() => {
            setIsOpenModal(true)
            showMoreBookInfo(book.id)
          }}
        >
          Ler mais
        </button>

        <button
          type="button"
          onClick={() => {
            addFavoriteBook(book.id)
          }}
        >
          Favorito
          <FaHeart color="#ffb237" />
        </button>
      </div>
    </div>
  )
}
