import React from 'react';
import './Header.css';
import { Container } from 'reactstrap';

import { NavLink, Link } from 'react-router-dom';

const navLinks = [
  {
    display: 'Home',
    url: '/home',
  },
  {
    display: 'Market',
    url: '/market',
  },
  {
    display: 'Create',
    url: '/create',
  },
  {
    display: 'Contact',
    url: '/contact',
  },
];

const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="navigation">
          <div className="logo">
            <h2 className="d-flex gap-2 align-items-center">
              <span>
                <i className="ri-fire-fill"></i>
              </span>
              NFTs
            </h2>
          </div>

          <div className="nav__menu">
            <ul className="nav__list">
              {navLinks.map((link, index) => (
                <li className="nav__item" key={index}>
                  <NavLink
                    to={link.url}
                    className={(navClass) =>
                      navClass.isActive ? 'active' : ''
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="nav__right d-flex align-items-center gap-5 ">
            <button className="btn d-flex gap-2 align-items-center">
              <span>
                <i class="ri-wallet-line"></i>
              </span>
              <Link to="/wallet">Connect Wallet</Link>
            </button>

            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
