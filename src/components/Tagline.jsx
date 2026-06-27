    import { useId } from "react";
    import brackets from "../assets/svg/Brackets";

    const TagLine = ({ className, children }) => {
    const id = useId();
    return (
        <div className={`tagline flex items-center ${className || ""}`}>
        {brackets("left", id)}
        <div className="mx-3 text-n-3">{children}</div>
        {brackets("right", id)}
        </div>
    );
    };

export default TagLine;