import { Table, Container } from "react-bootstrap";
import SingleComment from "./SingleComment";

export default function CommentList({ details, getAllComments }) {
  return (
    <>
      <Container>
        {details.length === 0 && (
          <h4 className="my-4">
            Nobody reviewed this book, would you be the first?
          </h4>
        )}
        {details.length >= 1 && (
          <Table bordered>
            <thead>
              <tr>
                <th>Review</th>
                <th>Reviewed by</th>
                <th>Rate</th>
                <th>Delete</th>
              </tr>
            </thead>
            {details.map((review) => (
              <SingleComment
                key={review}
                review={review}
                getAllComments={getAllComments}
              />
            ))}
          </Table>
        )}
      </Container>
    </>
  );
}
