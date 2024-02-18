import clsx from "clsx";
import "./button.scss";

enum Type {
    BASIC = "basic",
}

interface ButtonProps {
    text?: string;
    type?: Type;
}

function Button({ text = 'Learn More', type = Type.BASIC }: ButtonProps) {
    return (
        <button className={clsx("button", type)} data-type={type}>{text}</button>
    )
}

export { Button }