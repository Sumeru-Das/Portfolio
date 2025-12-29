export default function Projects({
  name,
  img,
  alt,
  type,
  link,
  year,
  tools,
  onHover,
}) {
  return (
    <div
      onMouseEnter={() => onHover?.('Click to see live')}
      onMouseLeave={() => onHover?.(null)}
    >
      <a
        target="_blank"
        rel="noreferrer"
        href={link}
        className="img group inline-block overflow-hidden  duration-200 ease-linear hover:rounded-3xl"
      >
        <img
          className="w-screen duration-700 ease-in-out group-hover:scale-105"
          src={img}
          alt={alt}
          width="800"
          height="600"
        />{" "}
      </a>

      <div className="mt-4">
        <div className="mb-3 flex space-x-2">
          <p className="rounded-full border border-secondary-600 px-4 py-1 text-secondary-600">
            {tools}
          </p>
        </div>

        <h3 className="uppercase text-primary-200">{name}</h3>
        <p className="text-primary-400">{type}</p>
      </div>
    </div>
  );
}
