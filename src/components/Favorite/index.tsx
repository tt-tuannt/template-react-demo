import { useState } from "react";
import cn from "classnames";
import styles from "./Favorite.module.scss";
import Icon from "../Icon";

type Props = {
  className?: string;
  size?: string;
};

const Favorite = ({ className, size }: Props) => {
  const [visible, setVisible] = useState(false);
  return (
    <button
      className={cn(
        styles.button,
        {
          [styles.active]: visible,
        },
        className
      )}
      onClick={() => setVisible(!visible)}
    >
      <Icon name="heart" size={size ? size : "20"} />
      <Icon name="heart-fill" size={size ? size : "20"} />
    </button>
  );
};

export default Favorite;
