import { useContext, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import SearchContext from "../context/search";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import ThemeContext from "../context/theme";
import { Link } from "react-router-dom";

export default function MyNav() {
  const { inputText, setInputText } = useContext(SearchContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Navbar
      expand="lg"
      className={theme === "light" ? "light" : "bg-dark text-white"}
      variant={theme}
    >
      <Container>
        <Navbar.Brand className="fw-bold">EpiBooks</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto gap-2">
            <Link
              className={theme === "light" ? "light" : "text-white"}
              to={"/"}
            >
              Home
            </Link>
            <Link
              className={theme === "light" ? "light" : "text-white"}
              to={`/wip`}
            >
              About
            </Link>
            <Link
              className={theme === "light" ? "light" : "text-white"}
              to={`/wip`}
            >
              Browse
            </Link>
          </Nav>
        </Navbar.Collapse>
        <input
          className="form-control me-2"
          style={{ maxWidth: "250px" }}
          type="search"
          placeholder="Search a book"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
          }}
        />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <DarkModeSwitch
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          size={30}
          color="theme"
        />
      </Container>
    </Navbar>
  );
}
