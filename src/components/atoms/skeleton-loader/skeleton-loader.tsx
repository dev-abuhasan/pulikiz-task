import styles from './styles/skeleton-loader.module.scss';

export const SkeletonLine = ({ width, height, margin, customStyles }: any) => {
    return (
        <div
            className={styles.line_skeleton}
            style={{ width: width ? width : '100%', height: height ? height : '2em', margin: margin ? margin : '0', ...customStyles }}
        ></div>
    );
};

export const SkeletonAvatar = ({ width, height, radius, margin }: any) => {
    return (
        <div
            className={styles.avatar_skeleton}
            style={{
                width: width ? width : '100px',
                height: height ? height : '100px',
                borderRadius: radius ? radius : '6px',
                margin: margin ? margin : '0'
            }}
        ></div>
    );
};
export const SkeletonCartPage = () => {
    return (
        <div className={`container`}>
            <div className={styles.items_list}>
                <SkeletonLine height={'40px'} width={'50%'} margin={'0 5px 10px 0'} />
                <SkeletonLine height={'40px'} width={'50%'} margin={'0 0 10px 0'} />
            </div>
            {/* <Card customShadow border>
                {[...Array(10)].map((_, i) => (
                    <SkeletonProductList key={i} />
                ))}
            </Card> */}
        </div>
    );
};
