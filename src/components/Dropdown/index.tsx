import { useState } from "react";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Dropdown.module.scss";
import Tooltip from "../Tooltip";

type Props = {
    className?: string;
    classDropdownHead?: string;
    classDropdownLabel?: string;
    value: string;
    setValue: (value: string) => void;
    options: string[];
    label?: string;
    tooltip?: string;
    small?: boolean;
    upBody?: boolean;
};

const Dropdown = ({
    className,
    classDropdownHead,
    classDropdownLabel,
    value,
    setValue,
    options,
    label,
    tooltip,
    small,
    upBody,
}: Props) => {
    const [visible, setVisible] = useState(false);

    const handleClick = (value: string) => {
        setValue(value);
        setVisible(false);
    };

    return (
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
            {label && (
                <div className={cn(styles.label, classDropdownLabel)}>
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
            <div
                className={cn(
                    styles.dropdown,
                    className,
                    { [styles.small]: small },
                    {
                        [styles.active]: visible,
                    }
                )}
            >
                <div
                    className={cn(styles.head, classDropdownHead)}
                    onClick={() => setVisible(!visible)}
                >
                    <div className={styles.selection}>{value}</div>
                </div>
                <div className={cn(styles.body, { [styles.bodyUp]: upBody })}>
                    {options.map((x, index) => (
                        <div
                            className={cn(styles.option, {
                                [styles.selectioned]: x === value,
                            })}
                            onClick={() => handleClick(x)}
                            key={index}
                        >
                            {x}
                        </div>
                    ))}
                </div>
            </div>
        </OutsideClickHandler>
    );
};

export default Dropdown;
