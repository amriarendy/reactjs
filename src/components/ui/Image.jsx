export function Image({ id, src, alt, imageClass, path }) {
    return (
        <>
            <img id={id} className={imageClass} src={src} alt={alt} />
        </>
    )
}