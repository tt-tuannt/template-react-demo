import cn from "classnames";
import styles from "./Loader.module.scss";

type Props = {
  className?: string;
  white?: boolean;
};

const Loader = ({ className, white }: Props) => {
  return (
    <div
      className={cn(styles.loader, className, {
        [styles.loaderWhite]: white,
      })}
    ></div>
  );
};

export default Loader;
