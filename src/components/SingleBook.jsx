import { useContext, useState } from "react";
import { Card, CardTitle, Button } from "react-bootstrap";
import ThemeContext from "../context/theme";
import { Link } from "react-router-dom";

export default function SingleBook({ book }) {
  const { theme } = useContext(ThemeContext);
  const [selected, setSelected] = useState(false);

  return (
    <>
      <Card
        style={{
          padding: "0px",
          width: "200px",
          maxHeight: "800px",
          border: selected ? "3px solid red" : "0.2px solid grey",
        }}
        className={
          theme === "light" ? "light" : "bg-dark text-white border-black"
        }
        variant={theme}
        onClick={() => setSelected(!selected)}
      >
        <Card.Img
          style={{ width: "100%", height: "250px" }}
          src={book.img}
          alt="book.title"
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <CardTitle className="fw-semibolds">{book.title}</CardTitle>
          <CardTitle className="d-none">{book.asin}</CardTitle>
          <div className="d-flex align-items-center">
            <Link to={`/book/${book.asin}`}>
              <Button variant="secondary">Details</Button>
            </Link>
            <p className="ms-auto mb-0">{book.price} €</p>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
