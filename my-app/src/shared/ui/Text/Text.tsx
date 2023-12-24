import {TextProps} from "../../types";

export const Text = ({text, style}: TextProps) => {
    return <div className={style}>{text}</div>;
};