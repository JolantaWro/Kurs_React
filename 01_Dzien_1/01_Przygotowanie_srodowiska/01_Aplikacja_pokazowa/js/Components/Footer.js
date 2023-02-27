import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container border-top pt-4">
        <p>MoviesDB &copy; {new Date().getFullYear()}</p>
        <p className="small text-muted">
          Jest to przykładowa aplikacja napisana w React! Skoro ją widzisz, to znaczy, że konfiguracja środowiska
          została wykonana prawidłowo!
        </p>
      </div>
    </footer>
  );
};

export default Footer;
