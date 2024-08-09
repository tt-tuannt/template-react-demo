import React from "react";
import cn from "classnames";
import styles from "./Switch.module.scss";

const Switch = ({ className, value, onChange }) => {
  return (
    <label className={cn(styles.switch, className)}>
      <input
        className={styles.input}
        type="checkbox"
        checked={value}
        onChange={onChange}
      />
      <span className={styles.inner}>
        <span className={styles.box}></span>
      </span>
    </label>
  );
};

export default Switch;
