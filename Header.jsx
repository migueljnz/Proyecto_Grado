import React from "react";

const Header = ({ titulo, logoSrc }) => {
  return (
    <header>
      {/* Barra de navegación */}
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "Red" }}
      >
        {/* Título centrado */}
        <a className="navbar-brand text-center w-100" href="/">
          {titulo}
        </a>
      </nav>

      {/* Logo debajo del título */}
      {logoSrc && (
        <img
          src={logoSrc}
          alt="Logo"
          className="d-block ms-auto my-2"
          style={{
            maxWidth: "200px",
            height: "100px",
          }}
        />
      )}
    </header>
  );
};

export default Header;
