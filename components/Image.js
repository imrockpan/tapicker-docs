export default ({ width, height, center, src, alt }) => {
  return (
    <p className={center ? "text-center" : undefined}>
      <i
        className="inline-block rounded-lg shadow-lg outline outline-1 outline-gray-300 overflow-hidden"
        style={{ width, height }}
      >
        <img className="object-cover" src={src} alt={alt} />
      </i>
    </p>
  );
};
