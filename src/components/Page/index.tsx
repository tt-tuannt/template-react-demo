import { useState } from "react";
import cn from "classnames";
import styles from "./Page.module.scss";
import Sidebar from "../Sidebar";
import Header from "../Header";

type Props = {
    wide?: boolean;
    children?: React.ReactNode;
    title?: string;
};

const Page = ({ wide, children, title }: Props) => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div className={styles.page}>
                <Sidebar
                    className={cn(styles.sidebar, {
                        [styles.visible]: visible,
                    })}
                    onClose={() => setVisible(false)}
                />
                <Header onOpen={() => setVisible(true)} />
                <div className={styles.inner}>
                    <div
                        className={cn(styles.container, {
                            [styles.wide]: wide,
                        })}
                    >
                        {title && (
                            <div className={cn("h3", styles.title)}>
                                {title}
                            </div>
                        )}
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Page;
