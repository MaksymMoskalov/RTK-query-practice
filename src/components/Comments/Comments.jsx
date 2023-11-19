import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
// import { comments } from "../../helpers/comments";
import { useSelector } from "react-redux";
import { hendleFiltration } from "../../redux/filterSlice";
import { useGetCommentsQuery } from "../../redux/commentApi";
export const Comments = () => {
  const filter = useSelector(hendleFiltration);
  const { data: comments, isLoading } = useGetCommentsQuery();
  
  const filtration = () => {
    return comments.filter(({ content }) =>
      content.toLowerCase().includes(filter.toLowerCase())
    );
  };
  if (isLoading) return <p>Loading...</p>;
  if (!comments) return;
  return (
    <Grid>
      {comments &&
        filtration().map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
