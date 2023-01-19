import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const CommentList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  const fectchData = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setComments(res.data);
  };
  useEffect(() => {
    fectchData();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });
  return <ul>{renderedComments}</ul>;
};
export default CommentList;
