function Card({ icon, title, description, index, align }) {
  return (
    <div
      style={{ top: `calc(1rem*${index + 1})` }}
      className={`sticky w-full max-w-md space-y-6 ${align} rounded-xl border bg-white px-8 py-12 shadow-lg md:static`}
    >
      <div className="w-fit rounded-xl bg-orange-100 p-3">{icon}</div>
      {/* <h2 className="space-y-1 text-2xl font-bold leading-none">
        

        <span className="block font-headings text-3xl">{title}</span>
      </h2> */}
      <h2 className="block space-y-1 font-headings text-2xl font-semibold">
        {title}
      </h2>
      <p className="font-body text-base text-gray-700">{description}</p>
    </div>
  );
}

export default Card;
