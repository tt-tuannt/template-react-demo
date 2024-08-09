import { useState } from "react";
import cn from "classnames";
import OutsideClickHandler from "react-outside-click-handler";
import styles from "./Actions.module.scss";
import Icon from "../Icon";

type Props = {
    className?: string;
    classActionsHead?: string;
    classActionsBody?: string;
    classActionsOption?: string;
    items: {
        title: string;
        icon?: string;
        action: () => void;
    }[];
    visible?: boolean;
    setVisible?: (visible: boolean) => void;
    small?: boolean;
    up?: boolean;
};


const Actions = ({
    className,
    classActionsHead,
    classActionsBody,
    classActionsOption,
    items,
    visible,
    setVisible,
    small,
    up,
}: Props) => {
    const [innerVisible, setInnerVisible] = useState(false);

    const toggle = () => {
        if(setVisible) {
            setVisible(!visible);
            return
        }
        setInnerVisible(!innerVisible)
    };

    return (
        <OutsideClickHandler
            onOutsideClick={() =>
                setVisible ? setVisible(false) : setInnerVisible(false)
            }
        >
            <div
                className={cn(
                    styles.actions,
                    className,
                    {
                        [styles.small]: small,
                    },
                    {
                        [styles.up]: up,
                    },
                    {
                        [styles.active]: visible ? visible : innerVisible,
                    }
                )}
            >
                <button
                    className={cn(styles.head, classActionsHead)}
                    onClick={() => toggle()}
                >
                    <Icon name="more-horizontal" size="24" />
                </button>
                <div className={cn(styles.body, classActionsBody)}>
                    {items.map((x, index) => (
                        <button
                            className={cn(styles.option, classActionsOption)}
                            onClick={x.action}
                            key={index}
                        >
                            {x.icon && <Icon name={x.icon} size="24" />}
                            {x.title}
                        </button>
                    ))}
                </div>
            </div>
        </OutsideClickHandler>
    );
};

export default Actions;
