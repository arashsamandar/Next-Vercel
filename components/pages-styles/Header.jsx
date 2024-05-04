import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom:'50px'}}>
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" href="/">
              Home <span class="sr-only">(current)</span>
            </Link>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="/login">
              Login{" "}
            </a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="{{route('register')}}">
              Register{" "}
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="/project/about">
              Project
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
