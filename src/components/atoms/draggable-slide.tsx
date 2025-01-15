import styles from './styles/draggable-slide.module.scss';

interface Props {
    children?: any;
    title?: string;
    label?: string;
    link?: string;
}

const DraggableSlider = ({ children, title, label, link }: Props) => {
    return (
        <div className={`${styles.draggable_section} ${!title ? styles.space_main : ''}`}>
            {title && title}
            <div className={`${styles.draggable_container}`}>{children}</div>
        </div>
    );
};

export default DraggableSlider;
