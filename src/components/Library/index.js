import { Book } from '../Book'

import './styles.scss'

export function Library({
  books,
  setIsOpenModal,
  showMoreBookInfo,
  addFavoriteBook,
}) {
  return (
    <main>
      <div className="container">
        {books.map((book) => (
          <Book
            book={book}
            key={book.id}
            setIsOpenModal={setIsOpenModal}
            showMoreBookInfo={showMoreBookInfo}
            addFavoriteBook={addFavoriteBook}
          />
        ))}
      </div>
    </main>
  )
}
