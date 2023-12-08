
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Book = (props) => (
    
    <div class="list">
       
    <h2><a href="/show-book/123id">React.JS 101</a></h2>
    <h3>{props.author}</h3>
    <p>{props.title}</p> <br/>
    <p>Pages: {props.pages}</p>

    <button onClick={() => { props.deleteBook(props.keyt); }}> delete </button>

</div>
);

export default function BookList() {
  const [books, setBookList] = useState([]);
  useEffect(() => {
    axios
      .get('https://three00358013-bengisu-csis3380-backend.onrender.com/api/books/')
      .then((response) => {
        setBookList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteBook = (id) => {
    axios
      .delete('https://three00358013-bengisu-csis3380-backend.onrender.com/api/books/delete/' + id)
      .then((response) => {
        console.log(response.data);
      });

      setBookList(books.filter((el) => el._id !== id));
  };

  const editBook = (id) => {
    window.location = '/update/' + id;
  };

  return (
    
    <div>
       <div className='BookList'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Books List</h2>
            </div>
  
            {/* <div className='col-md-11'>
              <Link
                to='/create-book'
                className='btn btn-outline-warning float-right'
              >
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div> */}
            
          </div>
  
          <div className='list'>
          <div className="card-container">
          <img
            src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
            alt="Books"
            height="200"
          />

          
        <tbody>
          {books.map((book) => {
        
            return (
              <Book
                book={book.title}
                author={book.author}
                pages={book.pages}
                key={book._id}
                keyt={book._id}
                deleteBook={deleteBook}
                editBook={editBook}
              />
            );
          })}
        </tbody>
 
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}










  
//     return (
    //   <div className='BookList'>
    //     <div className='container'>
    //       <div className='row'>
    //         <div className='col-md-12'>
    //           <br />
    //           <h2 className='display-4 text-center'>Books List</h2>
    //         </div>
  
    //         {/* <div className='col-md-11'>
    //           <Link
    //             to='/create-book'
    //             className='btn btn-outline-warning float-right'
    //           >
    //             + Add New Book
    //           </Link>
    //           <br />
    //           <br />
    //           <hr />
    //         </div> */}
            
    //       </div>
  
    //       <div className='list'>
    //       <div className="card-container">

    //       <img
    //         src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
    //         alt="Books"
    //         height="200"
    //       />

    //          {books.map((book) =>{
    //             <Book 
    //               book={book.title}
    //               author={book.author}
    //               description={book.description}
    //               pages={book.pages}
    //               key={book._id}
    //               keyt={book._id}
    //             />
                
    //         })}
        
    //     </div>
    //   </div>
    //   </div>
    //   </div>
      
//     );
//   }