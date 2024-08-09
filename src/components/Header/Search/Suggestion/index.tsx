import cn from "classnames";
import styles from "./Suggestion.module.scss";
import Icon from "../../../Icon";

type SuggestionType = {
  icon: string;
  title: string;
  content: string;
};

type Props = {
  className?: string;
  item: SuggestionType;
  onClick: () => void;
};

const Suggestion = ({ className, item, onClick }: Props) => {
  return (
    <div className={cn(styles.link, className)} onClick={onClick}>
      <div className={styles.icon}>
        <Icon name={item.icon} size="24" />
      </div>
      <div className={styles.details}>
        <div className={styles.title}>{item.title}</div>
        <div className={styles.content}>{item.content}</div>
      </div>
      <div className={styles.arrow}>
        <Icon name="arrow-next" size="24" />
      </div>
    </div>
  );
};

export default Suggestion;
