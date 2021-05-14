import { FaSearch } from 'react-icons/fa'

import './styles.scss'

export function Header() {
  return (
    <header>
      <div className="container">
        <h1>Books Search</h1>

        <input type="text" placeholder="Digite um livro" />

        <button>
          <FaSearch />
        </button>
      </div>
    </header>
  )
}
