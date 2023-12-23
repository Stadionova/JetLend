export const Text = ({text, style}: { text?: string, style: string }) => {
    return <div className={style}>{text}</div>;
};