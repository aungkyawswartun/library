import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import bookImg from '../assets/book.jpg';
import useTheme from '../hooks/useTheme';

export default function BookDetail() {

  let {id} = useParams();
  let { data: book, error, loading } = useFetch(`http://localhost:3000/books/${id}`);

  let {isDark } = useTheme();

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>loading..</p>}
      {book && (
        <div className={`grid grid-cols-2 h-screen ${isDark ? 'text-white' : ''}`}>
          <div>
            <img src={book.photo} alt={book.title} className="w-[80%]" />
          </div>
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">{book.title}</h1>
            <div className="space-x-2">
              {book.categories.map((category) => (
                <span
                  className="bg-blue-500 text-white rounded-full py-1 px-2 text-sm"
                  key={category}
                >
                  {category}
                </span>
              ))}
            </div>
            <p>{book.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
