export default function ({ id, image, firstName, lastName }) {
  return (
    <figure className="profile-figure">
      <div className="w-3/12 h-42 rounded-md ring-2 ring-slate-800 shadow-lg shadow-slate-50">
        <button
          hx-get={`profile?id=${id}`}
          className="w-full p-4 flex-col justify-center items-center"
        >
          <img
            src={`image/${image}`}
            alt={`${firstName}-${lastName}`}
            className="w-40 h-40"
          />
          <figcaption className="mt-2">{`${firstName} ${lastName}`}</figcaption>
        </button>
      </div>
    </figure>
  );
}
