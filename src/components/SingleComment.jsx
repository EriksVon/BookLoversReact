import { Button } from "react-bootstrap";
import { bearer } from "./usd/Baerer";

export default function SingleComment({ review, getAllComments }) {
  const deleteReview = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/` + review._id, {
      method: "DELETE",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review.asin),
    })
      .then((response) => {
        if (response.ok) {
          getAllComments();
        } else {
          throw new Error("Bad request");
        }
      })
      .catch((error) => {
        alert("oooops...something went wrong, try again!");
        console.error(error);
      });
  };

  return review.author === "ciao@ciao.de" ? (
    <tbody>
      <tr>
        <td>{review.comment} </td>
        <td className="text-break">{review.author} </td>
        <td>{review.rate}</td>
        <td className="text-center">
          <Button className="btn-danger" onClick={deleteReview}>
            Delete
          </Button>
        </td>
      </tr>
    </tbody>
  ) : (
    <tbody>
      <tr>
        <td>{review.comment} </td>
        <td className="text-break">{review.author} </td>
        <td>{review.rate}</td>
        <td className="text-center">Unauthorized</td>
      </tr>
    </tbody>
  );
}
