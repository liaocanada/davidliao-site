import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div id="footer" class="col-sm-12 text-center">
      &copy; {year} by David Liao. Created with Java and hosted on Amazon Web Services.
    </div>
  );
};

export default Footer;
