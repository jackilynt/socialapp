import React, { useContext } from "react";
import moment from "moment";
import { FaRegComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";

export default function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) {
  const { user } = useContext(AuthContext);

  return (
    <div className="col">
      <div className="card mb-3">
        <div className="card-body">
          <div className="">
            <Link className="link" to={`/posts/${id}`}>
              <h6 className="card-title">{body}</h6>
            </Link>
            <img
              style={{ width: "50px", height: "40px", objectFit: "cover" }}
              src="https://wallpapercave.com/wp/YnOAJ6t.jpg"
              alt=""
            />
          </div>
          <Link className="link" to={`/posts/${id}`}>
            <span
              style={{ color: "blue", fontSize: "12px", cursor: "pointer" }}
            >
              {moment(createdAt).fromNow()}
            </span>
          </Link>
          <p className="small">{username}</p>

          <div
            style={{ marginTop: "13px" }}
            className="d-flex align-items-center justify-content-between"
          >
            <div className="btn-group" aria-label="Basic mixed styles example">
              <LikeButton user={user} post={{ id, likes, likeCount }} />

              <button
                type="button"
                className="btn btn-outline-danger d-flex align-items-center"
              >
                <Link to={`/posts/${id}`}>
                  <FaRegComments className="icon" />
                </Link>
              </button>

              <button
                type="button"
                className="btn btn-outline-success"
                style={{ padding: "0px 5px" }}
              >
                {commentCount}
              </button>
            </div>

            {user && user.username === username && <DeleteButton postId={id} />}
          </div>
        </div>
      </div>
    </div>
  );
}
