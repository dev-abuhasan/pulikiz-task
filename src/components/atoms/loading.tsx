import * as Skeleton from './skeleton-loader/skeleton-loader';
import styles from './styles/loading.module.scss';
interface Props {
    overlay?: boolean;
    overlayFixed?: boolean;
    bgWhite?: boolean;
    pagesStyle?: {
        cartStyle?: boolean;
    };
    single?: {
        line?: boolean;
        width?: string;
        height?: string;
        margin?: string;
    };
}

const Loading = ({ single, pagesStyle, overlay, overlayFixed, bgWhite }: Props) => {
    if (single?.line) {
        return <Skeleton.SkeletonLine width={single?.width} height={single?.height} margin={single?.margin} />;
    }
    if (pagesStyle?.cartStyle) {
        return <Skeleton.SkeletonCartPage />;
    }
    if (overlay) {
        return (
            <div className={styles.overlay_wrap}>
                <div className={styles.overlay_bg}>&nbsp;</div>
                <div className={styles.overlay}>
                    <span className={styles.loader}></span>
                    <p>Please Wait...</p>
                </div>
            </div>
        );
    }
    if (overlayFixed) {
        return (
            <div className={`${styles.overlay_wrap_fixed} ${bgWhite ? styles.bg_white : ''}`}>
                <div className={styles.overlay_bg}>&nbsp;</div>
                <div className={styles.overlay}>
                    <span className={styles.loader}></span>
                    {/* <span className={styles.logo_icon}>{v1_logo}</span> */}

                    <div className={styles.logo_icon}>
                        <svg viewBox="0 0 1320 300">
                            <text x="50%" y="50%" dy=".35em" textAnchor="middle">
                                Khabar Bela
                            </text>
                        </svg>
                    </div>
                    <p>Please Wait...</p>
                </div>
            </div>
        );
    }
    return (
        <div>
            <div className={styles.loader_wrp}>
                <span className={styles.loader}></span>
            </div>
        </div>
    );
};

export default Loading;