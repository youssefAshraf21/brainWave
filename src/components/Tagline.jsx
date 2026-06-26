const Tagline = ({ className, children }) => {
    return (
        <div className={`tagline ${className || ""}`}>
            {children}
        </div>
    );
};

export default Tagline;
