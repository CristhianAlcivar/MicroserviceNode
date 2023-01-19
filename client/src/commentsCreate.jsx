import axios from "axios";
import { useState } from "react";

const CommentCreate = ({ postId }) => {
  const [content, seContent] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });
    seContent("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={content}
            onChange={(e) => seContent(e.target.value)}
            className="form-control"
          />
        </div>
        <br />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
export default CommentCreate;
