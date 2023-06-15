import React from 'react';
import styles from './BookList.css';

const books = [
  {
    title: 'Wings of Fire',
    imageUrl: 'https://rukminim1.flixcart.com/image/416/416/kjkbv680-0/book/p/r/m/wings-of-fire-original-imafz3pawzphkecj.jpeg?q=70',
    url: 'https://www.amazon.in/Wings-Fire-Autobiography-Digital-Exclusive-ebook/dp/B07F6C99Q7'
  },
  {
    title: 'To Kill a Mockingbird',
    imageUrl: 'https://m.media-amazon.com/images/I/51N5qVjuKAL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
    url: 'https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0446310786'
  },
  {
    title: 'You Can Do it',
    imageUrl: 'https://m.media-amazon.com/images/I/514GhWlDuUL.jpg',
    url: 'https://www.amazon.in/Motivational-Books-Free-Stories-Women-ebook/dp/B01678SX6Q?asin=B01678SX6Q&revisionId=e75d0f73&format=1&depth=1'
  },
  {
    title: 'Pride and Prejudice',
    imageUrl: 'https://m.media-amazon.com/images/I/51tJ9Ohxu7L._SX321_BO1,204,203,200_.jpg',
    url: 'https://www.amazon.in/Pride-Prejudice-Jane-Austen/dp/8172344503'
  },
  {
    title: 'You Can',
    imageUrl: 'https://m.media-amazon.com/images/I/4180omRGrSL._SX198_BO1,204,203,200_QL40_FMwebp_.jpg',
    url: 'https://www.amazon.in/You-Can-George-Matthew-Adams/dp/9389931843/ref=sr_1_2_sspa?crid=SEFX2POS08W9&keywords=motivational+books+in+english&qid=1686721577&s=books&sprefix=motivat%2Cstripbooks%2C1570&sr=1-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1',
  }
];




function BookList() {
  function handleClick(url) {
    window.open(url, '_blank');
  }

  const bookElements = []; 

  for (let i = 0; i < books.length; i++) {
    const book = books[i];

    const bookElement = (
      <div key={i} className="book">
        {book.imageUrl ? (
          <img src={book.imageUrl} alt={book.title}  />
        ) : (
          <p>Image not available</p>
        )}
        <a href={book.url} target='_blank' >
          {book.title}
        </a>
      </div>
    );

    bookElements.push(bookElement);
  }

  return (
    <div className= "bookListContainer">
      <h1>Motivational Book List</h1>
      {bookElements}
    </div>
  );
}

export default BookList;






























  