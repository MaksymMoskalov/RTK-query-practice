import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { comments } from "../../helpers/comments";
import { useSelector } from "react-redux";
import { hendleFiltration } from "../../redux/filterSlice";

export const Comments = () => {
  const filter = useSelector(hendleFiltration);
  const filtration = () => {
    return comments.filter(({ content }) =>
      content.toLowerCase().includes(filter.toLowerCase())
    );
  };

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
