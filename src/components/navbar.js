import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav >
      <div className='col-md-11'>
              <Link
                to="/create"
                className='btn btn-outline-warning float-right'
              >
                + Add New Book
              </Link>
              </div>
    </nav>
  );
}
