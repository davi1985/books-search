import { FaSearch } from 'react-icons/fa'

import './styles.scss'

export function Header({
  handleSearchInput,
  handleSearchBookTitle,
  favoritesBooksCounter,
}) {
  return (
    <header>
      <div className="container">
        <div>
          <h1>Books Search</h1>
          {favoritesBooksCounter > 0 && (
            <span
              onClick={() =>
                alert(
                  `Tem ${favoritesBooksCounter} livro(s) adicionado(s) com favorito(s)!`
                )
              }
            >
              {favoritesBooksCounter}
            </span>
          )}
        </div>

        <input
          type="text"
          placeholder="Digite um livro"
          onChange={handleSearchInput}
        />

        <button type="button" onClick={handleSearchBookTitle}>
          <FaSearch />
        </button>
      </div>
    </header>
  )
}
