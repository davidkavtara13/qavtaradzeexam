"use client"; // Mark this component as a client component

import { books } from "@/data/books";
import Link from "next/link";

const BookList = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Book Library</h1>

      {/* Go Back Button */}

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <li
            key={book.id}
            className="border rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Link href={`/books/${book.id}`} className="block p-4">
              <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
              <p className="text-gray-700">by {book.author}</p>
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => window.history.back()} // Go back to the previous page
        className="mb-4 px-4 py-2 border border-white bg-gray text-white rounded hover:bg-gray-600 transition"
      >
        Go Back
      </button>
    </div>
  );
};

export default BookList;
