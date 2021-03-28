import React from "react";
const Comment = ({comment}) => {
    return (<div>{comment.newtext}  - {comment.author}</div>);
}

export default Comment;