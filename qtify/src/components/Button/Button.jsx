import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Button.module.css";

const Button = ({ label, onClick, type = 'button', className = '', disabled = false }) => {
    return (
        <button
            type={type}
            className={`${styles.btn} ${className}`}
            onClick={onClick}
            disabled={disabled}
            style={{ cursor: disabled ? 'not-allowed' : 'pointer', color: disabled ? 'gray' : 'var(--color-primary)', background: disabled ? 'gray' : 'var(--color-black)'}}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Button;