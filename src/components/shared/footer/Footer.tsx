import React from 'react';
import './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} The Dog Catalog.</p>
    </footer>
  );
};

export default Footer;
