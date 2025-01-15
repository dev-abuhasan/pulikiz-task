// 'use client';
import Image, { StaticImageData } from 'next/image';
import notFound from '@/services/image/placeholder/undefine.png';
import styles from './styles/img.module.scss';
import { APP_NAME } from '@/services/constants/config';
import { truncatedContent } from '@/services/utils/helper';

interface Props {
    alt?: string;
    src: string | StaticImageData | undefined;
}


const Img: React.FC<Props> = ({ alt, src }) => (
    <div className={`${styles.img_wrap}`}>
        <Image
            alt={(alt && truncatedContent({ content: alt, maxCharacters: 80 })) || APP_NAME}
            src={src || notFound}
            fill
            unoptimized
            priority={true}
            quality={100}
        />
    </div>
);

export default Img;
