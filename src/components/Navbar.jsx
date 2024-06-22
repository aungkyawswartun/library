import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="border border-b-1">
        <ul className="flex justify-between items-center p-3 max-w-6xl mx-auto">
          <li className="flex items-center gap-3">
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
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              placeholder="search book..."
              className="outline-none"
            />
          </li>
          <Link className="flex items-center gap-3 md:-ml-32 cursor-pointer">
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
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z"
              />
            </svg>

            <span className="text-2xl font-bold text-primary hidden md:block">
              Book Store
            </span>
          </Link>
          <li className="flex items-center gap-3">
            <Link
              to="/create"
              className="bg-primary rounded-2xl px-3 py-2 text-white flex items-center gap-1"
            >
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
            </Link>
            <div className="w-11">
              <img
                src="https://avatars.githubusercontent.com/u/143373151?v=4"
                alt="my photo"
                className="w-full rounded-full"
              />
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
