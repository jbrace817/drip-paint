function HomeGallery() {
  return (
    <section>
      <div className="mx-auto flex max-w-[80rem] flex-wrap items-center justify-center py-4 md:py-8">
        <button
          type="button"
          className="mb-3 me-3 rounded-full border border-orange-950 bg-white px-5 py-2.5 text-center font-body text-base font-medium text-orange-950 transition hover:bg-orange-500 focus:bg-orange-100 focus:outline-none focus:ring-4 focus:ring-orange-300"
        >
          All categories
        </button>
        <button
          type="button"
          className="mb-3 me-3 rounded-full border border-orange-950 bg-white px-5 py-2.5 text-center font-body text-base font-medium text-orange-950 transition hover:bg-orange-500 focus:bg-orange-100 focus:outline-none focus:ring-4 focus:ring-orange-300"
        >
          Shoes
        </button>
        <button
          type="button"
          className="mb-3 me-3 rounded-full border border-orange-950 bg-white px-5 py-2.5 text-center font-body text-base font-medium text-orange-950 transition hover:bg-orange-500 focus:bg-orange-100 focus:outline-none focus:ring-4 focus:ring-orange-300"
        >
          Bags
        </button>
        <button
          type="button"
          className="mb-3 me-3 rounded-full border border-orange-950 bg-white px-5 py-2.5 text-center font-body text-base font-medium text-orange-950 transition hover:bg-orange-500 focus:bg-orange-100 focus:outline-none focus:ring-4 focus:ring-orange-300"
        >
          Electronics
        </button>
        <button
          type="button"
          className="mb-3 me-3 rounded-full border border-orange-950 bg-white px-5 py-2.5 text-center font-body text-base font-medium text-orange-950 transition hover:bg-orange-500 focus:bg-orange-100 focus:outline-none focus:ring-4 focus:ring-orange-300"
        >
          Gaming
        </button>
      </div>
      <div className="mx-auto grid max-w-[80rem] grid-cols-2 gap-4 px-4 md:grid-cols-3">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default HomeGallery;
