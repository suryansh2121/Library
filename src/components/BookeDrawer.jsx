import React, { useEffect, useState } from 'react';

const BookDrawer = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // Replace this with your actual backend endpoint
        const res = await fetch('/api/books?limit=7');
        const data = await res.json();
        setBooks(data);
      } catch (err) {
        console.error('Error fetching books:', err);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {books.map((book) => (
        <div
          key={book.id}
          className="w-40 bg-white rounded-xl shadow-md p-4 text-center hover:scale-105 transition-transform duration-200"
        >
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-52 object-cover rounded-md mb-3"
          />
          <h3 className="text-md font-semibold mb-2">{book.title}</h3>
          <div className="text-yellow-400 text-lg">
            {Array.from({ length: 5 }, (_, index) => (
              <span key={index}>
                {index < book.rating ? '★' : <span className="text-gray-300">★</span>}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookDrawer;
2