import { MoreVert } from "@mui/icons-material";
import React from "react";
import "./post.css";
import { Users } from '../../dummyData'
import { useState } from 'react'

function Post(props) {
  const [like, setLike] = useState(props.post.like)
  const [isLiked, setIsLiked] = useState(false)
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
  }

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter(u => u.id === props.post.userId)[0].profilePicture}
              className="postProfileImg"
              alt=""
            />

            <span className="postUsername">{Users.filter(u => u.id === props.post.userId)[0].username}</span>
            <span className="postDate">{props.post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{props.post?.desc}</span>
          <img src={PF + props.post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/assets/like.png" alt="" className="likeIcon" onClick={likeHandler} />
            <img src="/assets/heart.png" alt="" className="likeIcon" onClick={likeHandler} />
            <span className="postLikeCounter">{like} people Liked it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{props.post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
