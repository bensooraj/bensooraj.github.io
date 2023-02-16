import styles from '../styles/MDImage.module.css';

const MDImage = ({ src, alt, width, height }) => {
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            className={styles.carousel}
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    );
};

export default MDImage;

// let's set a default title
MDImage.defaultProps = {
    width: "100%",
    height: "100%",
};