import styles from "./Editor.module.scss";
import cn from "classnames";
import { Editor as ReactEditor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Tooltip from "../Tooltip";

type Props = {
    state: any;
    onChange: (state: any) => void;
    classEditor?: string;
    label?: string;
    classLabel?: string;
    tooltip?: string;
    place?: string;
    button?: string;
};

const Editor = ({
    state,
    onChange,
    classEditor,
    label,
    classLabel,
    tooltip,
    place,
    button,
}: Props) => {
    return (
        <div
            className={cn(
                styles.editor,
                { [styles.editorButton]: button },
                classEditor
            )}
        >
            {label && (
                <div className={cn(classLabel, styles.label)}>
                    {label}{" "}
                    {tooltip && (
                        <Tooltip
                            className={styles.tooltip}
                            title={tooltip}
                            icon="info"
                            place={place ? place : "right"}
                        />
                    )}
                </div>
            )}
            <ReactEditor
                editorState={state}
                toolbarClassName={styles.editorToolbar}
                wrapperClassName={styles.editorWrapper}
                editorClassName={styles.editorMain}
                onEditorStateChange={onChange}
                toolbar={{
                    options: [
                        "inline",
                        "emoji",
                        "link",
                        "list",
                        "textAlign",
                        "history",
                    ],
                    inline: {
                        options: ["bold", "italic", "underline"],
                    },
                    link: {
                        options: ["link"],
                    },
                    list: {
                        options: ["unordered"],
                    },
                    textAlign: {
                        options: ["center"],
                    },
                }}
            />
            {button && (
                <button className={cn("button-small", styles.button)}>
                    {button}
                </button>
            )}
        </div>
    );
};

export default Editor;
