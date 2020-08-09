import React from "react";
import styles from "./InsertForm.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const InsertForm = ({ noteInput, onChangeInput }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    onChangeInput({ value });
  };

  return (
    <div className={cx("form")}>
      <div className={cx("title")}>Insert Your Note Here ...</div>
      <input
        type="text"
        name="note"
        value={noteInput}
        onChange={handleChange}
      />
    </div>
  );
};

export default InsertForm;
