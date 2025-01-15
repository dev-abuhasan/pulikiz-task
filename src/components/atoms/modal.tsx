'use client';
import { v1_close } from '@/services/svg/svg';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    parentClose?: boolean;
    alert?: boolean;
    showTitle?: boolean;
    title?: string | React.ReactNode;
    children?: React.ReactNode;
    width?: string;
    height?: string;
    center?: boolean;
    fullScreen?: boolean;
    transitionDuration?: number;
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    parentClose,
    setIsOpen,
    alert,
    showTitle = true,
    title,
    children,
    width,
    height,
    center,
    fullScreen = false,
    transitionDuration = 300,
}) => {
    const customStyles: React.CSSProperties = {
        ...(width ? { maxWidth: width } : {}),
        ...(height ? { maxHeight: height } : {}),
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);


    if (typeof window === 'undefined') return null;

    return createPortal(
        <div
            className={`fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center transition-opacity duration-${transitionDuration} ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} ${center ? 'items-center' : 'items-end'}`}
            onClick={() => parentClose && setIsOpen(false)}
        >
            <div
                className={`relative mx-4 bg-white dark:bg-dark shadow-lg rounded transform transition-transform ${isOpen ? 'translate-y-0' : 'translate-y-full'
                    } ${fullScreen
                        ? 'w-full h-full'
                        : ''
                    } `}
                style={{
                    animation: `${isOpen ? `slideUp ${transitionDuration}ms ease-in-out` : ''}`,
                    ...customStyles,
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {showTitle && (
                    <div className="flex items-center justify-between border-b p-2 border-dark dark:border-light">
                        <h3 className="text-xl font-bold">{title || <>&nbsp;</>}</h3>
                        <button
                            className="top-3 right-3 ring-1 ring-dark dark:ring-light rounded-full hover:text-brand hover:ring-brand"
                            onClick={() => setIsOpen(false)}
                        >
                            {v1_close}
                        </button>
                    </div>
                )}
                <div
                    className="p-2 h-auto overflow-auto"
                    style={{ ...customStyles, }}
                >{children}</div>
            </div>
        </div>,
        document.body as HTMLElement
    );
};

export default Modal;
