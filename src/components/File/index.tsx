import cn from "classnames";
import styles from "./File.module.scss";
import Icon from "../Icon";
import Tooltip from "../Tooltip";

type Props = {
  className?: string;
  label?: string;
  tooltip?: string;
  title: string;
};

const File = ({ className, label, tooltip, title }: Props) => {
  return (
    <div className={cn(styles.file, className)}>
      {label && (
        <div className={styles.label}>
          {label}{" "}
          {tooltip && (
            <Tooltip
              className={styles.tooltip}
              title={tooltip}
              icon="info"
              place="right"
            />
          )}
        </div>
      )}
      <div className={styles.wrap}>
        <input className={styles.input} type="file" />
        <div className={styles.box}>
          <Icon name="upload" size="24" />
          {title}
        </div>
      </div>
    </div>
  );
};

export default File;
