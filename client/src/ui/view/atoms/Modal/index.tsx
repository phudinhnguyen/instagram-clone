import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';

import classes from './style.module.scss';

export interface ModalProps {
    children?: React.ReactNode;
    isOpen?: boolean;
    onClose?: (value: boolean) => void;
}

export interface PortalInterface {
    children?: React.ReactNode;
}

const Portal = (props: PortalInterface) => {
    const { children } = props;
    const el = useMemo(() => document.createElement('div'), []);

    React.useEffect(() => {
        el.classList.add(classes['modal-root']);
        document.body.appendChild(el);
        return () => {
            document.body.removeChild(el);
        };
    }, [el]);

    return ReactDOM.createPortal(children, el);
};

const Modal: React.FC<ModalProps> = (props) => {
    const { children, isOpen = false, onClose } = props;

    const [state, setState] = useState(() => {
        return {
            isOpen: isOpen,
        };
    });

    useEffect(() => {
        setState((prevState) => {
            return { ...prevState, isOpen: isOpen };
        });
    }, [isOpen]);

    useEffect(() => {
        if (state.isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'initial';
            onClose && onClose(state.isOpen);
        }
    }, [state.isOpen]);

    const handleClick = (value: boolean) => {
        setState((prevState) => {
            return { ...prevState, isOpen: value };
        });
    };

    if (state.isOpen) {
        return (
            <Portal>
                <div className={classes['modal-wrap']}>
                    <div className={classes['modal-mask']} onClick={(e) => handleClick(false)} />
                    <div className={classes['modal']}>{children}</div>
                </div>
            </Portal>
        );
    }

    return null;
};

export default Modal;
