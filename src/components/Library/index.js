import exampleImg from '../../cover.jpg'

import './styles.scss'

export function Library() {
  return (
    <main>
      <div className="container">
        <div className="book">
          <img src={exampleImg} alt="" />

          <div className="details">
            <h2>
              Eloquent Javascript
              <span>by Marijn Haverbeke</span>
            </h2>

            <p>
              This is a book about JavaScript, programming, and the wonders of
              the digital. You can read it online here, or buy your own
              paperback copy. This is a book about JavaScript, programming, and
              the wonders of the digital. You can read it online here, or buy
              your own paperback copy.
            </p>

            <span>
              Publicado em <strong>21/05/2020</strong>
            </span>
          </div>
        </div>

        <div className="book">
          <img src={exampleImg} alt="" />

          <div className="details">
            <h2>
              Eloquent Javascript
              <span>by Marijn Haverbeke</span>
            </h2>

            <p>
              This is a book about JavaScript, programming, and the wonders of
              the digital. You can read it online here, or buy your own
              paperback copy. This is a book about JavaScript, programming, and
              the wonders of the digital. You can read it online here, or buy
              your own paperback copy.
            </p>

            <span>
              Publicado em <strong>21/05/2020</strong>
            </span>
          </div>
        </div>

        <div className="book">
          <img src={exampleImg} alt="" />

          <div className="details">
            <h2>
              Eloquent Javascript
              <span>by Marijn Haverbeke</span>
            </h2>

            <p>
              This is a book about JavaScript, programming, and the wonders of
              the digital. You can read it online here, or buy your own
              paperback copy. This is a book about JavaScript, programming, and
              the wonders of the digital. You can read it online here, or buy
              your own paperback copy.
            </p>

            <span>
              Publicado em <strong>21/05/2020</strong>
            </span>
          </div>
        </div>

        <div className="book">
          <img src={exampleImg} alt="" />

          <div className="details">
            <h2>
              Eloquent Javascript
              <span>by Marijn Haverbeke</span>
            </h2>

            <p>
              This is a book about JavaScript, programming, and the wonders of
              the digital. You can read it online here, or buy your own
              paperback copy. This is a book about JavaScript, programming, and
              the wonders of the digital. You can read it online here, or buy
              your own paperback copy.
            </p>

            <span>
              Publicado em <strong>21/05/2020</strong>
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
