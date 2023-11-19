import React, { useContext, useState } from "react";
import { Button, Card, Form, Modal } from "react-bootstrap";
import { bearer } from "./usd/Baerer.jsx";
import { Rating } from "react-simple-star-rating";
import ThemeContext from "../context/theme.js";

export default function AddComment({ asin, getAllComments }) {
  const { theme } = useContext(ThemeContext);
  const [addComment, setAddComment] = useState("");
  const [addRate, setAddRate] = useState(0);

  const handleRating = (rate) => {
    setAddRate(rate);
  };

  const submitAdd = () => {
    const newComment = {
      comment: addComment,
      rate: addRate,
      elementId: asin,
    };

    fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
      method: "POST",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => {
        console.log(newComment);
        if (response.ok) {
          getAllComments();
        } else {
          throw new Error("Bad request");
        }
      })
      .catch((error) => {
        alert("oooops...something went wrong, try again!");
        console.error(error);
      })
      .finally(() => {
        setAddComment("");
        setAddRate("");
      });
  };
  return (
    <Modal.Footer className="d-flex justify-content-center mt-2">
      <Card
        className={`p-3 ${theme === "light" ? "light" : "bg-dark text-white"}`}
        variant={theme}
      >
        <Form>
          <Form.Group>
            <Form.Control
              as="textarea"
              placeholder="Your review"
              value={addComment}
              onChange={(e) => setAddComment(e.target.value)}
              style={{ height: "150px" }}
            />
          </Form.Group>
          <Form.Group className="d-flex flex-column justify-content-center my-3">
            <Form.Label>Would you recommend this book?</Form.Label>
            <Rating
              value={addRate}
              onClick={handleRating}
              onChange={(e) => setAddRate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 d-none">
            <Form.Control value={asin} disabled />
          </Form.Group>
          <Form.Group className="d-flex justify-content-center gap-2">
            <Button
              variant="warning"
              onClick={() => {
                setAddComment("");
                setAddRate(0);
              }}
            >
              Delete Review
            </Button>
            <Button variant="primary" onClick={submitAdd}>
              Save Review
            </Button>
          </Form.Group>
        </Form>
      </Card>
    </Modal.Footer>
  );
}
