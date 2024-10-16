import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Import Link for routing
import CatalogLogo from '../../../assets/svg/CatalogLogo.svg'; // Import the logo image
import styles from './Header.module.css';

// Navigation links
const navigation_links = [
  {
    name: 'Catalog',
    path: '/'
  },
  {
    name: 'Manage',
    path: '/manage'
  },
  {
    name: 'About',
    path: '/about'
  }
];

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <img
          src={CatalogLogo}
          alt="Dog's Catalog"
          className={styles.header__logo}
        />
      </Link>
      <nav
        aria-label="pages navigation"
        className={styles.header__nav_container}
      >
        <ul className={styles.header__nav_list}>
          {navigation_links.map((link, index) => (
            <li key={index} className={`${styles.header__nav_item} `}>
              <NavLink
                to={link.path}
                className={({ isActive }) => {
                  return isActive
                    ? `${styles.header__nav_link__active} ${styles.header__nav_link}`
                    : `${styles.header__nav_link}`;
                }}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
