import axios from 'axios'

const api = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1/',
})

export async function allBooks(inputValue) {
  const { REACT_APP_API_KEY } = process.env

  const { data } = await api.get(
    `/volumes?q=${inputValue}&key=${REACT_APP_API_KEY}`
  )

  return data.items
}
