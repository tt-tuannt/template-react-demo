import React from "react";
import cn from "classnames";
import styles from "./Form.module.scss";
import Icon from "../Icon";

type Props = {
  className?: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  type: "text" | "password";
  name: string;
  icon: string;
};

const Form = ({
  className,
  onSubmit,
  placeholder,
  value,
  setValue,
  type,
  name,
  icon,
}: Props) => {
  return (
    <form className={cn(className, styles.form)} action="" onSubmit={onSubmit}>
      <input
        className={styles.input}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        name={name}
        placeholder={placeholder}
        required
      />
      <button className={styles.result}>
        <Icon name={icon} size="24" />
      </button>
    </form>
  );
};

export default Form;
