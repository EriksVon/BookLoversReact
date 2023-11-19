import { useContext } from "react";
import { Container, ListGroup } from "react-bootstrap";
import ThemeContext from "../context/theme";
import { Link } from "react-router-dom";

export default function MyFooter() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container
      fluid
      className={
        theme === "light" ? "bg-light sticky-bottom" : "bg-dark sticky-bottom"
      }
      variant={theme}
    >
      <Container className="d-flex flex-wrap justify-content-between align-items-center py-3">
        <p className="col-md-4 mb-0">© 2023 Company, Inc</p>
        <ListGroup className="flex-row gap-2">
          <Link className={theme === "light" ? "light" : "text-white"} to="/">
            Home
          </Link>
          <Link
            className={theme === "light" ? "light" : "text-white"}
            to="/wip"
          >
            Link
          </Link>
          <Link
            className={theme === "light" ? "light" : "text-white"}
            to="/wip"
          >
            About
          </Link>
          <Link
            className={theme === "light" ? "light" : "text-white"}
            to="/wip"
          >
            Work with us
          </Link>
        </ListGroup>
      </Container>
    </Container>
  );
}
