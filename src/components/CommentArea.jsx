import { useCallback, useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { bearer } from "./usd/Baerer";

function CommentArea({ asin }) {
  const [comments, setComments] = useState([]);
  const [showAddComment, setShowAddComment] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setComments([""]);
      setShowAddComment(false);
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
          {
            headers: {
              Authorization: bearer,
            },
          }
        );
        if (response.ok) {
          let commentsList = await response.json();
          setComments(commentsList);
          setShowAddComment(true);
        } else {
          console.error("Errore nella risposta del server");
          setShowAddComment(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    if (asin) {
      fetchData();
    }
  }, [asin]);

  const getAllComments = useCallback(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
      headers: {
        Authorization: bearer,
      },
    })
      .then((r) => r.json())
      .then((commentsList) => setComments(commentsList))
      .catch(() => alert("oh oh"));
  }, [asin]);

  useEffect(() => {
    getAllComments();
  }, [getAllComments]);

  return (
    <>
      <h4 className="mb-4">Reviews:</h4>

      <CommentList details={comments} getAllComments={getAllComments} />
      {showAddComment && (
        <AddComment asin={asin} getAllComments={getAllComments} />
      )}
    </>
  );
}
export default CommentArea;
