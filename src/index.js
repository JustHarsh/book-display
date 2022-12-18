import React from "react";
import ReactDOM from "react-dom/client";

import './index.css'

// setting up vars

const books = [{
    id: 1,
    img: "https://m.media-amazon.com/images/I/616BYPbOCyL._AC_UL640_QL65_.jpg",
    title: "The Millionaire Fastlane: Crack the Code to Wealth and Live Rich for a Lifetime!",
    author: "MJ DeMarco",
  },

  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/81NCqyoMM7L._AC_UL640_FMwebp_QL65_.jpg",
    title: "The Millionaire Next Door (Millionaire Mindset)",
    author: "William D. Danko",
  },  
]


function Booklist() {
  return (
  <section className="booklist">
    {books.map((book) => { // iterating through books and displaying each element 'book'

      // ... -> spread operator, key is necessary so that React knows which element(s) is/are removed from the list. Hence, it's necessary to assign a key to each list property.

      return ( 
        <Book key={book.id} {...book}></Book> 
      );   
    })}
  </section>
  );
}

const Book = ({img, title, author}) => { // {img, title, author} = props
  // props will be displayed
  return (
  <article className="book">
    <img src={img}
      width={250} height={330} alt="" />    
    <h1>{title}</h1>
    <h4>{author}</h4>
  </article>
)}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist />)
