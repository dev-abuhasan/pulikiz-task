'use client';
import { v1_close, v1_expand_more, v1_favorite, v1_home, v1_person, v1_store, v1_tune } from '@/services/svg/svg';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import headerBg from '@/services/image/bg/header-banner.jpg';
import { useState } from 'react';
import SideMenu from './side-menu';

const Header = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

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
        }
    ];

    return (
        <div
            className="min-h-24 flex items-center relative"
            style={{ backgroundImage: `url(${headerBg.src})`, backgroundSize: 'cover' }}
        >
            <div className="absolute inset-0 bg-black opacity-25 z-0"></div>
            <header className={`p-4 flex justify-center md:justify-between  items-center w-full mx-auto relative z-10`}>
                <nav className="flex space-x-8">
                    <div className="relative">
                        <button
                            className={`text-white bg-brand py-1 px-7 flex items-center rounded transition-all duration-300`}
                            onClick={() => setOpen(!open)}
                        >
                            {v1_tune}
                        </button>
                        <SideMenu open={open} />
                    </div>

                    {links.map((link, index) => (
                        <Link key={index} href={link.path} className={`text-white hover:bg-brand flex items-center rounded ${pathname === link.path ? 'bg-brand' : ''}`}>
                            <span className="inline-block py-1 px-2">
                                {link.icon}
                            </span>
                        </Link>
                    ))}
                </nav>
                <div className="space-x-4 md:flex hidden">
                    <button className="text-white flex items-center bg-blue-900 p-2 rounded-3xl">
                        <span className="mr-2 h-8 w-8 bg-light text-dark flex items-center justify-center rounded-3xl">{v1_store}</span>
                        Become a Partner
                        <span className="pl-2">{v1_expand_more}</span>
                    </button>
                    <button className="text-white flex items-center bg-blue-900 p-2 rounded-3xl">
                        <span className="mr-2 h-8 w-8 bg-light text-dark flex items-center justify-center rounded-3xl">{v1_person}</span>
                        Become a Partner
                        <span className="pl-2">{v1_expand_more}</span>
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;
