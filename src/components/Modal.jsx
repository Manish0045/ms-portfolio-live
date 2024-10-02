// Modal.jsx
import React, { useEffect } from 'react';
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

export default Modal;
