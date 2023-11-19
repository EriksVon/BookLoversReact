import { Container, Row, Col } from "react-bootstrap";
import scifi from "../json/scifi.json";
import fantasy from "../json/fantasy.json";
import history from "../json/history.json";
import horror from "../json/horror.json";
import romance from "../json/romance.json";
import SingleBook from "./SingleBook";
import { useContext, useState } from "react";
import SearchContext from "../context/search";

export default function AllTheBooks() {
  const [selected, setSelected] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("scifi");
  const { inputText } = useContext(SearchContext);

  const genres = {
    scifi,
    fantasy,
    history,
    horror,
    romance,
  };

  const books = genres[selectedGenre];

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const handleBookClick = (book) => {
    setSelected(book);
  };

  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex justify-content-center mb-3">
            <div className="radio-input">
              {Object.keys(genres).map((genre) => (
                <label key={genre}>
                  <input
                    name="value-radio"
                    type="radio"
                    onClick={() => handleGenreChange(genre)}
                  />
                  <span>{genre.toUpperCase()}</span>
                </label>
              ))}
              <span className="selection"></span>
            </div>
          </Col>
        </Row>
        <Row className="d-flex flex-wrap gap-4 justify-content-center">
          {books
            .sort((a, b) => {
              if (a.title < b.title) return -1;
              if (a.title > b.title) return 1;
              return 0;
            })
            .filter((book) =>
              book.title.toLowerCase().includes(inputText.toLowerCase())
            )
            .map((book) => (
              <SingleBook
                onClick={() => handleBookClick(book)}
                key={book.asin}
                selected={selected}
                setSelected={setSelected}
                book={book}
              />
            ))}
        </Row>
      </Container>
    </>
  );
}
