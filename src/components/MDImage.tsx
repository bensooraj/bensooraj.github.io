interface MDImageProps {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
}

const MDImage = ({ src, alt, width = "100%", height = "100%" }: MDImageProps) => {
    return (
        <img
            // className=''
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    );
};

export default MDImage;
