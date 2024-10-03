// import React from 'react';
import { useEffect } from 'react';
import PropTypes from "prop-types";
import '../styles/Modal.css';

const Modal = ({ message, duration, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onClose]);

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>{message}</h2>
            </div>
        </div>
    );
};

Modal.propTypes = {
    message: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    onClose: PropTypes.func.isRequired,
};


export default Modal;
