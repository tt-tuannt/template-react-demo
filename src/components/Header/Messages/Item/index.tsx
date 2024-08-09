import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Item.module.scss";

type Props = {
  className?: string;
  item: {
    avatar: string;
    title: string;
    time: string;
    content: string;
    url: string;
    new?: boolean;
    online?: boolean;
  };
  onClose: () => void;
};

const Item = ({ className, item, onClose }: Props) => {
  return (
    <Link
      className={cn(styles.item, { [styles.new]: item.new }, className)}
      to={item.url}
      onClick={onClose}
    >
      <div className={cn(styles.avatar, { [styles.online]: item.online })}>
        <img src={item.avatar} alt="Avatar" />
      </div>
      <div className={styles.details}>
        <div className={styles.line}>
          <div className={styles.subtitle}>{item.title}</div>
          <div className={styles.time}>{item.time}</div>
        </div>
        <div className={styles.content}>{item.content}</div>
      </div>
    </Link>
  );
};

export default Item;
