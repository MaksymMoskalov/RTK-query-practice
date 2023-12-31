import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiMailSend } from "react-icons/bi";
import styles from "./Form.module.css";
import { useAddCommentMutation } from "../../redux/commentApi";
import { add } from "date-fns";

export const Form = () => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [addComment, { isLoading, isError }] = useAddCommentMutation();

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setAuthor(value);
        break;
      case "text":
        setContent(value);
        break;
      default:
        return;
    }
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const newComment = { author: author, content: content };
    try {
      await addComment(newComment);
    }
    catch (error) {
      // toast.error("Something went wrong")
      console.log("Error");
    }
    
    
    
    
    // toast.success("Comment added");
    

    setAuthor("");
    setContent("");
  };
console.log(isError)
  return (
    <div className={styles.formWrapper}>
      {isError && <p>Something went wrong</p>}
      <form className={styles.form} onSubmit={onHandleSubmit}>
        <label className={styles.label}>
          <span className={styles.labelName}>Full name</span>
          <input
            type="text"
            name="name"
            className={styles.input}
            value={author}
            onChange={onHandleChange}
          />
        </label>

        <label className={styles.label}>
          <span className={styles.labelName}>Your comment</span>
          <textarea
            className={styles.input}
            name="text"
            rows="5"
            value={content}
            onChange={onHandleChange}
          ></textarea>
        </label>

        <button className={styles.formBtn}>
          <BiMailSend className={styles.icon} />
          {isLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};
