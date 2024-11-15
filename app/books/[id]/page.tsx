"use client";

import { useParams } from "next/navigation";
import { books } from "@/data/books";

const BookDetail = () => {
  const params = useParams();
  const book = books.find((b) => b.id === params.id);

  if (!book) {
    return <p className="text-center text-red-500 mt-10">Book not found.</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
        <p className="text-lg text-gray-700 mb-2">by {book.author}</p>
        <p className="text-gray-500 mb-4">Published: {book.year}</p>
        <p className="text-gray-800">{book.summary}</p>

        <button
          onClick={() => window.history.back()}
          className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-900 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default BookDetail;
