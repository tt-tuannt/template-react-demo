import { useState } from "react";
import cn from "classnames";
import styles from "./Control.module.scss";
import Icon from "../../../../../Icon";
import Answer from "../../../../../Answer";

type Props = {
  valueAnswer: string;
  setValueAnswer: (value: string) => void;
};

const Control = ({ valueAnswer, setValueAnswer }: Props) => {
  const [visibleFavorite, setVisibleFavorite] = useState(false);
  const [visibleReply, setVisibleReply] = useState(false);
  return (
    <>
      <div className={styles.control}>
        <button
          className={cn(styles.favorite, { [styles.active]: visibleFavorite })}
          onClick={() => setVisibleFavorite(!visibleFavorite)}
        >
          <span>
            <Icon name="heart" size="20" />
            <Icon name="heart-fill" size="20" />
          </span>
          Like
        </button>
        <button
          className={cn(styles.reply, { [styles.active]: visibleReply })}
          onClick={() => setVisibleReply(true)}
        >
          <span>
            <Icon name="repeat" size="20" />
          </span>
          Reply
        </button>
      </div>
      <Answer
        className={cn(styles.answer, { [styles.show]: visibleReply })}
        avatar="/images/content/avatar.jpg"
        onClose={() => setVisibleReply(false)}
        currentValue={valueAnswer}
        setCurrentValue={setValueAnswer}
      />
    </>
  );
};

export default Control;
