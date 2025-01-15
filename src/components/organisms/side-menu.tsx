'use client';

import { v1_favorite, v1_home, v1_local_shipping, v1_store } from "@/services/svg/svg";
import Link from "next/link";

const SideMenu = ({ open }: any) => {
    const links = [
        {
            icon: v1_home,
            path: '/a',
        },
        {
            icon: v1_store,
            path: '/',
        },
        {
            icon: v1_favorite,
            path: '/b',
        },
        {
            icon: v1_home,
            path: '/c',
        },
        {
            icon: v1_local_shipping,
            path: '/',
        },
    ];

    return (
        <div
            className={`shadow absolute top-7 left-0 w-20 bg-brand z-50 rounded overflow-hidden flex flex-col justify-between align-items-center transition-all duration-300 ${open ? 'h-[640px]' : 'h-0'
                }`}
        // style={{ maxHeight: '640px' }}
        >
            <nav className="flex flex-col items-center space-y-4 pt-16">
                {links.map((link, index) => (
                    <Link key={index} href={link.path} className={`text-white hover:bg-brand flex items-center rounded`}>
                        <span className="inline-block py-1 px-2">
                            {link.icon}
                        </span>
                    </Link>
                ))}
            </nav>
            <div className="flex flex-col items-center space-y-4 mb-10">
                <button className="bg-light w-full ml-4 text-error rounded-s-full py-2 px-2 flex items-center rounded">
                    {v1_store}
                </button>
            </div>
        </div>
    );
};

export default SideMenu;
