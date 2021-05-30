import { Book } from '../Book'

import { css } from '@emotion/react'
import BarLoader from 'react-spinners/BarLoader'

import './styles.scss'

const override = css`
  position: absolute;
  margin: 0.25rem auto;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
`

export function Library({
  books,
  setIsOpenModal,
  showMoreBookInfo,
  addFavoriteBook,
  isLoading,
}) {
  return (
    <main>
      <div className="container">
        {isLoading && (
          <BarLoader
            css={override}
            size={150}
            color={'#eda430'}
            loading={isLoading}
            speedMultiplier={1.5}
          />
        )}
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
