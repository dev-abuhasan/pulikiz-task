'use client';
import { v1_check_box, v1_check_box_outline_blank, v1_radio_button_checked, v1_radio_button_unchecked, v1_visibility, v1_visibility_off } from '@/services/svg/svg';
import { useState } from 'react';

interface ButtonLinkProps {
    label?: string;
    name?: string;
    icon?: any;
    disabled?: boolean;
    type?: string;
    rounded?: boolean;
    error?: boolean;
    msg?: string;
    success?: boolean;
    value?: string | boolean | number;
    defaultValue?: string;
    placeholder?: string;
    onIconClick?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onCheckClick?: (e: boolean) => void;
}

const Input = ({ label, placeholder, name, icon, disabled, type, rounded, error, msg, success, value, defaultValue, onIconClick, onChange, onCheckClick }: ButtonLinkProps) => {
    const [showPassword, setShowPassword] = useState('password');
    // const inputRef = useRef<any>(null);

    // useEffect(() => {
    //     if (inputRef.current && type !== 'checkbox' && type !== 'radio') {
    //         setTimeout(() => {
    //             inputRef.current.focus();
    //         }, 100);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []);

    const inputClass = () => {
        if (success) {
            return 'border-2 border-green-600 dark:border-green-500 dark:focus:border-green-500 focus:border-green-600 dark:text-white text-gray-900';
        } else if (error) {
            return 'border-2 border-red-600 dark:border-red-500 dark:focus:border-red-500 focus:border-red-600 dark:text-white text-gray-900';
        } else {
            return 'border-2 border-gray-600';
        }

    }
    // const labelClass = () => {
    //     if (success) {
    //         return 'text-green-600 dark:text-green-500 bg-white dark:bg-gray-900';
    //     } else if (error) {
    //         return 'text-red-600 dark:text-red-500 bg-white dark:bg-gray-900';
    //     } else {
    //         return 'bg-white dark:bg-gray-900';
    //     }

    // }
    const infoClass = () => {
        if (success) {
            return 'text-green-600 dark:text-green-400 visible';
        } else if (error) {
            return 'text-red-600 dark:text-red-400 visible';
        } else {
            return 'text-gray-600 dark:text-gray-400 invisible';
        }
    }
    const getIcon = () => {
        if (name === 'password') {
            return showPassword === 'password' ? v1_visibility : v1_visibility_off;

        } else {
            return icon;
        }
    }

    if (type === 'checkbox' || type === 'radio') {
        const getCheckIcon = () => {
            if (type === 'checkbox') {
                if (value) {
                    return v1_check_box;
                } else {
                    return v1_check_box_outline_blank;
                }
            } else {
                if (value) {
                    return v1_radio_button_checked;
                } else {
                    return v1_radio_button_unchecked;
                }
            }
        }
        return (
            <div>
                <div className="flex items-center" onClick={() => {
                    if (onCheckClick) {
                        onCheckClick(!value);
                    }
                }}>
                    <span className={`${error ? 'text-error' : ''} ${success ? 'text-success' : ''} ${value ? 'text-brand' : ''}`}>{getCheckIcon()}</span>
                    <label className={`text-base pl-2 ${error ? 'text-error' : ''} ${success ? 'text-success' : ''}`}>{label || name || type || 'Checkbox'}</label>
                </div>
                <p className={`my-1 text-xs ${infoClass()}`}>{msg ? msg : error ? 'Checked is required!' : 'Success!'}</p>
            </div>
        )
    }

    return (
        <div>
            <div className={`relative main_input ${disabled ? 'opacity-75' : ''}`}>
                <input
                    // ref={inputRef}
                    disabled={disabled}
                    name={name}
                    type={name === 'password' ? showPassword : type || 'text'}
                    className={`block pb-2 pt-2 w-full text-base bg-transparent border-1 appearance-none focus:outline-none focus:ring-0 peer ${inputClass()} ${rounded ? 'rounded-3xl' : 'rounded-lg'} ${(icon || name === 'password') ? 'pl-4 pr-10' : 'px-4'} ${disabled ? 'cursor-not-allowed' : ''}`}
                    placeholder={placeholder}
                    autoFocus
                    value={value as string}
                    defaultValue={defaultValue}
                    onChange={(e) => {
                        if (onChange) {
                            onChange(e);
                        }
                    }}
                />
                {(icon || name === 'password') && <div
                    onClick={() => {
                        if (onIconClick) {
                            onIconClick();
                        }
                        if (name === 'password') {
                            setShowPassword(showPassword === 'password' ? 'text' : 'password');
                        }
                    }}
                    className={`absolute right-3 top-[11px] ${disabled ? 'cursor-not-allowed' : ''} text-brand`}
                >{getIcon()}</div>}
                <label className="text-sm capitalize absolute -top-[9px] ml-4 bg-brand text-light px-2 rounded">{label || name || type || 'Label'}</label>
                {/* <label className={`absolute text-base duration-300 transform -translate-y-4 scale-75 top-2 z-10 ml-3 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ${labelClass()} ${disabled ? 'cursor-not-allowed' : ''}`}>{label || name || type || 'Text'}</label> */}
            </div>
            <p className={`my-1 pl-3 text-xs ${infoClass()}`}>{msg ? msg : error ? 'Field is required!' : 'Success!'}</p>
        </div >
    );
};

export default Input;