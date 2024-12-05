function Card({ icon, title, description, index, align }) {
  return (
    <div
      className={`sticky top-[calc(1rem*${index + 1})] w-full max-w-md space-y-6 ${align} rounded-xl border bg-white px-8 py-12 shadow-lg md:static`}
    >
      <div className="w-fit rounded-xl bg-orange-100 p-3">{icon}</div>
      {/* <h2 className="space-y-1 text-2xl font-bold leading-none">
        

        <span className="block font-headings text-3xl">{title}</span>
      </h2> */}
      <h2 className="block space-y-1 font-headings text-3xl font-bold">
        {title}
      </h2>
      <p className="font-body text-lg text-gray-700">{description}</p>
    </div>
  );
}

export default Card;
