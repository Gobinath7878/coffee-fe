import React, { useContext,useRef } from "react";
import "./Header.css";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./../../context/AuthContext";

const nav_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/coffee",
    display: "Coffee",
  },
];

const Header = () => {
  const menuRef =useRef(null)
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

const toggleMenu = ()=>{
 menuRef.current.classList.toggle('show_menu')
}

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            <div className="logo">
              <h4 className="mt-2 fw-bold">CoffeeGo</h4>
            </div>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu d-flex align-items-center gap-5">
                {nav_links.map((item, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "active_link" : " "
                      }
                    >
                      {" "}
                      {item.display}{" "}
                    </NavLink>
                  </li>
                ))}
              </div>
            </div>

            <div className="nav_right d-flex align-items-center p-3 gap-1">
              <div className="nav_btns d-flex align-items-center gap-1">
                {user ? (
                  <>
                    <h5 className="mb-0 p-3 text-warning">{user.username}</h5>
                    <Button className="btn btn-dark" onClick={logout}>
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Button className="btn secondary__btn">
                      <Link to="/login">Login</Link>
                    </Button>
                    <Button className="btn primary__btn">
                      <Link to="/register">Register</Link>
                    </Button>
                  </>
                )}
     </div>
                <span className="mobile_menu" onClick={toggleMenu}>
                  <i className="ri-menu-line"></i>
                </span>
              
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
