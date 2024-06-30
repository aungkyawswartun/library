import React, { useContext } from "react";
import book from "../assets/book.png";
import useFetch from "../hooks/useFetch";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import useTheme from "../hooks/useTheme";

export default function BookList() {

  let location = useLocation();
  let params = new URLSearchParams(location.search)
  let search = params.get('search')

  let { data: books, loading, error } = useFetch(`http://localhost:3000/books${search ? `?q=${search}` : ''}`);

  if (error) {
    return <p>{error}</p>;
  }

  let {isDark} = useTheme();
  return (
    <div>
      {loading && <p>loading..</p>}
      {!!books && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-2">
          {books.map((b) => (
            <Link to={`/books/${b.id}`} key={b.id}>
              <div className={`border-2 p-2 min-h-[450px] ${isDark ? 'bg-dcard border-primary text-white' : ''}`}>
                <img src={book} alt="haerin" />
                <div className="text-center mt-2 space-y-2">
                  <h1>{b.title}</h1>
                  <p>{b.description}</p>
                  <div className="flex flex-wrap">
                    {b.categories.map((genre) => (
                      <span
                        className="mx-1 my-1 bg-blue-500 text-white px-2 py-1 rounded-full text-xs "
                        key={genre}
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
      {books && !books.length && (
        <p className="text-center text-2xl text-gray-500">
          No Search Result Found
        </p>
      )}
    </div>
  );
}