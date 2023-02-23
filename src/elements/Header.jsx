import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

function Header() {
    return (
      <div>
        <Navbar className="my-2" color="success" dark full>
          <NavbarBrand href="/">Medidor de IMC.</NavbarBrand>
        </Navbar>
        ;
      </div>
    );
}

export default Header;
