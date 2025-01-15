'use client';
import { v1_expand_more } from '@/services/svg/svg';
import { useState } from 'react';

const CustomSelect = ({ label, padding = 'px-5', defaultSelected, uppercase = 'uppercase', rounded = 'rounded-full' }: any) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setOpen(!open);
    };

    return (
        <div className="relative">
            <span className={`${padding} text-gray-400 ${uppercase}`}>{label || 'TYPE'}</span>
            <div
                className={`bg-gray-200 min-w-[150px] ${rounded} px-4 py-3 border-none cursor-pointer flex items-center justify-between`}
                onClick={toggleDropdown}
            >
                <span className="font-semibold">{selectedOption || defaultSelected || 'Select an option'}</span>
                <div className={`text-gray-400 transform transition-transform ${open ? 'rotate-180' : ''}`}>
                    {v1_expand_more}
                </div>
            </div>
            <div
                className={`absolute left-0 w-full bg-gray-100 rounded-lg shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${open ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} p-3`}
            >

                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </div>
        </div>
    );
};

export default CustomSelect;
