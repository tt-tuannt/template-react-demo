import { useEffect, useRef } from "react";
import cn from "classnames";
import styles from "./Answer.module.scss";

type Props = {
    className?: string;
    avatar: string;
    onClose: () => void;
    currentValue: string;
    setCurrentValue: (value: string) => void;
};

const Answer = ({
    className,
    avatar,
    onClose,
    currentValue,
    setCurrentValue,
    ...etc
}: Props) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if(!textareaRef.current) {
            return
        }
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [currentValue]);

    return (
        <div className={cn(styles.answer, className)}>
            <div className={styles.avatar}>
                <img src={avatar} alt="Avatar" />
            </div>
            <div className={styles.details}>
                <div className={styles.message}>
                    <textarea
                        ref={textareaRef}
                        {...etc}
                        value={currentValue}
                        placeholder="Leave something to reply"
                        onChange={(e) => {
                            setCurrentValue(e.target.value);
                        }}
                    />
                </div>
                <div className={styles.btns}>
                    <button
                        className={cn("button button-small", styles.button, {
                            disabled: currentValue === "",
                        })}
                    >
                        Reply
                    </button>
                    <button
                        className={cn(
                            "button-stroke button-small",
                            styles.button
                        )}
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Answer;
