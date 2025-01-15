'use client';
import dynamic from 'next/dynamic';

// export const ThemeSwitch = dynamic(() => import('@/components/molecules/theme-switch').then((module) => module.ShopUnderMoneySeeMore), {
// loading: () => <Loading header />,
//     ssr: false
// });

export const LazyThemeSwitch = dynamic(() => import('@/components/molecules/theme-switch'), {
    ssr: false
});
