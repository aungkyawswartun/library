import React, { useContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../contexts/ThemeContext";
import useTheme from "../hooks/useTheme";

export default function Create() {
  let [title, setTitle] = useState("");
  let [description, setDescription] = useState("");
  let [newCategory, setNewCategory] = useState("");
  let [categories, setCategories] = useState([]);

  let navigate = useNavigate();

  let addCategory = (e) => {
    if(newCategory && categories.includes(newCategory)) {
      setNewCategory('')
      return;
    }
    setCategories(prev => [newCategory, ...prev])
    setNewCategory('');
  }

let { setPostData , data : book } = useFetch('http://localhost:3000/books', "POST");

  let addBook = (e) => {
    e.preventDefault();
    let data = {
      title,
      description,
      categories
    }
    setPostData(data)
  }
  useEffect(() => {
    if(book) {
      navigate('/')
    }
  }, [book])

  let {isDark } = useTheme();
  return (
    <form className="w-full max-w-lg mx-auto mt-3 h-screen" onSubmit={addBook}>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${isDark ? 'text-white' : ''}`}
            htmlFor="title"
          >
            Book title
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="title"
            type="text"
            placeholder="Book title"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${isDark ? 'text-white' : ''}`}
            htmlFor="description"
          >
            Book description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="description"
            type="text"
            placeholder="Book description"
          />
          <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p>
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className={`block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ${isDark ? 'text-white' : ''}`}
            htmlFor="category"
          >
            Book category
          </label>
          <div className="flex items-center space-x-2">
            <input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="category"
              type="text"
              placeholder="Book category"
            />
            <button type="button" onClick={addCategory} className="bg-primary p-1 text-white rounded-lg mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 p-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-wrap mx-2">
          {categories.map((c) => (
            <span
              className="bg-primary text-white rounded-full py-1 px-2 text-sm mx-1 my-1"
              key={c}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
      <button className="bg-primary rounded-2xl px-3 py-2 text-white flex items-center gap-1 w-full justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <span className="hidden md:block">Create book</span>
      </button>
    </form>
  );
}
