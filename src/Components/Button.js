import PropTypes from "prop-types";

export const Button = ({ className, divClassName, text = "Register" }) => {
    return (
    <button className={`button ${className}`}>
    <div className={`register ${divClassName}`}>{text}</div>
    </button>
    );
    };
    Button.propTypes = {
    text: PropTypes.string,
    };