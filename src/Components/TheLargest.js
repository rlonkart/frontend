import PropTypes from "prop-types";

export const TheLargest = ({ className, divClassName, text = "The largest community of photo enthusiasts" }) => {
    return (
    <div className={`the-largest ${className}`}>
    <p className={`text-wrapper ${divClassName}`}>{text}</p>
    </div>
    );
    };
    TheLargest.propTypes = {
    text: PropTypes.string,
    };