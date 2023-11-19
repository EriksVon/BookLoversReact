import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import scifi from "../json/scifi.json";
import fantasy from "../json/fantasy.json";
import history from "../json/history.json";
import horror from "../json/horror.json";
import romance from "../json/romance.json";
import NotFound from "./usd/NotFound";
import CommentArea from "./CommentArea";
import { useContext, useEffect } from "react";
import ThemeContext from "../context/theme";

export default function BookDetails() {
  const { asin } = useParams();
  const genres = [scifi, fantasy, history, horror, romance];
  const allBooks = genres.reduce((acc, genre) => [...acc, ...genre], []);
  const book = allBooks.find((book) => book.asin === asin);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Theme in details:", theme);
  }, [theme]);

  const lorem =
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.";

  return (
    <Container className="my-5">
      {book ? (
        <Row className="d-flex align-items-center my-5">
          <Col lg="3" className="text-center">
            <img
              className="rounded"
              style={{ maxHeight: "350px" }}
              src={book.img}
              alt="book.title"
            />
          </Col>
          <Col
            lg="5"
            className="d-flex flex-column align-items-start my-4 px-3"
          >
            <h4 className="text-warning">{book.title}</h4>

            <cite style={{ textalign: "justify" }}>"{lorem}..."</cite>

            <p className="mt-3">
              ID: <b> {book.asin}</b>
            </p>
            <p>
              CATEGORY: <b> "{book.category.toUpperCase()}"</b>
            </p>
            <h5 className="border rounded border-warning border-3 px-2 py-1">
              {book.price} €
            </h5>
          </Col>
          <Col lg="4">
            <CommentArea asin={book.asin} />
          </Col>
        </Row>
      ) : (
        <NotFound />
      )}
    </Container>
  );
}
