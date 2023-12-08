import React, { useState } from 'react';
import axios from 'axios';

export default function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [pages, setPages] = useState('');
  const [description, setdescription] = useState('');


  const onSubmit = (e) => {
    e.preventDefault();
    const bookData = {
      title: title,
      author: author,
      pages: pages,
      description:description

    };

    axios
      .post('https://three00358013-bengisu-csis3380-backend.onrender.com/api/books/add', bookData)
      .then((res) => {
        window.location = '/';
      });
  };

  return (
    <div>
            <br /><a class="btn btn-info float-left" href="/">Show BooK List</a>
        
            <h1 class="display-4 text-center">Add Book</h1>
            <p class="lead text-center">Create new book</p>

      <h3>Create New Book</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title: </label>
          <input
            type="text"
            required
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

            <label>Author: </label>
           <input
            type="text"
            required
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          <label>Pages: </label>
          <input
            type="number"
            required
            className="form-control"
            value={pages}
            onChange={(e) => setPages(e.target.value)}
          />

           <label>Description: </label>
           <input
            type="text"
            required
            className="form-control"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />

        </div>
        <br></br>

        <div className="form-group">
          <input
            type="submit"
            value="Create Book"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
