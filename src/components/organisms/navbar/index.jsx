import React from 'react';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fa fa-lg fa-bars" />
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#ordering">Ordering</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#catalogues">Catalogues</a>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;