import cn from "classnames";
import styles from "./Item.module.scss";
import Icon from "../../../Icon";

type Props = {
  className?: string;
  item: {
    image: string;
    image2x: string;
    content: string;
    title: string;
  };
  onClick: () => void;
};

const Item = ({ className, item, onClick }: Props) => {
  return (
    <div className={cn(styles.item, className)}>
      <div className={styles.link} onClick={onClick}>
        <div className={styles.preview}>
          <img srcSet={`${item.image2x} 2x`} src={item.image} alt="Product" />
        </div>
        <div className={styles.details}>
          <div className={styles.content}>{item.content}</div>
          <div className={styles.title}>{item.title}</div>
        </div>
      </div>
      <button className={styles.close}>
        <Icon name="close" size="24" />
      </button>
    </div>
  );
};

export default Item;
